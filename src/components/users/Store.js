import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
function Store() {
  const [state, setState] = useState(false);
  const openModal = () => setState(true);
  const closeModal = () => setState(false);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");


  const textStyle = {
    border: "2px solid red",
  };
  const hide = {
    display: "none",
  };
  const checkForm = (items) => {
    //form is valid
    if (items.name !== "" && items.quantity !== "" && items.price > 0) {
      console.log("Valid");
      textStyle.border = "2px solid green";
    }
    //form is invalid
    else {
      console.log("Invalid");
      hide.display = "inline";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = { name, quantity, price };
    checkForm(items);
    console.log(items);
    setState(false);
  };

  return (
    <>
      <h1>Store Page</h1>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={openModal}>
          Add Item
        </Button>
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
              <label>Quantity </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
              <label>Price in Mutez </label>
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
