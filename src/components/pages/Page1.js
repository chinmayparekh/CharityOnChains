import React from "react";
import "../../styles/Page1.css";
import eye from "../images/eye.png";
import tree from "../images/tree.png";
import salary from "../images/salary.png";
import heart from "../images/heart.png";
import cardiogram from "../images/cardiogram.png";
import logo from "../images/logo.png";
import blackChild from "../images/blackChild.jpg";
import banner from "../images/banner.svg";
const Page1 = (props) => {
  return (
    <>
      <div className="banner">
         <div className="halfcontainer">
            <img src={banner} alt="banner"/>
         </div>
         <div className="halfcontainer">
            <div className="white mb-4">
            Transform Your Business With <span className="cyan">BlockChain</span>
            </div>
            <div className="cyanline mb-4"></div>
            <div className="white mb-5 smaller">
            Disrupt your industry. Power your startup. Rationalize and control your business.
            </div>
            <button className="mybutton mt-5"> Get Started</button>
            {/* <br></br> */}
           
         </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default Page1;
