import React from "react";
import { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
import { fetchStorage } from "../utils/tzkt";

import "../styles/Navbar.css";
const Navbar = () => {
  const [account, setAccount] = useState("");

  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
    const storage = await fetchStorage();
    console.log(storage["donors"]);
    console.log(account);
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
                onClick={onConnectWallet}
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
