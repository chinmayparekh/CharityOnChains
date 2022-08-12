import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { addItems } from "../../utils/operation";
import shopping from "../images/shopping.svg";
import LoadItem from "./LoadItem";
import "./Store.css";
import { fetchDetails } from "./fetchDetails";

function Store() {
  const [state, setState] = useState(false);
  const openModal = () => setState(true);
  const closeModal = () => setState(false);

  const [name, setName] = useState("");
  const [details, setDetails] = useState(null);

  fetchDetails("cooperative_stores").then((response) => setDetails(response));

  const [price, setPrice] = useState(0);
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
      textStyle.border = "2px solid green";
      return true;
    }
    //form is invalid
    else {
      hide.display = "inline";
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, price, valid };
    if (checkForm(item)) {
      addItems(item);
    }
    setName("");
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
          <div className="yourDetails m-3">
            <h1 className="mt-5">Your Details</h1>
            <div className="details">
              <p>Name: {details && details.name}</p>
              <p>GST: {details && details.phone}</p>
              <p>Service Provided: {details && details.service} </p>
              <p>Email: {details && details.email}</p>
              <p>Location: {details && details.location}</p>
            </div>
          </div>
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
