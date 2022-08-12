import React, { Component } from "react";
import { fetchStorage } from "../../utils/tzkt";
import { getAccount } from "../../utils/wallet";
import StoreCard from "./StoreCard";

class LoadItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false,
    };
  }

  componentDidMount() {
    const ItemLoader = async () => {
      const account = await getAccount();
      const storage = await fetchStorage();
      const it = storage["store_items"][account];
      if(typeof(it)!=="undefined"){
        this.setState({ items: it,loaded: true})
      }
    };
    ItemLoader();
    console.log(this.state.items);
  }
  render() {
    return (
      <>
        {this.state.loaded?this.state.items.map((item)=> <StoreCard name={item.name} price={item.price}></StoreCard>):
        <div className="row"> 
					<h2>You have no items to display! Add items to show them here.</h2>
				</div>}
      </>
    );
  }
}

export default LoadItem;
