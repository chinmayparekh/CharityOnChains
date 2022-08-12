import React from "react";
import { Card, CardImg, CardBody, CardHeader, CardText } from "reactstrap";
import cardimg from "../images/cardimg.svg";
import "./Store.css";
import { NGO } from "./NGO";
import { sendFunds, deleteItem } from "../../utils/operation";

function NgoCard(props) {
  const BuyItem = async (price, address, name) => {
    console.log("beginning");
    await sendFunds(address, price);
    console.log("end of func");

    await deleteItem(address, name);
    console.log("end of delete func");
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
            console.log(props);
            BuyItem(props.price, props.address, props.name);
            console.log("button clicked");
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );

  // <div>
  // <Card className="text-center">
  //   <CardHeader color="dark">
  //     {props.name}
  //   </CardHeader>
  //   <CardBody>
  //     <ul>
  // 			<li>Price: {props.price}</li>
  // 		</ul>
  //   </CardBody>
  // </Card>
  // </div>)
}

export default NgoCard;
