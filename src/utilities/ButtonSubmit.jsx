import React from 'react';
import { boolean } from 'yup';

function ButtonSubmit(props) {
    return (
        <>
            <button
                type={props.type}
                disabled={props.disabled}
                className="btn btn-primary"
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </>
    );
}

ButtonSubmit.defaultProps = {
    type: "button",
    disabled:boolean,
};

export default ButtonSubmit;
