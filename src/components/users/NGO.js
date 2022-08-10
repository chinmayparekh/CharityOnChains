import { fetchStorage } from "../../utils/tzkt";
import {fetchData} from "../../utils/ipfs/ipfs_fetch";

function NGO() {

  const getItems = async ()=>{
    const storage = await fetchStorage();
    return storage["store_items"];
  }

  let all_hashes = [];
  let all_items = [];

 const getHashes = async()=>{
    const items = await getItems();
    for (const item in items) {
      const list = items[item];
      if(list)
      {
        for(let i=0;i<list.length;i++)
        {
          all_hashes.push(list[i].hash);
        }
      }
    }
 } 

 getHashes();
 console.log(all_hashes);
 
 const getAllItems = async(all_hashes)=>{
    console.log(all_hashes);
    //for(let i=0;i<all_hashes.length;i++)
    //{
      // console.log(all_hashes[0])
      console.log("efe")
      console.log(typeof(all_hashes))
      console.log(all_hashes.length)
      const item = await fetchData(all_hashes[0]);
      console.log(item)
      all_items.push(item)
    //}
    return all_items;
 }

 getAllItems(all_hashes).then((all_items)=>{
  console.log(all_items)
 });

 //console.log(all_items)

    return (
      <>
        <h1>NGO Page</h1>
      </>
    );
  }
  
  export default NGO;