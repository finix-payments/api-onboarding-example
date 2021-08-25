import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Container } from "react-bootstrap";

// Import Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

// Import CSS
import "../CreateMerchantForm.css";

// Import Fields
import renderCurrency from "../../../fields/renderCurrency";
import renderField from "../../../fields/renderField";
import renderPercentage from "../../../fields/renderPercentage";
import renderSelectField from "../../../fields/renderSelectField";

// Import Normalizers
import normalizePercentage from "../../../normalizers/normalizePercentage";
import normalizeAmount from "../../../normalizers/normalizeAmount";

// Import Formatters
import formatAmount from "../../../formatters/formatAmount";

// Import sychronous validation
import validate from "../validation/validate.js";
import warn from "../validation/warn.js";

// Import Initial Values
import initialFieldValues from "../initializeValues";

const Principals = (props) => {
  const { handleSubmit, previousPage } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Container style={{ textAlign: "left", paddingTop: 20 }}>
        <h2>Additional Underwriting Data</h2>
        <div className="subtitle">
          Please enter additional underwriting information.{" "}
        </div>
        <br />

        <Field
          name="average_card_transfer_amount"
          type="number"
          component={renderCurrency}
          label="Average Card Transfer Amount"
          placeholder_text="800"
          tool_tip_text="Approximate average credit card sale amount."
          normalize={normalizeAmount}
          format={formatAmount}
        />
        <Field
          name="average_ach_transfer_amount"
          type="number"
          component={renderCurrency}
          label="Average Card ACH Amount"
          placeholder_text="1,500"
          tool_tip_text="Approximate average ACH sale amount."
          normalize={normalizeAmount}
          format={formatAmount}
        />
        <Field
          name="annual_ach_volume"
          type="number"
          component={renderCurrency}
          label="Annual ACH Volume"
          placeholder_text="100,000"
          tool_tip_text="Approximate annual ACH sales expected to be processed."
          normalize={normalizeAmount}
          format={formatAmount}
        />
        <Field
          name="business_description"
          type="text"
          component={renderField}
          label="Business Description"
          placeholder_text="Local bike shop offering repair and new bikes in Hollywood, CA"
          tool_tip_text="Description of your business (max 200 characters)."
        />

        <Field
          name="card_present_percentage"
          type="number"
          component={renderPercentage}
          label="Card Present Percentage"
          placeholder_text="10"
          tool_tip_text="Percentage of volume that is card present"
          normalize={normalizePercentage}
        />
        <Field
          name="ecommerce_percentage"
          type="number"
          component={renderPercentage}
          label="Ecommerce Percentage"
          placeholder_text="90"
          tool_tip_text="Percentage of volume that is card not present (ecommerce)"
          normalize={normalizePercentage}
        />
        <Field
          name="mail_order_telephone_order_percentage"
          type="number"
          component={renderPercentage}
          label="Mail Order or Telephone Order (MOTO) Percentage"
          placeholder_text="0"
          tool_tip_text="Percentage of volume that is mail order or telephone orders."
          normalize={normalizePercentage}
        />

        <Form.Label>
          Refund Policy{" "}
          <span
            data-tip="Select one of the values for your refund policy. If none of the values match your business model, select Other."
            data-for="refund_policy"
          >
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip
            id="refund_policy"
            place="right"
            type="dark"
            effect="solid"
          />
        </Form.Label>
        <Form.Group>
          <Field name="refund_policy" component={renderSelectField}>
            <option />
            <option value="NO_REFUNDS">No Refunds</option>
            <option value="MERCHANDISE_EXCHANGE_ONLY">
              Merchandise Exchange Only
            </option>
            <option value="WITHIN_30_DAYS">Within 30 Days</option>
            <option value="OTHER">Other</option>
          </Field>
        </Form.Group>
        <Field
          name="business_to_business_volume_percentage"
          type="number"
          component={renderPercentage}
          label="Business to Business Volume Percentage"
          placeholder_text="10"
          tool_tip_text="Percentage of volume that is business to business (between 0 and 100)"
          normalize={normalizePercentage}
        />
        <Field
          name="business_to_consumer_volume_percentage"
          type="number"
          component={renderPercentage}
          label="Business to Consumer Volume Percentage"
          placeholder_text="90"
          tool_tip_text="Percentage of volume that is business to consumer (between 0 and 100)"
          normalize={normalizePercentage}
        />
        <Field
          name="consumer_to_consumer_volume_percentage"
          type="number"
          component={renderPercentage}
          label="Consumer to Consumer Volume Percentage"
          placeholder_text="0"
          tool_tip_text="Percentage of volume that is consumer to consumer (between 0 and 100)"
          normalize={normalizePercentage}
        />
        <Field
          name="person_to_person_volume_percentage"
          type="number"
          component={renderPercentage}
          label="Person to Person Volume Percentage"
          placeholder_text="0"
          tool_tip_text="Percentage of volume that is person to person (between 0 and 100)"
          normalize={normalizePercentage}
        />
        <Field
          name="other_volume_percentage"
          type="number"
          component={renderPercentage}
          label="Other Volume Percentage"
          placeholder_text="0"
          tool_tip_text="Percentage of volume that is not represented by the previous fields (between 0 and 100)"
          normalize={normalizePercentage}
        />
        <div>
          <Button type="button" className="previous" onClick={previousPage}>
            Previous
          </Button>
          <Button type="submit" className="next">
            Next
          </Button>
        </div>
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
