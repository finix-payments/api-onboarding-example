import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

// Import Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

// Import CSS
import "../CreateMerchantForm.css";

// Import Fields
import renderCurrency from "../../../fields/renderCurrency";
import renderField from "../../../fields/renderField";
import renderSelectField from "../../../fields/renderSelectField";

// Import Field Sets

// Import Normalizers
import normalizeAmount from "../../../normalizers/normalizeAmount";

// Import Formatters
import formatAmount from "../../../formatters/formatAmount";

// Import sychronous validation
import validate from "../validation/validate.js";
import warn from "../validation/warn.js";

// Import Initial Values
import initialFieldValues from "../initializeValues";

const BusinessInformation = (props) => {
  const { handleSubmit, previousPage } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Container style={{ textAlign: "left", paddingTop: 20 }}>
        <h2>Business Information</h2>

        <div className="subtitle">Tell us about your business model.</div>
        <br />

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
})(BusinessInformation);
