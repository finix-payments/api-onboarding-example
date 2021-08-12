import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "redux-form";
import { Row, Col } from "react-bootstrap";
import renderField from "../../../fields/renderField";
import renderPercentage from "../../../fields/renderPercentage";
import renderSelectField from "../../../fields/renderSelectField";
import renderPhone from "../../../fields/renderPhone";
import ReactTooltip from "react-tooltip";

import { Form } from "react-bootstrap";

// Normalizers
import normalizePhone from "../../../normalizers/normalizePhone";
import normalizePercentage from "../../../normalizers/normalizePercentage";
import normalizeAmount from "../../../normalizers/normalizeAmount";

// Format
import formatSocialSecurity from "../../../formatters/formatSocialSecurity";

class PrinicpalInformation extends Component {
  render() {
    return (
      <div>
        <Field
          name="first_name"
          type="text"
          component={renderField}
          label="First Name"
          placeholder_text="Alex"
          tool_tip_text="Full legal first name of the principal representative (max 20 characters)"
        />
        <Field
          name="last_name"
          type="text"
          component={renderField}
          label="Last Name"
          placeholder_text="Smith"
          tool_tip_text="Full legal last name of the merchant’s principal representative (max 20 characters)"
        />
        <Field
          name="title"
          type="text"
          component={renderField}
          label="Title"
          placeholder_text="Chief Executive Officer, CFO"
          tool_tip_text="Principal’s corporate title or role (max 60 characters)"
        />
        <Field
          name="principal_percentage_ownership"
          type="number"
          component={renderPercentage}
          label="Principal Percentage Ownership"
          placeholder_text="100"
          tool_tip_text="Percentage of company owned by the principal (min 0; max 100)"
          normalize={normalizePercentage}
        />
        <div>
          Principal Date of Birth{" "}
          <span
            data-tip="Enter the date of birth of the principal."
            data-for="principal_dob"
          >
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip
            id="principal_dob"
            place="right"
            type="dark"
            effect="solid"
          />
        </div>
        <Row>
          <Col>
            <Form.Label>Month </Form.Label>
            <Form.Group>
              <Field name="principal_dob_month" component={renderSelectField}>
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
              <Field name="principal_dob_day" component={renderSelectField}>
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
              <Field name="principal_dob_year" component={renderSelectField}>
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
          name="principal_tax_id"
          type="text"
          component={renderField}
          label="Principal Tax ID"
          placeholder_text="123-45-6789"
          tool_tip_text="Nine digit Social Security Number (SSN) for the principal"
          format={formatSocialSecurity}
          normalize={normalizeAmount}
        />
        <Field
          name="principal_address_line1"
          type="text"
          component={renderField}
          label="Personal Address Line 1"
          placeholder_text="123 Home Ave"
          tool_tip_text="First line of the principal's address (max 35 characters)"
        />
        <Field
          name="principal_address_line2"
          type="text"
          component={renderField}
          label="Personal Address Line 2"
          placeholder_text="Apt 1"
          tool_tip_text="Second line of the principal's address (max 35 characters)"
        />
        <Row>
          <Col>
            <Field
              name="principal_address_city"
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
                data-tip="Select the state of your principal"
                data-for="principal_state"
              >
                <FontAwesomeIcon color="#1A233B" icon="info-circle" />
              </span>
              <ReactTooltip
                id="principal_state"
                place="right"
                type="dark"
                effect="solid"
              />{" "}
            </Form.Label>
          
            <Form.Group>
              <Field
                name="principal_address_region"
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
              name="principal_address_zip"
              type="number"
              component={renderField}
              label="Zip"
              placeholder_text="90012"
              tool_tip_text="Zip or Postal code (max 7 characters)"
            />
          </Col>
        </Row>
        <Field
          name="principal_phone"
          type="text"
          component={renderPhone}
          label="Phone"
          placeholder_text="123-456-7890"
          tool_tip_text="Phone Number of principal"
          normalize={normalizePhone}
        />

        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email Address"
          placeholder_text="alex.smith@hollywoodbicycles.com"
          tool_tip_text="Principal’s email address where they can be reached (max 100 characters)."
        />
      </div>
    );
  }
}

export default PrinicpalInformation;
