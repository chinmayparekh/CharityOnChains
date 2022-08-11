import React from 'react';
import { Card, CardImg, CardBody, CardHeader, CardText } from "reactstrap";
import cardimg from "../images/cardimg.svg"
import "./Store.css"


function StoreCard(props){
	return (
    <div className="mycard m-4">
      <h2 className="cardname">{props.name}</h2>
      <div className="image">
        <img src={cardimg} alt="cardimg" height="200px"/>
      </div>
      <div className="cardFooter">
        <p className="price mt-3">Price: ₹{props.price}</p>
        {/* <button className="buy m-4">Buy Now</button> */}
      </div>
    </div>
  )





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

export default StoreCard;