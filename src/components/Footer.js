import React from "react";
import Styles from "./Footer.module.css";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
const Footer = () => {
  return (
    <>
      <section className={Styles.black}>
        <div className={Styles.footer}>
          <div className={Styles.prodname}>
            <p className="logo">Charity on Chains</p>
          </div>

          <div className={Styles.socials}>
            <div className={Styles.socialMedia}>
              <p>Find us on:</p>
              <p>
                <span>
                  <img className="icons" src={facebook}></img>
                </span>
                Facebook
              </p>
              <p>
                <span>
                  <img className="icons" src={instagram}></img>
                </span>
                Instagram
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className={Styles.lastDiv}>
            <p className={Styles.lastText}>© Charity on Chains.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
