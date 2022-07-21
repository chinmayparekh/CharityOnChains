import React from "react";
import "../../styles/Page1.css";
import happy from "../images/happy.png";
const Page2 = (props) => {
  return (
    <>
      <section className="red-section">
        <div className="mt-50">
          <p className="heading">You have the power to bring happiness.</p>
        </div>
        <div className="info">
          <p className="text">
            Many fake charity organizations pose as genuine and loot money from
            innocent people in the name of charity. Our charity platform brings
            transparency to online charity trusts.
          </p>
        </div>
        <div className="mt-50 red-images mb-50">
          <img className="screens" src={happy} alt=""></img>
        </div>
        
      </section>
    </>
  );
};

export default Page2;
