import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";

const RenderSelectField = (field) => {
 

  const [id] = useState(_uniqueId("prefix-"));
  return (
    <div id={id}>
      <label>{field.myLabel}</label>

      <select {...field.input}>{field.children}</select>

      {field.meta.touched &&
        ((field.meta.error && (
          <span style={{ color: "red" }}>{field.meta.error}</span>
        )) ||
          (field.meta.warning && (
            <span style={{ color: "orange" }}>{field.meta.warning}</span>
          )))}
    </div>
  );
};

export default RenderSelectField;
