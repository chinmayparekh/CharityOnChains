import React from "react";
import cardimg from "../images/cardimg.svg";
import "./Store.css";

function StoreCard(props) {
  return (
    <div className="mycard display-cards m-4">
      <h2 className="cardname">{props.name}</h2>
      <div className="image">
        <img src={cardimg} alt="cardimg" height="200px" />
      </div>
      <div className="cardFooter">
        <p className="price mt-3">Price: &#42793; {props.price / 1e6}</p>
        {/* <button className="buy m-4">Buy Now</button> */}
      </div>
    </div>
  );
}

export default StoreCard;
