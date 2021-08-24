import React, { useState } from "react";
import { reduxForm, FormSection } from "redux-form";
import { Form, Container, ListGroup, Modal, Button } from "react-bootstrap";

// Import Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
// Import CSS
import "../CreateMerchantForm.css";

// Import Field Sets

import PrincipalInformation from "../formSections/PrincipalInformation";

// Import sychronous validation
import validate from "../validation/validate.js";
import warn from "../validation/warn.js";

// Import Initial Values
import initialFieldValues from "../initializeValues";

const Principals = (props) => {
  const { handleSubmit, previousPage } = props;

  // Modal 3 - Principal 2
  const [showPrincipal2, setShowPrincipal2] = useState(false);
  const handleClosePrincipal2 = (e) => {
    e.preventDefault();
    setShowPrincipal2(false);
  };
  const handleShowPrinicpal2 = (e) => {
    e.preventDefault();
    setShowPrincipal2(true);
  };

  // Modal 4 - Principal 3
  const [showPrincipal3, setShowPrincipal3] = useState(false);
  const handleClosePrincipal3 = (e) => {
    e.preventDefault();
    setShowPrincipal3(false);
  };
  const handleShowPrinicpal3 = (e) => {
    e.preventDefault();
    setShowPrincipal3(true);
  };

  // Modal 5 - Principal 4
  const [showPrincipal4, setShowPrincipal4] = useState(false);
  const handleClosePrincipal4 = (e) => {
    e.preventDefault();
    setShowPrincipal4(false);
  };
  const handleShowPrinicpal4 = (e) => {
    e.preventDefault();
    setShowPrincipal4(true);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Container style={{ textAlign: "left", paddingTop: 20 }}>
        <h2>Principal Information</h2>
        <div className="subtitle">
          Please list all principals for your business with greater than 25%
          ownership.
        </div>
        <br />

        <FormSection name="primary_principal">
          <PrincipalInformation />
        </FormSection>

        <h4>
          Additional Prinicpals{" "}
          <span data-tip="If any beneficial owners have greater than 25% or greater than 25% ownership, you must list them as additional principals.">
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip
            id="additional-principals"
            place="right"
            type="dark"
            effect="solid"
          />{" "}
        </h4>
        <div>(Required if Beneficial Ownership {">"} 25%) </div>

        <ListGroup variant="flush" style={{ fontWeight: "600" }}>
          <ListGroup.Item
            action
            onClick={handleShowPrinicpal2}
            id="prinicpal_2_list"
            eventKey="prinicpal_2_list"
          >
            <FontAwesomeIcon color="#1A233B" icon="user" /> Prinicpal 2
          </ListGroup.Item>
          <ListGroup.Item
            action
            onClick={handleShowPrinicpal3}
            id="prinicpal_3_list"
            eventKey="prinicpal_3_list"
          >
            <FontAwesomeIcon color="#1A233B" icon="user" /> Principal 3
          </ListGroup.Item>
          <ListGroup.Item
            action
            onClick={handleShowPrinicpal4}
            id="prinicpal_4_list"
            eventKey="prinicpal_4_list"
          >
            <FontAwesomeIcon color="#1A233B" icon="user" /> Prinicpal 4
          </ListGroup.Item>
        </ListGroup>

        <div>
          <Button type="button" className="previous" onClick={previousPage}>
            Previous
          </Button>
          <Button type="submit" className="next">
            Next
          </Button>
        </div>

        <Modal
          show={showPrincipal2}
          //onHide={handleClosePrincipal2}
          size="lg"
          id="principal_2_modal"
        >
          <Modal.Header
          // closeButton
          >
            <Modal.Title>Prinicipal 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormSection name="principal_2">
              <PrincipalInformation />
            </FormSection>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              variant="primary"
              onClick={handleClosePrincipal2}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showPrincipal3}
          //onHide={handleClosePrincipal3}
          size="lg"
          id="principal_3_modal"
        >
          <Modal.Header
          //closeButton
          >
            <Modal.Title>Prinicipal 3</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormSection name="principal_3">
              <PrincipalInformation />
            </FormSection>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              variant="primary"
              onClick={handleClosePrincipal3}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showPrincipal4}
          //onHide={handleClosePrincipal4}
          size="lg"
          id="principal_4_modal"
        >
          <Modal.Header
          //closeButton
          >
            <Modal.Title>Prinicipal 4</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormSection name="principal_4">
              <PrincipalInformation />
            </FormSection>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              variant="primary"
              onClick={handleClosePrincipal4}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Form>
  );
};

export default reduxForm({
  form: "createMerchantForm", // a unique identifier for this form
  initialValues: initialFieldValues,
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(Principals);
