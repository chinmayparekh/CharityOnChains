import React from "react";
import { useEffect, useState } from "react";
import { connectWallet, getAccount,disconnectWallet } from "../utils/wallet";
import { fetchStorage } from "../utils/tzkt";
import { useNavigate } from "react-router-dom";
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown} from 'reactstrap';
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

  const onDisconnectWallet = async() => {
    await disconnectWallet();
    setAccount("");
    setUserDD(false);
  }

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
      <nav className="navbar navbar-dark sticky-top">
        <div className="container">
            <a className="nav-brand mr-auto" href="/">Charity on Chains</a>
            <ul className="navbar-nav mr-auto">
            </ul>
            <div className="navdropdown">
            <UncontrolledDropdown>
               <DropdownToggle
                  caret
                  color="dark"
               >
                  Register
               </DropdownToggle>
               <DropdownMenu dark>
                  <DropdownItem>
                     Register as NGO
                  </DropdownItem>
                  <DropdownItem>
                    Register as Donor 
                  </DropdownItem>
                  <DropdownItem text>
                     Register as Store
                  </DropdownItem>
               </DropdownMenu>
            </UncontrolledDropdown>
            </div>
            <span className="navbar-text"> 
            
              {account===""?<button 
              onClick={onConnectWallet}
              className="btn btn-outline-info" style={{color: '#ffffff'}}>
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
                <DropdownItem onClick={onDisconnectWallet}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            }
            </span>
        </div>
      </nav>
  );
};

export default Navbar;