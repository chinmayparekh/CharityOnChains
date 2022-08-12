import shopping from "../images/shopping.svg";
import LoadNGOForDonor from "./LoadNGOforDonor";
import "./Store.css";

function DonorHome() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bigdiv">
        <div className="containerdiv">
          <div className="containerdiv">
            <LoadNGOForDonor></LoadNGOForDonor>
          </div>
        </div>
        <div className="image">
          <h1 className="mt-5">Here are the List of NGOs</h1>
          <img src={shopping} alt="shopping" height="400px" />
          <div className="yourDetails m-3">
            <h1 className="mt-5">Your Details</h1>
            <div className="details">
              <p>Name</p>
              <p>Aadhar</p>
              <p>Phone</p>
              <p>Email</p>
              <p>Country</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonorHome;
