import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";

const RenderFilePicker = (field) => {

  const [id] = useState(_uniqueId("prefix-"));
  return (
    <div id={id}>
      <label>{field.myLabel}</label>
      <input type="file" {...field.input} />
    </div>
  );
};

export default RenderFilePicker;
