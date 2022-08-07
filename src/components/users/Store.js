import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
function Store() {
  const [state, setState] = useState(false);
  const openModal = () => setState(true);
  const closeModal = () => setState(false);

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
            <form>
              <label>Item Name </label>
              <input type="text" required />
              <label>Quantity </label>
              <input type="text" required />
              <label>Price in Mutez </label>
              <input type="number" required />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Store;
