import { Modal, Button } from "react-bootstrap";

import { useState } from "react";
import ItemCards from "./ItemCards";
import { addItems } from "../../utils/operation";
import { addData1 } from "../../utils/ipfs/ipfs_add1";
import { fetchData } from "../../utils/ipfs/ipfs_fetch";
import { fetchStorage } from "../../utils/tzkt";
import { getAccount } from "../../utils/wallet";
import shopping from "../images/shopping.svg";
import LoadItem from "./LoadItem";
import StoreCard from "./StoreCard";
import "./Store.css";

function Store() {
  const [state, setState] = useState(false);
  const openModal = () => setState(true);
  const closeModal = () => setState(false);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(1);
  const [valid, setValid] = useState(1);
  const textStyle = {
    border: "2px solid red",
  };
  const hide = {
    display: "none",
  };
  const checkForm = (items) => {
    //form is valid
    if (items.name !== "" && items.price > 0) {
      console.log("Valid");
      textStyle.border = "2px solid green";
      return true;
    }
    //form is invalid
    else {
      console.log("Invalid");
      hide.display = "inline";
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, price, valid };
    const name1 = item.name;
    if (checkForm(item)) {
      //items.push(item)

      addItems(item);

      // console.log(items);
      console.log("**************");
    }

    setName("");
    setQuantity("");
    setPrice(0);
    setState(false);
  };

  return (
    // <div className="container">
    <>
      <br />
      <br />
      <br />

      <div className="bigdiv">
        <div className="containerdiv">
          <div className="containerdiv">
            <LoadItem />
          </div>
        </div>
        <div className="image">
          <img src={shopping} alt="shopping" height="400px" />
          {/* <br/> */}
          <h1 className="mt-5">These are the Items Available in Your Store</h1>
          <button onClick={openModal} className="addItem">
            Add Item
          </button>
        </div>
      </div>

      <Modal show={state} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register">
            <form onSubmit={handleSubmit}>
              <label>Item Name </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {/* <label>Quantity </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              /> */}
              <label>Price in Mutez &#42793; </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button onClick={handleSubmit} className="save">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Store;
