import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Container } from "react-bootstrap";
import fileUpload from '../../fields/fileUpload/fileUpload'

//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

//CSS
import "./FileUploaderForm.css";

//Fields
import renderField from "../../fields/renderField";
import renderSelectField from "../../fields/renderSelectField";

//Import Initial Values
import initialFieldValues from "./initializeValues";

//Import Constants
import {
    DEFAULT_CONFIG,
    DEFAULT_INSTRUCTIONS,
} from '../../constants/fileUploadConstants'

class UploadFile extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
  
    renderInput = ({ input, type, meta }) => {
      const { mime } = this.props;
      return (
        <div>
          <input
            name={input.name}
            type={type}
            accept={mime}
            onChange={event => this.handleChange(event, input)}
          />
        </div>
      );
    };
  
    handleChange = (event, input) => {
      event.preventDefault();
      let imageFile = event.target.files[0];
      if (imageFile) {
        const localImageUrl = URL.createObjectURL(imageFile);
        const imageObject = new window.Image();
  
        imageObject.onload = () => {
          imageFile.width = imageObject.naturalWidth;
          imageFile.height = imageObject.naturalHeight;
          input.onChange(imageFile);
          URL.revokeObjectURL(imageFile);
        };
        imageObject.src = localImageUrl;
      }
    };
  
    render() {
      const { handleSubmit } = this.props;
  
      return (
        <Form onSubmit={handleSubmit}>
            <Container style={{ textAlign: "left", paddingTop: 20 }}>
                <h2>Upload File</h2>
                <div className="subtitle">
                  Tell us more about the file you want to upload.
                </div>
                <br />
                <Field
                    name="file_name"
                    type="text"
                    component={renderField}
                    label="File Name"
                    placeholder_text="My Driver License"
                    tool_tip_text="Name of the file you want to upload"
                />
                <Field
                    name="linked_to"
                    type="text"
                    component={renderField}
                    label="Merchant ID"
                    placeholder_text="MUucec6fHeaWo3VHYoSkUySM"
                    tool_tip_text="The resource ID that you want lined to the file. e.g. Merchant ID"
                />
                <Form.Label>
                    File Type{" "}
                    <span
                        data-tip="Select the type of document you are uploading"
                        data-for="type"
                    >
                        <FontAwesomeIcon color="#1A233B" icon="info-circle" />
                    </span>
                    <ReactTooltip
                        id="type"
                        place="right"
                        type="dark"
                        effect="solid"
                    />
                </Form.Label>
                <Form.Group>
                    <Field name="file_type" component={renderSelectField}>
                        <option />
                        <option value="DRIVERS_LICENSE_FRONT">Driver's License (Front)</option>
                        <option value="DRIVERS_LICENSE_BACK">Driver's License (Back)</option>
                        <option value="IDENTIFICATION_CARD_FRONT">Identification Card (Front)</option>
                        <option value="IDENTIFICATION_CARD_BACK">Identification Card (Back)</option>
                        <option value="BANK_STATEMENT">Bank Statement</option>
                        <option value="BUSINESS_REGISTRATION">Business Registration</option>
                        <option value="BUSINESS_ADDRESS_VERIFICATION">Business Address Verification</option>
                        <option value="PCI_DOCUMENT">PCI Document</option>
                        <option value="PASSPORT">Passport</option>
                        <option value="OTHER">Other</option>
                    </Field>
                </Form.Group>
            </Container>
          <Container style={{ textAlign: "left" }}>
            <Form.Label>
              Choose File{" "}
              <span
                        data-tip="Select file from your local machine"
                        data-for="file"
                    >
                        <FontAwesomeIcon color="#1A233B" icon="info-circle" />
                    </span>
                    <ReactTooltip
                        id="file"
                        place="right"
                        type="dark"
                        effect="solid"
                    />
            </Form.Label>
            <br />
          <Field
            name="file"
            component={fileUpload}
            config={DEFAULT_CONFIG}
            instructions={DEFAULT_INSTRUCTIONS}
          />
          <br />
          <Button type="submit">Submit</Button>
          </Container>
        </Form>
      );
    }
  }

export default reduxForm({
    form: "FileUpload", // a unique identifier for this form
    initialValues: initialFieldValues,
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true // <------ unregister fields on unmount
    //validate, // <--- validation function given to redux-form
    //warn, // <--- warning function given to redux-form
  })(UploadFile);