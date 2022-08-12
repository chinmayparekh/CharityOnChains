import "./Donor.css";
import {useState} from 'react';
import { useLocation } from "react-router-dom";
import {sendFunds} from "../../utils/operation"

function Donor(props) {
  const [amount,setAmount]=useState(0);
  const BuyItem = async (price, address, name) => {
    console.log("beginning");
    await sendFunds(address, price);
    console.log("end of func");
  }
  var percentage = 280;
  console.log("props", props);
  // const data = props;
  // const updateProgressBar()
  // {
  //    this.percentage=300;
  // }
  const location = useLocation();
  const data = location.state?.data;
  return (
    <>
      {console.log("props", props)}
      <div className="biggest">
        <h1 className="mt-3">
          Donate Now, <span className="purple">Save</span> The Lives of
          Countless Human Beings
        </h1>
        <div className="waste m-5">
          <div className="mycontainer">
            <div className="halfcontainer glassy">
              <div className="topcontainer top">
                <h3 className="name">{data ? data.title : "Go to"}</h3>
                {/* <p>{data ? data.address : "Go to"}</p> */}
                <p>Fundraiser Progress</p>
                <p className="money">
                  <span className="bold"> &#42793; 84,09,766 </span>
                  raised of &#42793;1,00,00,000
                </p>
                <div class="minecontainer">
                  <div class="skill html" style={{ width: percentage }}>
                    {percentage - 200}
                  </div>
                </div>
                <p className="smalltext mt-1">
                  <span className="bold">11200 Supporters</span>
                </p>
              </div>

              <div className="bottomcontainer top mt-3">
                <div className="buttons">
                  <button
                    className="amount m-2"
                    onClick={()=> setAmount(5000000000)}
                  >
                    &#42793; 50
                  </button>
                  <button className="amount m-2" id="b10000" onClick={()=> setAmount(10000000000)}>
                    &#42793; 100
                  </button>
                  <button className="amount m-2" id="b15000" onClick={()=> setAmount(15000000000)}>
                    &#42793; 150
                  </button>
                  <input type="text" className="amount m-2" id="other" placeholder="Enter Amount" onChange={event=>setAmount(event.target.value*1e6)}></input>
                </div>
                <button className="donate amount mt-4"
                onClick={() => {
                  console.log(props);
                  console.log(amount);
                  BuyItem(amount, data ? data.address : "Go to", props.name);
                  console.log("button clicked");
                }}
                  >Donate Now</button>
                  <a className="mybutton outlink mb-2" href="https://jakartanet.tzkt.io/KT1Fnv6PCHvYBTVBr78k9sozFMBgoxi6y2dv/operations/" target="_blank">View All Transactions</a>

                <div className="socials mt-2">
                  {/* <span className="socialText">Share</span> */}
                  <li class="list-inline-item">
                    <a href="/" title="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/" title="facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/" title="instagram">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/" title="pinterest">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/" title="vimeo">
                      <i class="fa fa-vimeo"></i>
                    </a>
                  </li>
                </div>
              </div>
            </div>
            {/* <div className="halfcontainer">
            <img src={fatherhood} alt="change" className="image" />
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Donor;
