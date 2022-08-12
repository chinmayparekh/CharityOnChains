import React, { useState } from "react";
import "../../styles/Page1.css";
import Layout from "../Layout";
import {
  registerDonor,
  registerNGO,
  registerStore,
} from "../../utils/operation";
import { useNavigate } from "react-router-dom";
import happy from "../images/happy.svg";
import wheelchair from "../images/wheelchair.svg";
import banner from "../images/banner.svg";
import hand from "../images/hand.svg";
import shop from "../images/shop.svg";
import promote from "../images/promote.svg";

function Home() {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  const [isRegistered, setRegistered] = useState("");
  return (
    <div className="">
      <div className="banner">
        <div className="halfcontainer">
          <img src={banner} alt="banner" />
        </div>
        <div className="halfcontainer">
          <div className="white mb-4">
            Transform Your Business With{" "}
            <span className="cyan">BlockChain</span>
          </div>
          <div className="cyanline mb-4"></div>
          <div className="white mb-5 smaller">
            Disrupt your industry. Power your startup. Rationalize and control
            your business.
          </div>
        </div>
      </div>
      <div className="page">
        <div className="myContainer">
          <div className="halfcontainer">
            <img src={wheelchair} alt="banner" className="image" />
          </div>
          <div className="imagecontainer mt-3">
            <div className="cyan smalltext">
              <span className="headingtext">
                You have the power to bring happiness.
              </span>
              <p className="mt-4">
                Many fake charity organizations pose as genuine and loot money
                from innocent people in the name of charity. Our charity
                platform brings transparency to online charity trusts.
              </p>
            </div>
          </div>
        </div>

        <br></br>

        <div className="hr mb-5"></div>

        <div className="myContainer">
          <div className="imagecontainer mt-3">
            <div className="cyan smalltext">
              <span className="headingtext">
                Creating a Better Future through your Help.
              </span>
              <p className="mt-4">
                We have partnered with over 10 NGOs which have revolutionized
                healthcare, sanitation, education and nutrition. We heartfully
                welcome NGO's to join us.
              </p>
            </div>
          </div>
          <div className="halfcontainer">
            <img src={happy} alt="banner" className="image" />
          </div>
        </div>
      </div>

      <div className="container">
        <div id="Page2">
          <br />
          <br />

          {isRegistered === "" ? (
            <div className="row mb-3 layout-row">
              <div className="col-12 col-sm-4 p-2">
                <Layout
                  id="NGO"
                  title="Register yourself as a NGO"
                  content="To promote social or political change on a broad scale. "
                  image={promote}
                  modalTitle="Register as NGO"
                  modal1="NGO Name"
                  modal2="NGO Type"
                  modal3="Sector"
                  modal4="Registeration License"
                  modal5="Email ID"
                  register={async (hash) => {
                    try {
                      await registerNGO(hash);
                      alert("Transaction succesful!");
                      setRegistered("ngo");
                      routeChange("ngo");
                    } catch (err) {
                      alert(err.message);
                    }
                  }}
                />
              </div>
              <div className="col-12 col-sm-4 p-2">
                <Layout
                  id="Donor"
                  title="Register yourself as a Donor"
                  content="Giving is not just make a donation, it's about making difference."
                  image={hand}
                  modalTitle="Register as a Donor"
                  modal1="Name"
                  modal2="Aadhar Card"
                  modal3="Phone number"
                  modal4="Email ID"
                  modal5="Country"
                  register={async (hash) => {
                    try {
                      await registerDonor(hash);
                      alert("Transaction succesful!");
                      setRegistered("donor");
                      routeChange("donor");
                    } catch (err) {
                      alert(err.message);
                    }
                  }}
                />
              </div>
              <div className="col-12 col-sm-4 p-2">
                <Layout
                  id="Store"
                  title="Register yourself as a Store"
                  content="Help NGOs by providing your equipement at nominal prices."
                  image={shop}
                  modalTitle="Register as a Store"
                  modal1="Name"
                  modal2="GST Number"
                  modal3="Service/Product Provided"
                  modal4="Email ID"
                  modal5="Location"
                  register={async (hash) => {
                    try {
                      await registerStore(hash);
                      alert("Transaction succesful!");
                      setRegistered("store");
                      routeChange("store");
                    } catch (err) {
                      alert(err.message);
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
