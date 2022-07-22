import React from "react";
import { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
import { fetchStorage } from "../utils/tzkt";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);


  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
    const storage = await fetchStorage();
    if(Object.values(storage["donors"]).indexOf(account)<=-1 &&
       Object.values(storage["beneficiaries"]).indexOf(account)<=-1 &&
       Object.values(storage["charity_organisations"]).indexOf(account)<=-1 &&
       Object.values(storage["cooperative_stores"]).indexOf(account)<=-1)
    {
      console.log(storage["donors"][0]);
    }
    else if(Object.values(storage["donors"]).indexOf(account)>-1)
    {
      //function to display donor page
      routeChange('donor');
    }
    else if(Object.values(storage["charity_organisations"]).indexOf(account)>-1)
    {
      //function to display charity page
      routeChange('ngo');
    }
    else if(Object.values(storage["cooperative_stores"]).indexOf(account)>-1)
    {
      //function to display store page
      routeChange('store');
    }
    
  };
  return (
    <>
      <nav className="navigation">
        <div className="nav-logo">
          <a href="/" className="logo">
            Charity on Chains
          </a>
        </div>

        <div className="navigation-menu">
          <ul>
            <li>
              <button
                onClick={()=> account?null:onConnectWallet}
                className="btn btn-outline-info"
              >
                {/* TODO 5.a - Show account address if wallet is connected */}
                {account ? account : "Connect Wallet"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
