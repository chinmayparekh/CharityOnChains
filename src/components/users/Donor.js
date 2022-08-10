import "./Donor.css";
import fatherhood from "../images/fatherhood.svg"
import Progress from "reactstrap";

function Donor() {

   var percentage = 280;
   // const updateProgressBar()
   // {
   //    this.percentage=300;
   // }

    return (
      <>
        <h1 className="mt-3">Donate Now, <span className="purple">Save</span> The Lives of Countless Human Beings</h1>
        <div className="waste">
         <div className="mycontainer">
            <div className="halfcontainer">

               <div className="topcontainer top">
                  <h3 className="name">Red Cross</h3>
                  <p>Fundraiser Progress</p>
                  <p className="money">
                     <span className="bold">₹ 84,09,766 </span>
                     raised of ₹ 1,00,00,000
                  </p>
                  <div class="minecontainer">
                     <div class="skill html" style={{width : percentage}}>{percentage-200}</div>
                  </div>
                  <p className="smalltext mt-1"><span className="bold">11200 Supporters</span></p>
               </div>

               <div className="bottomcontainer top mt-3">
                  <div className="buttons">
                     <button className="amount m-2" onClick={() => percentage=500}>₹ 5000</button>
                     <button className="amount m-2" id="b10000">₹ 10000</button>
                     <button className="amount m-2" id="b15000">₹ 15000</button>
                     <button className="amount m-2" id="000">Other</button>
                  </div>
                  <button className="donate amount mt-4">Donate Now</button>
                  <div className="socials mt-2">
                  {/* <span className="socialText">Share</span> */}
                  <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></a></li>
                  </div>
               </div>
            </div>
            <div className="halfcontainer">
               <img src={fatherhood} alt="change" className="image"/>
            </div>
         </div>
        </div>
       
        </>
    );
  }
  
  export default Donor;