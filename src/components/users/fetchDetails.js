import {getAccount} from "../../utils/wallet";
import {fetchStorage} from "../../utils/tzkt"


export const fetchDetails=async (type)=>{
	const acc=await getAccount();
	const storage=await fetchStorage();
	const temp=storage[type][acc];
	console.log(temp);
	return temp;
}

export default fetchDetails;