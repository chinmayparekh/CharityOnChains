import React from "react";
import "./footer.css"
const Footer = () => {
  return (
   //  <div className="footer">
	// 		<div className="container">
	// 			<div className="row justify-content-end prodname m-3 p-3">
	// 				<div className=" col-auto col-sm-2 align-self-end">
	// 					<div style={{color: "white"}}>
   //            Find us on:
   //            <a className="d-block btn btn-block btn-social btn-facebook m-1" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i>Facebook</a>
   //            <a className="d-block btn btn-block btn-social btn-instagram m-1" href="http://www.instagram.com/profile.php?id="><i className="fa fa-instagram"></i>Instagram</a>
	// 					</div>
	// 				</div>
	// 			</div>
   //      <div classNameName="col-auto justify-content-center align-self-center">
	// 					<p style={{color: "red",fontSize: "28px",fontFamily: "Jost",textAlign: "center"}}>© Charity On Chains</p>
	// 				</div>
	// 		</div>
	// 	</div>
   <footer className="bg-white down">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
          <p className="font-italic text-muted">Check out our social media pages for more information and regular updates!</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Contact Us</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Work For Us</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Make a Complaint</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Contact</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Our Blog</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Browse NGOs</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Our Mission</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
          <p className="text-muted mb-4">Just enter your email ID and find your very own copy of our newsletter in your inbox every week</p>
          <div className="p-1 rounded border">
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-4 copywrite">
      <div className="container text-center">
        <p classNameName="text-muted mb-0 py-2">© 2022 CharityOnChains All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
