import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, Col, ProgressBar, Row } from "react-bootstrap";

// Import CSS
import "./CreateMerchantForm.css";

// Import Fields

import BusinessProfile from "./formPages/BusinessProfile";
import BusinessInformation from "./formPages/BusinessInformation";
import AdditionalUnderwritingData from "./formPages/AdditionalUnderwritingData";
import BankAccounts from "./formPages/BankAccount";
import Principals from "./formPages/Principals";
import ProcessingInformation from "./formPages/ProcessingInformation";

// Import Field Sets

class CreateMerchantForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  businessProfile() {
    this.setState({ page: 1 });
  }
  businessInformation() {
    this.setState({ page: 2 });
  }
  addPrincipals() {
    this.setState({ page: 3 });
  }
  additionalUnderwritingData() {
    this.setState({ page: 4 });
  }
  bankAccount() {
    this.setState({ page: 5 });
  }
  termsConditions() {
    this.setState({ page: 6 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <Container>
        <div style={{ paddingTop: 20 }}>
          <ProgressBar now={(page / 6) * 100} />
        </div>

        <Row className="form-navigation">
          <Col>
            <span onClick={this.businessProfile.bind(this)}>
              1. Business Profile
            </span>
          </Col>
          <Col>
            <span onClick={this.businessInformation.bind(this)}>
              2. Business Information
            </span>
          </Col>
          <Col>
            <span onClick={this.addPrincipals.bind(this)}>
              3. Add Principals
            </span>
          </Col>
          <Col>
            <span onClick={this.additionalUnderwritingData.bind(this)}>
              4. Additional Underwriting Data
            </span>
          </Col>
          <Col>
            <span onClick={this.bankAccount.bind(this)}>5. Bank Account</span>
          </Col>
          <Col>
            <span onClick={this.termsConditions.bind(this)}>
              6. Terms {"&"} Conditions
            </span>
          </Col>
        </Row>
        {page === 1 && <BusinessProfile onSubmit={this.nextPage} />}
        {page === 2 && (
          <BusinessInformation
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <Principals
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <AdditionalUnderwritingData
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <BankAccounts
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 6 && (
          <ProcessingInformation
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </Container>
    );
  }
}

CreateMerchantForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateMerchantForm;
