import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

// Import Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

// Import CSS
import "../CreateMerchantForm.css";

// Import Fields
import renderField from "../../../fields/renderField";
import renderPhone from "../../../fields/renderPhone";
import renderSelectField from "../../../fields/renderSelectField";

// Import Normalizers
import normalizePhone from "../../../normalizers/normalizePhone";

// Import sychronous validation
import validate from "../validation/validate.js";
import warn from "../validation/warn.js";

// Import Initial Values
import initialFieldValues from "../initializeValues";

const BusinessProfile = (props) => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Container style={{ textAlign: "left", paddingTop: 20 }}>
        <h2>Business Profile </h2>
        <div className="subtitle">Tell us about your business.</div>
        <br />
        <Field
          name="business_name"
          type="text"
          component={renderField}
          label="Business Name"
          placeholder_text="Hollywood Bicycles, LLC"
          tool_tip_text="Your full legal business name (If Individual Sole Proprietorship, please input first name, full legal last name and middle initial. (max 120 characters)"
        />
        <Field
          name="doing_business_as"
          type="text"
          component={renderField}
          label="Doing Business As"
          placeholder_text="Hollywood Electric Bicycles"
          tool_tip_text="Alternate name of the business. If no other name is used please use the same value for Business Name"
        />
        <Field
          name="website"
          type="text"
          component={renderField}
          label="Website"
          placeholder_text="www.hollywoodbicycles.io"
          tool_tip_text="Publicly available website (max 100 characters)"
        />
        <Field
          name="business_phone"
          type="text"
          component={renderPhone}
          label="Business Phone"
          placeholder_text="800-231-1345"
          tool_tip_text="Customer service phone number where you can be reached at"
          normalize={normalizePhone}
        />
        <Field
          name="business_address_line1"
          type="text"
          component={renderField}
          label="Business Address Line 1"
          placeholder_text="123 Main Street"
          tool_tip_text="Line 1 of your business address (max 35 characters)."
        />
        <Field
          name="business_address_line2"
          type="text"
          component={renderField}
          label="Business Address Line 2"
          placeholder_text="Suite 101"
          tool_tip_text="Line 2 of your business address (max 35 characters)"
        />

        <Row>
          <Col>
            <Field
              name="business_address_city"
              type="text"
              component={renderField}
              label="City"
              placeholder_text="Los Angeles"
              tool_tip_text="City (max 20 characters)"
            />
          </Col>
          <Col>
            <Form.Label>
              State{" "}
              <span
                data-tip="Select the state of your business address"
                data-for="business_state"
              >
                <FontAwesomeIcon color="#1A233B" icon="info-circle" />
              </span>
              <ReactTooltip
                id="business_state"
                place="right"
                type="dark"
                effect="solid"
              />{" "}
            </Form.Label>
            <Form.Group>
              <Field
                name="business_address_region"
                component={renderSelectField}
              >
                <option />
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Field>
            </Form.Group>
          </Col>
          <Col>
            <Field
              name="business_address_postal_code"
              type="text"
              component={renderField}
              label="Zip"
              placeholder_text="90012"
              tool_tip_text="Zip or Postal code (max 7 characters)"
            />
          </Col>
        </Row>

        <Button type="submit" className="next">
          Next
        </Button>
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
})(BusinessProfile);
