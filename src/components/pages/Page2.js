import React from "react";
import name1 from "../images/chinmay.jpeg";
import name2 from "../images/sumanth.jpeg";
import name3 from "../images/kritin.jpeg";
import name4 from "../images/chinthan.jpg"
import "../../styles/Card.css";

const Page2 = (props) => {
  const cardBackground = {
    backgroundColor: "#D9ECFFB2",
  };

  return (
    <>
      <div className="column-centralize">
        <div className="column-centralize">
          <div className="card" id="card-about">
            <div
              className="card-body flex-container "
              id="card-about"
              style={cardBackground}
            >
              <div className="centralize">
                <div>
                  <p className="heading">{props.heading}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="team">
            <div className="person">
              <img src={name1} alt=""></img>
              <p className="names">{props.name1}</p>
            </div>
            <div className="person">
              <img src={name2} alt=""></img>
              <p className="names">{props.name2}</p>
            </div>
            <div className="person">
              <img src={name3} alt=""></img>
              <p className="names">{props.name3}</p>
            </div>
            <div className="person">
              <img src={name4} alt=""></img>
              <p className="names">{props.name4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
