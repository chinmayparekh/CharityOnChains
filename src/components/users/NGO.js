import "./Store.css";
import {useState } from 'react';
import shopping from "../images/shopping.svg";
import LoadStoresForNGO from "./LoadStoresForNGO";
import fetchDetails from "./fetchDetails";
function NGO() {
  const [details,setDetails]=useState(null);

  fetchDetails("ngos").then((response)=>setDetails(response))
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
              <p>Name: {details && details.name}</p>
              <p>Sector: {details && details.sector}</p>
              <p>Type: {details && details.sector}</p>
              <p>License: {details && details.license}</p>
              <p>Email: {details && details.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NGO;
