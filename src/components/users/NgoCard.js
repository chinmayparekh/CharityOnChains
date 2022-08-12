import React from "react";
import cardimg from "../images/cardimg.svg";
import "./Store.css";
import { sendFunds, deleteItem } from "../../utils/operation";

function NgoCard(props) {
  const BuyItem = async (price, address, name) => {
    await sendFunds(address, price);
    await deleteItem(name, address);
  };
  return (
    <div className="mycard m-4">
      <h2 className="cardname">{props.name}</h2>
      <h3 className="address">{props.address}</h3>
      <div className="image">
        <img src={cardimg} alt="cardimg" height="200px" />
      </div>
      <div className="cardFooter">
        <p className="price mt-3">Price: &#42793; {props.price / 1e6}</p>
        <button
          className="buy m-4"
          onClick={() => {
            BuyItem(props.price, props.address, props.name);
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default NgoCard;
