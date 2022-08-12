import { useState } from "react";
import shopping from "../images/shopping.svg";
import LoadNGOForDonor from "./LoadNGOforDonor";
import "./Store.css";
import fetchDetails from "./fetchDetails";

function DonorHome() {
  const [details, setDetails] = useState(null);

  fetchDetails("donors").then((response) => setDetails(response));
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
              <p>Name: {details && details.name}</p>
              <p>Aadhar: {details && details.aadhar}</p>
              <p>Phone: {details && details.phone}</p>
              <p>Email: {details && details.email}</p>
              <p>Country: {details && details.country}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonorHome;
