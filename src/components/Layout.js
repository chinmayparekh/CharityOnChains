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
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");

  const textStyle = {
    border: "2px solid red",
  };
  const hide = {
    display: "none",
  };
  const checkForm = (data) => {
    //form is valid
    if (data.field1 !== "" && data.field2 !== "" && data.field3 !== "") {
      textStyle.border = "2px solid green";
      toggleShow();
      // addData(data, props.register);
      props.register(data);
    }
    //form is invalid
    else {
      hide.display = "inline";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { field1, field2, field3, field4, field5 };
    checkForm(data);
  };
  const imageHeight = {
    height: "200px",
  };

  return (
    <>
      <Card className="register-cards text-center">
        <CardHeader color="dark" className="layout-heading ">
          {props.title}
        </CardHeader>
        <CardImg
          top
          src={props.image}
          alt={props.id}
          style={imageHeight}
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
                    <div className="titlediv">
                      <p className="title ">{props.modalTitle}</p>
                    </div>
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
                        value={field1}
                        onChange={(e) => setField1(e.target.value)}
                        required
                      />
                      <label>{props.modal2} </label>
                      {props.id === "NGO" ? (
                        <select
                          name="ngoType"
                          id="ngoType"
                          onChange={(e) => setField2(e.target.value)}
                          value={field2}
                        >
                          <option value="Private Sector Companies">
                            Private Sector Companies
                          </option>
                          <option value="Trust">Trust</option>
                          <option value="Registered Societies">
                            Civic IRegistered Societies
                          </option>
                          <option value="Academic Institutions (Private)">
                            Academic Institutions (Private)
                          </option>
                          <option value="Academic Institutions (Govt)">
                            Academic Institutions (Govt)
                          </option>
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={field2}
                          onChange={(e) => setField2(e.target.value)}
                          required
                        />
                      )}
                      <label>{props.modal3} </label>
                      <input
                        type="text"
                        value={field3}
                        onChange={(e) => setField3(e.target.value)}
                        required
                      />
                      <label>{props.modal4} </label>
                      <input
                        type="email"
                        value={field4}
                        onChange={(e) => setField4(e.target.value)}
                        required
                      />
                      <label>{props.modal5} </label>
                      <input
                        type="text"
                        value={field5}
                        onChange={(e) => setField5(e.target.value)}
                        required
                        default=""
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
    </>
  );
};

export default Layout;
