import React from "react";
import "../styles/Page1.css";

import {Card,CardImg, CardBody, CardHeader,CardText} from 'reactstrap';

const Layout = (props) => {
  return (
      <Card className="text-center">
        <CardHeader color="dark" className="layout-heading">{props.title}</CardHeader>
        <CardImg top src={props.image} alt={props.id} className="layout-image"></CardImg>
        <CardBody>
          <CardText>{props.content}</CardText>
          <button className="btn btn-info" onClick={props.register}>Register as {props.id}</button>
        </CardBody>
      </Card>
  )  
};

export default Layout;
