import React from 'react';
function Express() {
    const title="This is expression in react";
    const result=(value)=>value*value;
    return(
        <>
            <h1>JSX Expressions..</h1>
            <h2>{title}</h2>
            <p>Result is : {result(4)}</p>
            
        </>
        //title.toUpperCase() function can be used
    );
}
export default Express;