import React from "react";
import "../../styles/Page1.css";
import Layout from "../Layout";
import { registerDonor,registerNGO,registerStore } from "../../utils/operation";
import { useNavigate } from "react-router-dom";

const Page3 = (props) => {
  const cardBackground = {
    backgroundColor: "black",
  };

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="mt-25 centralize mb-50">
        <div className="card " id="Page3" style={cardBackground}>
          <div className="card-body" id="Page3">
            <div className="card-heading">
              Creative a Better Future through your Help
            </div>
            <div className="card-content ">
              <p className="card-text">
                We have partnered with over 10 NGOs which have revolutionized
                healthcare,sanitation,education and nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Layout
        order="1"
        title="Register yourself as a NGO"
        content="To promote social or political change on a broad scale through our platform. "
        register = {async ()=>{
          try {
            await registerNGO();
            alert("Transaction succesful!");
            routeChange('ngo');
          } catch (err) {
            alert(err.message);
          }  
        }}
      />
      <Layout
        order="2"
        title="Register yourself as a Donor"
        content="Giving is the Best therapy."
        register = {async ()=>{
          try {
            await registerDonor();
            alert("Transaction succesful!");
            routeChange('donor');
          } catch (err) {
            alert(err.message);
          }
        }}
      />
      <Layout
        order="3"
        title="Register yourself as a Store"
        content="Help NGOs by providing your equipement at nominal prices."
        register = {async ()=>{
          try {
            await registerStore();
            alert("Transaction succesful!");
            routeChange('store');
          } catch (err) {
            alert(err.message);
          }
        }}
      />
    </>
  );
};

export default Page3;
