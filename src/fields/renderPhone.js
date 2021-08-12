import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

const RenderPhone = (field) => {
  const [id] = useState(_uniqueId("prefix-"));
  return (
    <Form.Group controlId={id}>
      <div>
        <Form.Label>
          {field.label}{" "}
          <span data-tip={field.tool_tip_text} data-for={field.label}>
            <FontAwesomeIcon color="#1A233B" icon="info-circle" />
          </span>
          <ReactTooltip id={field.label} place="right" type="dark" />{" "}
        </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>+1</InputGroup.Text>
          <Form.Control
            {...field.input}
            placeholder={field.placeholder_text}
            normalize={field.normalize}
          />
        </InputGroup>

        {field.meta.touched &&
        ((field.meta.error && (
          <span style={{ color: "red" }}>{field.meta.error}</span>
        )) ||
          (field.meta.warning && (
            <span style={{ color: "orange" }}>{field.meta.warning}</span>
          )))}
      </div>
    </Form.Group>
  );
};

export default RenderPhone;
