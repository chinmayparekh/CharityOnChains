import { fetchStorage } from "../../utils/tzkt";
import { sendFunds, deleteItem } from "../../utils/operation";
import "./Store.css";
import DonorCard from "./DonorCard";
import shopping from "../images/shopping.svg";


function DonorHome() {
  //console.log(all_items)
  let storage = {};
  let newarray = [
    {name: 'Red Cross'},
    {name: 'Humanity'},
    {name: 'Charity Name'},
    {name: 'Charity Name'},
    {name: 'Charity Name'},
    {name: 'Charity Name'},
    {name: 'Charity Name'},
  ];
  const LoadData = async () => {
    let items = [];
    storage = await fetchStorage();
    console.log(storage);
    const it = storage["store_items"];
    console.log(it);
    // items.push(it);
    // console.log(items);
    return items;
  };

  LoadData();
  const BuyItem = async (price, address, name) => {
    await sendFunds(address, price);
    await deleteItem(address, name);
  };
  // BuyItem(100000,"tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde","q");

  // console.log()
  return (
    <>
      <br/>
      <br/>
      <br/>
      <div className="bigdiv">
        <div className="containerdiv">
          
          <div className="containerdiv">
            {newarray.map(item => {
              return (
                <DonorCard name={item.name}/>
              )
            })}
          </div>
        </div>
        <div className="image">
          <h1 className="mt-5">Here are the List of NGOs</h1>
          <img src={shopping} alt="shopping" height="400px"/>
          {/* <br/> */}
          {/* <button
              onClick={openModal}
              className="addItem"
            >
              Add Item
            </button> */}
        </div>
      </div>
    {/* </div> */}
    </>
  );
}

export default DonorHome;
