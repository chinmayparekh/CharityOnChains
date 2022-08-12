import React,{Component,useState} from 'react';
import { fetchStorage } from "../../utils/tzkt";
import DonorCard from "./DonorCard";
class LoadNGOForDonor extends Component{
	constructor(props){
		super(props);
		this.state={
			ngo: [],
			loaded: false
		}
	}

	componentDidMount(){
		const StoreLoader=async ()=>{
		const storage = await fetchStorage();
		const it=storage["ngos"];
		let ngos=[];
		for(const key in it){
			ngos.push({address: key, ...it[key]});
		}
		console.log(ngos);
		this.setState({ngo: ngos, loaded: true});
		}
		StoreLoader();
		console.log(this.state.ngo);
	}
	render(){
		return (
			<>
				{this.state.loaded && this.state.ngo.map((ngos)=> <DonorCard name={ngos.name} funds={ngos.funds} address={ngos.address} ngoType={ngos.type} email={ngos.email} sector={ngos.sector} key={ngos.name}></DonorCard>)}
			</>
		)
	}

}

export default LoadNGOForDonor;