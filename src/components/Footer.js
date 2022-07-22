import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
			<div className="container">
				<div className="row justify-content-end prodname m-3 p-3">
					<div className=" col-auto col-sm-2 align-self-end">
						<div style={{color: "white"}}>
              Find us on:
              <a className="d-block btn btn-block btn-social btn-facebook m-1" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i>Facebook</a>
              <a className="d-block btn btn-block btn-social btn-instagram m-1" href="http://www.instagram.com/profile.php?id="><i className="fa fa-instagram"></i>Instagram</a>
						</div>
					</div>
				</div>
        <div className="col-auto justify-content-center align-self-center">
						<p style={{color: "red",fontSize: "28px",fontFamily: "Jost",textAlign: "center"}}>© Charity On Chains</p>
					</div>
			</div>
		</div>
  );
};

export default Footer;
