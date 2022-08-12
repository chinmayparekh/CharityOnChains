import React,{Component,useState} from 'react';
import { fetchStorage } from "../../utils/tzkt";
import NgoCard from "./NgoCard";
class LoadStoresForNGO extends Component{
	constructor(props){
		super(props);
		this.state={
			stores: [],
			loaded: false
		}
	}

	componentDidMount(){
		const StoreLoader=async ()=>{
		const storage = await fetchStorage();
		const it=storage["store_items"];
		let stores=[];
		for(const key in it){
			for( const j in it[key]){
				console.log(it[key][j].valid)
				console.log(it[key][j]);
				if(it[key][j].valid==="1") stores.push({"address": key,...it[key][j]})
			}
		}
		this.setState({stores: stores, loaded: true});
		}
		StoreLoader();
		console.log(this.state.stores);
	}
	render(){
		return (
			<>
				{this.state.loaded && this.state.stores.map((store)=> <NgoCard name={store.name} price={store.price} address={store.address} ></NgoCard>)}
			</>
		)
	}

}

export default LoadStoresForNGO;