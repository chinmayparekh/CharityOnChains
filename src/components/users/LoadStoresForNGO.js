import React, { Component } from "react";
import { fetchStorage } from "../../utils/tzkt";
import NgoCard from "./NgoCard";
class LoadStoresForNGO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      loaded: false,
    };
  }

  componentDidMount() {
    const StoreLoader = async () => {
      const storage = await fetchStorage();
      const it = storage["store_items"];
      let stores = [];
      for (const key in it) {
        for (const j in it[key]) {
          if (it[key][j].valid === "1")
            stores.push({ address: key, ...it[key][j] });
        }
      }
      if (stores.length > 0) this.setState({ stores: stores, loaded: true });
    };
    StoreLoader();
  }
  render() {
    return (
      <>
        {this.state.loaded ? (
          this.state.stores.map((store) => (
            <NgoCard
              name={store.name}
              price={store.price}
              address={store.address}
            ></NgoCard>
          ))
        ) : (
          <div className="row">
            <h2>No Stores to display! Come back in some time to view them.</h2>
          </div>
        )}
      </>
    );
  }
}

export default LoadStoresForNGO;
