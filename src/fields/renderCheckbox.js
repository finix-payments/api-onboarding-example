import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";

const RenderCheckbox = (field) => {
 

  const [id] = useState(_uniqueId("prefix-"));
  return (
    <span id={id}>
   
   <input style={{marginRight:5}}
        {...field.input}
        placeholder={field.placeholder_text}
        normalize={field.normalize}
        format={field.format}
        type={field.type}
      />
      <span>
      {field.meta.touched &&
        ((field.meta.error && (
          <span style={{ color: "red", marginLeft:5, marginRight:5 }}>{field.meta.error}</span>
        )) ||
          (field.meta.warning && (
            <span style={{ color: "orange", marginLeft:5, marginRight:5  }}>{field.meta.warning}</span>
          )))}
      </span>
    </span>
  );
};

export default RenderCheckbox;
