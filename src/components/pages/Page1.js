import React from "react";
import "../../styles/Page1.css";
import eye from "../images/eye.png";
import tree from "../images/tree.png";
import salary from "../images/salary.png";
import heart from "../images/heart.png";
import cardiogram from "../images/cardiogram.png";
import logo from "../images/logo.png";
import blackChild from "../images/blackChild.jpg";
const Page1 = (props) => {
  return (
    <>
      <section>
        <div>
          <img className="ngo-banner" src={blackChild} alt=""></img>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 offset-sm-2">
            <div className="title">
              <p>Don’t wait. This time is to Give</p>
            </div>
            <div className="description">
              <p>
                A blockchain based charity application where contributors can
                see the journey of the donation in realtime and confirm if it’s
                reaching the deserving hands or not.
              </p>
            </div>
          </div>
          <div className="images col-12 col-sm-5">
            <img src={logo} alt="logo" height="225px" width="225px"></img>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-2 me-1 offset-1">
            <img src={eye} alt="" height="60px" width="60px"></img>
          </div>
          <div className="col-2 m-1">
            <img src={tree} alt="" height="60px" width="60px"></img>
          </div>
          <div className="col-2 m-1">
            <img src={heart} alt="" height="60px" width="60px"></img>
          </div>
          <div className="col-2 m-1">
            <img src={salary} alt="" height="60px" width="60px"></img>
          </div>
          <div className="col-2 m-1">
            <img src={cardiogram} alt="" height="60px" width="60px"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
