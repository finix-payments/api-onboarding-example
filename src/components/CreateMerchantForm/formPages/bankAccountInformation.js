import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Container } from "react-bootstrap";

// Import Fields
import renderField from "../../../fields/renderField";

// Import sychronous validation
import validate from "../validation/validate.js";
import warn from "../validation/warn.js";

// Import Initial Values
import initialFieldValues from "../initializeValues";

const BankAccountInformation = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Container style={{ textAlign: "left", paddingTop: 20 }}>
        <h2>Bank Account Information</h2>
        <div className="subtitle">
          Please add the bank account you want us to deposit funds to.
        </div>
        <br />
        <Field
          name="bank_account_name"
          type="text"
          component={renderField}
          label="Bank Account Name"
          placeholder_text="Hollywood Bicycles, LLC"
          tool_tip_text="Account owner’s full name (max 40 characters)."
        />
        <Field
          name="bank_routing_number"
          type="number"
          component={renderField}
          label="Bank Account Routing Number"
          placeholder_text="121042882"
          tool_tip_text="Routing number of bank account (9 characters)"
        />
        <Field
          name="bank_account_number"
          type="number"
          component={renderField}
          label="Bank Account Account Number"
          placeholder_text="123566789"
          tool_tip_text="Account number of bank account"
        />

        <div className="small-text">
          You agree to use this account for legitimate business purposes and not
          for personal, family, or household purposes. To help the U.S.
          government fight terrorism and money laundering, federal law requires
          us to obtain, verify, and record information identifying each person
          opening an account. We may also ask for other identifying information.
        </div>
        <br />
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
})(BankAccountInformation);