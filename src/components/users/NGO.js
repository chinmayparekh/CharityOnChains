import { fetchStorage } from "../../utils/tzkt";
import { sendFunds, deleteItem } from "../../utils/operation";
import "./Store.css";
import NgoCard from "./NgoCard";
import shopping from "../images/shopping.svg";
import LoadStoresForNGO from "./LoadStoresForNGO";

function NGO() {
  //console.log(all_items)
  let storage = {};
  let newarray = [
    {
      name: "q",
      price: "1",
      valid: "1",
      address: "tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde",
    },
    {
      name: "q",
      price: "1",
      valid: "1",
      address: "tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde",
    },
    {
      name: "q",
      price: "1",
      valid: "1",
      address: "tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde",
    },
    {
      name: "q",
      price: "1",
      valid: "1",
      address: "tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde",
    },
    {
      name: "q",
      price: "1",
      valid: "1",
      address: "tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde",
    },
    {
      name: "q",
      price: "1",
      valid: "1",
      address: "tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde",
    },
    {
      name: "q",
      price: "1",
      valid: "1",
      address: "tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde",
    },
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

  // const BuyItem = async (price, address, name) => {
  //   await sendFunds(address, price);
  //   await deleteItem(address, name);
  // };
  // BuyItem(100000,"tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde","q");
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bigdiv">
        <div className="containerdiv">
          <div className="containerdiv">
            {/* {newarray.map((item) => {
              return (
                <NgoCard
                  price={item.price}
                  name={item.name}
                  address={item.address}
                />
                // <div>{item.price} {item.name}</div>
              );
            })} */}
            <LoadStoresForNGO></LoadStoresForNGO>
          </div>
        </div>
        <div className="image">
          <img src={shopping} alt="shopping" height="400px" />
          {/* <br/> */}
          <h1 className="mt-5">These are the Items Available in the Store</h1>
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

export default NGO;
