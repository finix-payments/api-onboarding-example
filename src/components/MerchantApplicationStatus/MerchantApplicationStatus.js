import React, { Component } from "react";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class MerchantApplicationStatus extends Component {
  render() {
    return (
      <Container className="text-center">
        <div style={{ paddingTop: "15px" }}>
          <FontAwesomeIcon color="#2ecc71" icon="check-circle" size="6x" />
        </div>
        <h3>Thanks for submitting your payment processing application.</h3>

        <div>Your application is in progress! We'll be in touch.</div>
      </Container>
    );
  }
}
