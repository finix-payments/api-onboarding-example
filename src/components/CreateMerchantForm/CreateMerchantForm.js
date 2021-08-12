import React, { useState } from "react";
import { Field, reduxForm, FormSection } from "redux-form";
import {
  Form,
  Button,
  Container,
  Modal,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";

// Import Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iframe from "react-iframe";
import ReactTooltip from "react-tooltip";

// Import CSS
import "./CreateMerchantForm.css";

// Import Fields
import renderCurrency from "../../fields/renderCurrency";
import renderField from "../../fields/renderField";
import renderPercentage from "../../fields/renderPercentage";
import renderPhone from "../../fields/renderPhone";
import renderSelectField from "../../fields/renderSelectField";

// Import Field Sets

import PrincipalInformation from "./formSections/PrincipalInformation";

// Import Normalizers
import normalizePhone from "../../normalizers/normalizePhone";
import normalizePercentage from "../../normalizers/normalizePercentage";
import normalizeAmount from "../../normalizers/normalizeAmount";

// Import Formatters
import formatAmount from "../../formatters/formatAmount";

// Import sychronous validation
import validate from "./validate.js";
import warn from "./warn.js";

// Import Initial Values
import initialFieldValues from "./initializeValues";

const CreateMerchantForm = (props) => {
  const { handleSubmit, submitting } = props;

  // Modal 1 - Merchant Agreement
  const [showSubmerchant, setShow] = useState(false);
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const handleShowSubmerchant = (e) => {
    e.preventDefault();
    setShow(true);
  };
  // Modal 2 - Credit Agreement
  const [showCredit, setShowCredit] = useState(false);
  const handleCloseCredit = (e) => {
    e.preventDefault();
    setShowCredit(false);
  };
  const handleShowCredit = (e) => {
    e.preventDefault();
    setShowCredit(true);
  };

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
        <h3>
          Business Information{" "}
          <span
            data-tip="Please enter information about your business"
            data-for="business_information"
          >
            <FontAwesomeIcon icon="info-circle" />
          </span>
        </h3>
        <ReactTooltip
          id="business_information"
          place="right"
          type="dark"
          effect="solid"
        />
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

        <Form.Label>
          Business Type{" "}
          <span
            data-tip="Select what type of business you are"
            data-for="business_type"
          >
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip
            id="business_type"
            place="right"
            type="dark"
            effect="solid"
          />
        </Form.Label>
        <Form.Group>
          <Field name="business_type" component={renderSelectField}>
            <option />
            <option value="INDIVIDUAL_SOLE_PROPRIETORSHIP">
              Individual Sole Proprietorship
            </option>
            <option value="CORPORATION">Corporation</option>
            <option value="LIMITED_LIABILITY_COMPANY">
              Limited Liability Company
            </option>
            <option value="PARTNERSHIP">Partnership</option>
            <option value="ASSOCIATION_ESTATE_TRUST">
              Association Estate Trust
            </option>
            <option value="TAX_EXEMPT_ORGANIZATION">
              Tax Exempt Organization
            </option>
            <option value="INTERNATIONAL_ORGANIZATION">
              International Organization
            </option>
            <option value="GOVERNMENT_AGENCY">Government Agency</option>
          </Field>
        </Form.Group>
        <div />
        <Form.Label>
          Ownership Type{" "}
          <span data-tip="Select whether you are a publically traded company or privately held company. If you are a government agency, select public.">
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip place="right" type="dark" effect="solid" />
        </Form.Label>
        <Form.Group>
          <Field name="ownership_type" component={renderSelectField}>
            <option />
            <option value="PUBLIC">Public</option>
            <option value="PRIVATE">Private</option>
          </Field>
        </Form.Group>

        <div>
          Business Incorporation Date{" "}
          <span data-tip="Enter the date your business was incorporated.">
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip place="right" type="dark" effect="solid" />{" "}
        </div>
        <Row>
          <Col>
            <Form.Label>Month </Form.Label>
            <Form.Group>
              <Field
                name="business_incorporation_month"
                component={renderSelectField}
              >
                <option />
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Field>
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Day </Form.Label>
            <Form.Group>
              <Field
                name="business_incorporation_day"
                component={renderSelectField}
              >
                <option />
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </Field>
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Year </Form.Label>
            <Form.Group>
              <Field
                name="business_incorporation_year"
                component={renderSelectField}
              >
                <option />
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1902">1902</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
              </Field>
            </Form.Group>
          </Col>
        </Row>
        <Field
          name="business_tax_id"
          type="text"
          component={renderField}
          label="Business Tax ID (EIN)"
          placeholder_text="12-3456789"
          tool_tip_text="Nine digit Tax Identification Number (TIN), Employer Identification Number (EIN) or if the business_type is INDIVIDUAL_SOLE_PROPRIETORSHIP and a Tax ID is not available, the principal’s Social Security Number (SSN)"
        />
        <Field
          name="american_express_mid"
          type="text"
          component={renderField}
          label="American Express MID (Optional)"
          placeholder_text="000000000"
          tool_tip_text="If you have an American Express MID, please enter it here. Most people do not have and it is not required to process American Express transactions."
        />
        <Field
          name="discover_mid"
          type="text"
          component={renderField}
          label="Discover MID (Optional)"
          placeholder_text="000000000"
          tool_tip_text="If you have a Discover MID, please enter it here. Most people do not have and it is not required to process Discover transactions."
        />

        <div>
          <Form.Label>Have you processed credit cards before?</Form.Label>
        </div>

        <Form.Label>
          <Field
            name="processed_payments_before"
            component="input"
            type="radio"
            value="true"
          />{" "}
          Yes
        </Form.Label>
        <div></div>
        <Form.Label>
          <Field
            name="processed_payments_before"
            component="input"
            type="radio"
            value="false"
          />{" "}
          No
        </Form.Label>

        <Field
          name="annual_card_volume"
          type="number"
          component={renderCurrency}
          label="Annual Card Volume"
          placeholder_text="200,000"
          tool_tip_text="Approximate annual credit card sales expected to be processed "
          normalize={normalizeAmount}
          format={formatAmount}
        />
        <Field
          name="default_statement_descriptor"
          type="text"
          component={renderField}
          label="Default Statement Descriptor"
          placeholder_text="Hollywood Bikes"
          tool_tip_text="Billing descriptor displayed on the buyer’s bank or card statement (Length must be between 1 and 20 characters)"
        />
        <Field
          name="max_transaction_amount"
          type="number"
          component={renderCurrency}
          label="Max Transaction Amount"
          placeholder_text="$5,000"
          tool_tip_text="Maximum amount that can be transacted for a single transaction"
          normalize={normalizeAmount}
          format={formatAmount}
        />

        <h3>
          Principal Information{" "}
          <span data-tip="Please fill in information about the primary principal of this business.">
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip
            id="additional-principals"
            place="right"
            type="dark"
            effect="solid"
          />{" "}
        </h3>

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
        <h4>Additional Underwriting Data</h4>

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

        <h4>Bank Account Information</h4>

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

        <h4>
          Processing Information{" "}
          <span
            data-tip="This is the rate you will receive when you process payments on Bike Lane. The rates are segmented by credit card and ACH transfers."
            data-for="processing_information"
          >
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip
            id="processing_information"
            place="right"
            type="dark"
            effect="solid"
          />{" "}
        </h4>

        <div>
          <FontAwesomeIcon color="#1A233B" icon="credit-card" /> 2.9% + $0.30
          per Credit Card Transfer
        </div>
        <div>
          <FontAwesomeIcon color="#1A233B" icon="money-check-alt" /> $0.50 per
          ACH Transfer
        </div>
        <div
          className="small-text"
          style={{ paddingBottom: 5, paddingTop: 15 }}
        >
          <Field
            name="merchant_agreement_acceptance"
            type="checkbox"
            component="input"
            label=""
            style={{ marginRight: 5 }}
          />
          By submitting your merchant application, you agree to the{" "}
          <span onClick={handleShowSubmerchant} style={{ color: "blue" }}>
            Sub-Merchant Agreement
          </span>
          , and certify that all information you have provided is complete and
          corect. By selecting the "Submit Application" button, you are
          accepting and agreeing to the Sub-Merchant Agreement between you and
          Fattmerchant. You agree that your selecting “I Accept” is the legal
          equivalent of your manual signature to the Sub-Merchant Agreement, and
          that you consent to be legally bound by the Sub-Merchant Agreement.{" "}
        </div>
        <div
          className="small-text"
          style={{ paddingBottom: 15, paddingTop: 5 }}
        >
          <Field
            name="credit_check_allowed"
            type="checkbox"
            component="input"
            label=""
            style={{ marginRight: 5 }}
          />
          You further agree to provide written authorization to undergo a credit
          check as part of the{" "}
          <span onClick={handleShowCredit} style={{ color: "blue" }}>
            FCRA Permissible Purpose Guidelines.
          </span>
        </div>

        <Modal
          show={showSubmerchant}
          //onHide={handleClose}
          size="lg"
          id="merchant_agreement_modal"
        >
          <Modal.Header
          //closeButton
          >
            <Modal.Title>Sub-Merchant Agreement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Iframe
              url="https://finix-hosted-content.s3.amazonaws.com/flex/v1/terms-and-conditions.html"
              width="100%"
            ></Iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showCredit}
          //onHide={handleCloseCredit}
          size="lg"
          id="credit_check_modal"
        >
          <Modal.Header
          //closeButton
          >
            <Modal.Title>Fair Credit Reporting Act</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Iframe
              url="https://finix-hosted-content.s3.amazonaws.com/flex/v1/credit-check-notice.html"
              width="100%"
            ></Iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="primary" onClick={handleCloseCredit}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

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

        <div>
          <Button type="submit" disabled={submitting}>
            Submit Application
          </Button>
        </div>
      </Container>
    </Form>
  );
};

export default reduxForm({
  form: "createMerchantForm", // a unique identifier for this form
  initialValues: initialFieldValues,
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(CreateMerchantForm);
