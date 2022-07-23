import React, { useState } from "react";
import "../styles/Page1.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Card, CardImg, CardBody, CardHeader, CardText } from "reactstrap";

const Layout = (props) => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => {
    setBasicModal(!basicModal);
  };
  const [name, setName] = useState("");
  const [license, setLicense] = useState("");
  const [email, setEmail] = useState("");

  const textStyle = {
    border: "2px solid red",
  };
  const hide = {
    display: "none",
  };
  const checkForm = (data) => {
    //form is valid
    if (data.name !== "" && data.license !== "" && data.email !== "") {
      console.log("Valid");
      textStyle.border = "2px solid green";
      toggleShow();
      props.register();
    }
    //form is invalid
    else {
      console.log("Invalid");
      hide.display = "inline";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, license, email };
    checkForm(data);
    console.log(data);
  };

  return (
    <Card className="text-center">
      <CardHeader color="dark" className="layout-heading">
        {props.title}
      </CardHeader>
      <CardImg
        top
        src={props.image}
        alt={props.id}
        className="layout-image"
      ></CardImg>
      <CardBody>
        <CardText>{props.content}</CardText>
        <button className="save" onClick={toggleShow}>
          Register
        </button>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  <p className="title">{props.modalTitle}</p>
                </MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="register">
                  <form onSubmit={handleSubmit}>
                    <label>{props.modal1} </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label>{props.modal2} </label>
                    <input
                      type="text"
                      value={license}
                      onChange={(e) => setLicense(e.target.value)}
                      required
                    />
                    <label>{props.modal3} </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </form>
                </div>
              </MDBModalBody>

              <MDBModalFooter>
                <button onClick={toggleShow} className="save">
                  Close
                </button>
                <button onClick={handleSubmit} className="save">
                  Save Changes
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </CardBody>
    </Card>
  );
};

export default Layout;
