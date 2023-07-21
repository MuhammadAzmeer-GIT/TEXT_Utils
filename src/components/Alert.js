import React from "react";

function Alert(props) {
  const Capitilize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        class={`alert alert-${props.alert.typ} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{Capitilize(props.alert.typ)}: </strong>
        {props.alert.msg}
      </div>
    )
  );
}
export default Alert;
