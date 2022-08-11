import { fetchStorage } from "../../utils/tzkt";
import { sendFunds, deleteItem } from "../../utils/operation";
function NGO() {
  //console.log(all_items)
  const LoadData = async () => {
    let items = [];
    const storage = await fetchStorage();
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
    // await deleteItem(address, name);
  };
  BuyItem(100000,"tz1Xgq5oEPwJW27vAaRkjribu3bpSPDUzkde","q");
  return (
    <>
      <h1>NGO Page</h1>
    </>
  );
}

export default NGO;
