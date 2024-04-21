import React from "react";
import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";

export default function TextField(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.field}>{props.displayName}</label>
      <Field name={props.field} id={props.field} className="form-control" />
      <ErrorMessage name={props.field}>
        {(msg) => <div className="text-danger">{msg}</div>}
      </ErrorMessage>
    </div>
  )
}

TextField.propTypes = {
  field: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  field: "",
  displayName: "",
};
