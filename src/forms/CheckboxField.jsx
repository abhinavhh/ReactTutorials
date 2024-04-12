import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";
export default function CheckboxField(props){
    return(
        <div className="mb-3 form-check">
            <Field
                name={props.field}
                id={props.field}
                className="form-check-input"
                type="checkbox"
            />
            <label htmlFor={props.field}>{props.displayName}</label>
            <ErrorMessage name={props.field}>
                {(msg)=><div className="text-danger">(msg)</div>}
            </ErrorMessage>
        </div>
    );
}
CheckboxField.propTypes={
    field: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
};