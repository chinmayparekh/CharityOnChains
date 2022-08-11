import React, { useState } from "react";
import "../styles/Page1.css";
import { addData } from "../utils/ipfs/ipfs_add";
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
  const [field6, setField6] = useState("");

  const textStyle = {
    border: "2px solid red",
  };
  const hide = {
    display: "none",
  };
  const checkForm = (data) => {
    //form is valid
    if (data.field1 !== "" && data.field2 !== "" && data.field3 !== "") {
      console.log("Valid");
      textStyle.border = "2px solid green";
      toggleShow();
      addData(data, props.register);
    }
    //form is invalid
    else {
      console.log("Invalid");
      hide.display = "inline";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { field1, field2, field3, field4, field5, field6 };
    checkForm(data);
    console.log(data);
  };

  return (
    <Card className="text-center">
      <CardHeader color="dark" className="layout-heading ">
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
                  <div className="titlediv">
                  <h2 className="title">{props.modalTitle}</h2>
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
                    <label className="mt-1">{props.modal2} </label>
                    <select name="ngoType" id="ngoType" onChange={(e) => setField6(e.target.value)}>
                        <option value="Private Sector Companies">Private Sector Companies</option>
                        <option value="Trust">Trust</option>
                        <option value="Registered Societies">Civic IRegistered Societies</option>
                        <option value="Academic Institutions (Private)">Academic Institutions (Private)</option>
                        <option value="Academic Institutions (Govt)">Academic Institutions (Govt)</option>
                     </select>
                    {/* <label>{props.modal3} </label>
                    <input
                      type="text"
                      value={field3}
                      onChange={(e) => setField3(e.target.value)}
                      required
                    /> */}
                    <label className="mt-1">{props.modal4} </label>
                    <input
                      type="email"
                      value={field4}
                      onChange={(e) => setField4(e.target.value)}
                      required
                    />
                    <label className="mt-1">{props.modal5} </label>
                    <input
                      type="text"
                      value={field5}
                      onChange={(e) => setField5(e.target.value)}
                      required
                      default=""
                    />
                    <label className="mt-1">{props.modal6} </label>
                    <select name="sector" id="sector" onChange={(e) => setField6(e.target.value)}>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Children">Children</option>
                        <option value="Civic">Civic Issues</option>
                        <option value="Disaster Management">Disaster Management</option>
                        <option value="Education & Literacy">Education & Literacy</option>
                        <option value="Environmental">Environmental</option>
                        <option value="Human Rights">Human Rights</option>
                        <option value="Women's Empowerement">Women's Empowerement</option>
                     </select>
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
