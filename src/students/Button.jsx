import React from "react";

function Button(props) {
    const { children, onClick } = props;
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
