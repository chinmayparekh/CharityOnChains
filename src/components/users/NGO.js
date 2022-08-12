import "./Store.css";
import shopping from "../images/shopping.svg";
import LoadStoresForNGO from "./LoadStoresForNGO";

function NGO() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bigdiv">
        <div className="containerdiv">
          <div className="containerdiv">
            <LoadStoresForNGO></LoadStoresForNGO>
          </div>
        </div>
        <div className="image">
          <img src={shopping} alt="shopping" height="400px" />
          <h1 className="mt-5">These are the Items Available in the Store</h1>
        </div>
      </div>
    </>
  );
}

export default NGO;
