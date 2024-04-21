import React from 'react';
import { useFormikContext } from "formik"
import { PropTypes } from 'prop-types';

export default function DateField(props){
    const {values,validateForm,touched,errors}=useFormikContext();
    return(
        <div className="mb-3">
            <label htmlFor={props.field}>{props.displayName}</label>

            <input type="date"
             className="form-control"
             id={props.field}
             name={props.field}
             defaultValue={values[props.field]?.toLocaleDateString("en-CA")}
             onChange={(e)=>{
                const date=new Date(e.currentTarget.value + "T00:00:00");
                values[props.field]=date;
                validateForm();
             }} 
            />
            {touched[props.field] && errors[props.field] ? (
                <div className="text-danger">{errors[props.field]?.toString()}</div>
            ) : null}
        </div>
    )
}

DateField.propTypes = {
    field: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
};
