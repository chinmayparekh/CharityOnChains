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
        <div className="image move">
          <h1 className="mt-5">These are the Items Available in the Store</h1>
          <img src={shopping} alt="shopping" height="400px" />
          <div className="yourDetails m-3">
            <h1 className="mt-5">Your Details</h1>
            <div className="details">
              <p>Name</p>
              <p>Sector</p>
              <p>Type</p>
              <p>Sector</p>
              <p>License</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NGO;
