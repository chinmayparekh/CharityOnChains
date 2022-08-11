import React,{Component,useState} from 'react';
import { fetchStorage } from "../../utils/tzkt";
import { getAccount } from "../../utils/wallet";
import StoreCard from "./StoreCard";

class LoadItem extends Component{
	constructor(props){
		super(props);
		this.state={
			items: [],
			loaded: false
		}
	}

	componentDidMount(){
		const ItemLoader=async ()=>{
		const account = await getAccount();
		const storage = await fetchStorage();
		const it=storage["store_items"][account];
		this.setState({items: it, loaded: true});
		}
		ItemLoader();
		console.log(this.state.items);
	}
	render(){
		return (
			<>
				{this.state.loaded && this.state.items.map((item)=> <StoreCard name={item.name} price={item.price}></StoreCard>)}
			</>
		)
	}

}

export default LoadItem;