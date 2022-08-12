import React from "react";
import { useEffect, useState } from "react";
import { List, ListInlineItem } from "reactstrap";
import { connectWallet, getAccount, disconnectWallet } from "../utils/wallet";
import { fetchStorage } from "../utils/tzkt";
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import "../styles/Navbar.css";
import { getAmt } from "../utils/operation";

const Navbar = () => {
  const [account, setAccount] = useState("");
  const [userDD, setUserDD] = useState(false);
  const [balance, setBalance] = useState(-1.0);
  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      const balance = await getAmt(account);
      setBalance(balance);
      setAccount(account);
    })();
  });

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const onDisconnectWallet = async () => {
    await disconnectWallet();
    setAccount("");
    setUserDD(false);
    setBalance(0.0);
    const storage = await fetchStorage();
    console.log(storage);
    getAmt(account);
    routeChange("/");
  };

  const onConnectWallet = async () => {
    await connectWallet();

    const account = await getAccount();
    setBalance(getAmt(account));
    setAccount(account);
    setUserDD(true);
    const storage = await fetchStorage();

    if (
      !(account in storage["donors"]) &&
      !(account in storage["ngos"]) &&
      !(account in storage["cooperative_stores"])
    ) {
      console.log(" ");
    } else if (account in storage["donors"]) {
      //function to display donor page
      routeChange("donorhome");
    } else if (account in storage["ngos"]) {
      //function to display charity page
      routeChange("ngo");
    } else if (account in storage["cooperative_stores"]) {
      //function to display store page
      routeChange("store");
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark sticky-top">
        <div className="container">
          <a className="nav-brand mr-auto" href="/">
            Charity on Chains
          </a>
          <ul className="navbar-nav mr-auto"></ul>

          <span className="navbar-text">
            {account === "" ? (
              <button
                onClick={onConnectWallet}
                className="btn btn-outline-info"
                style={{ color: "#ffffff" }}
              >
                {"Connect Wallet"}
              </button>
            ) : (
              <List type="inline">
                <ListInlineItem>&#42793; {balance}</ListInlineItem>
                <ListInlineItem>
                  <Dropdown
                    isOpen={userDD}
                    toggle={() => setUserDD(!userDD)}
                    direction="down"
                    size="50px"
                    inNavbar={true}
                  >
                    <DropdownToggle caret>{account}</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={onConnectWallet}>
                        Change Account
                      </DropdownItem>
                      <DropdownItem divider></DropdownItem>
                      <DropdownItem onClick={onDisconnectWallet}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ListInlineItem>
              </List>
            )}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// BigNumber {s: 1, e: 7, c: Array(1)}
// c: [24978978]
// e: 7
// s: 1
// [[Prototype]]: Object
