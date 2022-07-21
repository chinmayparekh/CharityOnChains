import React from "react";
import "../styles/Page1.css";
import ngo from "./images/ngo.png";
import donors from "./images/donor.png";
import help from "./images/help.png";
import store from "./images/store.png";

const Layout = (props) => {
  const leftDiv = {
    order: 1,
  };
  const rightDiv = {
    order: 2,
  };

  let div1, div2, imageDiv;

  if (props.order === "1") {
    div1 = leftDiv;
    div2 = rightDiv;
    imageDiv = <img src={ngo} alt=""></img>;
  } else if (props.order === "2") {
    div1 = rightDiv;
    div2 = leftDiv;
    imageDiv = <img src={donors} alt=""></img>;
  } else if (props.order === "3") {
    div1 = leftDiv;
    div2 = rightDiv;
    imageDiv = <img src={help} alt=""></img>;
  } else {
    div1 = rightDiv;
    div2 = leftDiv;
    imageDiv = <img src={store} alt=""></img>;
  }

 
  return (
    <>
      <section className=" mt-150 mb-75">
        <div className="flex-container ">
          <div className="content" style={div1}>
            <div className="red-title">
              <p>{props.title}</p>
            </div>
            <div className="information-div mb-10">
              <p className="information">{props.content}</p>
            </div>
            <div className="buttons">
              <button onClick={props.register} className="start-btn text-white">
                Register Yourself
              </button>
            </div>
          </div>
          <div className="images" style={div2}>
            {imageDiv}
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
