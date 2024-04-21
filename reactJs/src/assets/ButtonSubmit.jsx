import React from 'react';

function ButtonSubmit(props) {
    return (
        <>
            <button
                type={props.type}
                disabled={props.disabled}
                className={props.className}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </>
    );
}

ButtonSubmit.defaultProps = {
    type: "button",
    disabled: false,
    className: "",
};

export default ButtonSubmit;
