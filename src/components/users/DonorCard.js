import React, { useState } from "react";
import cardimg from "../images/cardimg.svg";
import "./Store.css";
import { Link } from "react-router-dom";

function DonorCard(props) {
  const [data, setData] = useState({
    id: "1",
    title: props.name,
    address: props.address,
  });

  return (
    <div className="mycard display-cards m-4">
      <h2 className="cardname">{props.name}</h2>
      <div className="image">
        <img src={cardimg} alt="cardimg" height="200px" />
      </div>
      <div className="cardFooter">
        <Link to={{ pathname: "/donor" }} state={{ data: data }}>
          <button className="buy m-4">Donate Now</button>
        </Link>
      </div>
    </div>
  );
}

export default DonorCard;
