import React from "react";
import "../../styles/Page1.css";
import eye from "../images/eye.png";
import tree from "../images/tree.png";
import salary from "../images/salary.png";
import heart from "../images/heart.png";
import cardiogram from "../images/cardiogram.png";
import logo from "../images/logo.png";
const Page1 = (props) => {
  return (
    <>
      <section className="mt-50">
        <div className="flex-container">
          <div className="content">
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
          <div className="images">
            <img className="logo-image" src={logo} alt=""></img>
          </div>
        </div>
      </section>
      <div className="flex brands mb-50">
        <img className="logos" src={eye} alt=""></img>
        <img className="logos" src={tree} alt=""></img>
        <img className="logos" src={heart} alt=""></img>
        <img className="logos" src={salary} alt=""></img>
        <img className="logos" src={cardiogram} alt=""></img>
      </div>
    </>
  );
};

export default Page1;
