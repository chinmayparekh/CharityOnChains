import React, { useState } from "react";
import { Card, CardImg, CardBody, CardHeader, CardText } from "reactstrap";
import cardimg from "../images/cardimg.svg";
import "./Store.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// mydata = [
//   {
//     name:"Reddy Cross"
//   },
// ];

function DonorCard(props) {
  const [data, setData] = useState({
    id: "1",
    title: props.name,
    address: props.address,
  });

  const mydata = [
    {
      name: props.name,
      address: props.address,
    },
  ];
  //   let navigate = useNavigate();
  // const routeChange = (path) => {
  //   console.log("Button pressed");
  //   navigate(path);
  // };

  return (
    <div className="mycard m-4">
      <h2 className="cardname">{props.name}</h2>
      <div className="image">
        <img src={cardimg} alt="cardimg" height="200px" />
      </div>
      <div className="cardFooter">
        <Link to={{ pathname: "/donor" }} state={{ data: data }}>
          <button
          className="buy m-4"
          // onClick={() => {
          //   
          //   routeChange("/donor");
          // }}
          >
          Donate Now
          </button>
        </Link>
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

export default DonorCard;
