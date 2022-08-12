import React from "react";
import name1 from "../images/chinmay.jpeg";
import name2 from "../images/sumanth.jpeg";
import name3 from "../images/kritin.jpeg";
import name4 from "../images/chinthan.jpg";
import "../../styles/Card.css";

const Page2 = (props) => {
  return (
    <>
      <div className="banner aboutbiggest">
        <div className="topCard">
          <h1 className="headingText white mb-5">
            Meet Our <span className="cyan">Team</span>
          </h1>
          <div className="hr newhr"></div>
        </div>
        <div className="container">
          <div className="team">
            <div className="person">
              <img src={name1} alt=""></img>
              <p className="names white">{props.name1}</p>
            </div>
            <div className="person">
              <img src={name2} alt=""></img>
              <p className="names white">{props.name2}</p>
            </div>
            <div className="person">
              <img src={name3} alt=""></img>
              <p className="names white">{props.name3}</p>
            </div>
            <div className="person">
              <img src={name4} alt=""></img>
              <p className="names white">{props.name4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
