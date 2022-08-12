import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "./Store.css"
function ItemCards(props) {
  return (
    <div>
      <Card className="text-center display-cards" >
        <CardHeader color="dark">{props.name}</CardHeader>
        <CardBody>
          <ul>
            <li>Quantity: {props.quantity}</li>
            <li>Price: {props.price}</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}

export default ItemCards;
