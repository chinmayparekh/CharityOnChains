import React from "react";
import { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
import { fetchStorage } from "../utils/tzkt";
import { useNavigate } from "react-router-dom";
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import "../styles/Navbar.css";

const Navbar = () => {
  const [account, setAccount] = useState("");
  const [userDD,setUserDD]=useState(false);
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
    setUserDD(true);
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
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="nav-brand mr-auto" href="/">Charity on Chain</a>
            <ul className="navbar-nav mr-auto">
            </ul>
            <span className="navbar-text">
              {account===""?<button 
              onClick={onConnectWallet}
              className="btn btn-outline-info" style={{color: '#0dcaf0'}}>
              {"Connect Wallet"}
            </button>
            : 
            <Dropdown isOpen={userDD} toggle={()=>setUserDD(!userDD)} direction="down" size="50px" inNavbar={true}>
              <DropdownToggle caret>
                {account}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={onConnectWallet}>Change Account</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
            }
            
            </span>
        </div>
      </nav>
  );
};

export default Navbar;
