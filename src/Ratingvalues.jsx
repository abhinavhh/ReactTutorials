import React from "react";
const RatingValues=(props)=>{
    const arrayvalues=Array(props.maxValue).fill(0);//max value is accessed here
    return(
        <>
            <select 
                onChange={(e)=>{
                    props.onSelected(parseInt(e.currentTarget.value,10));
                    // Reads the option value that the user selected and passes to onSelect

            }}
            >
                {/* option corresponding to maxvalue is created */}
                {arrayvalues.map((_,index)=>(
                    <option key={index+1} value={index+1}>
                        {index+1}
                    </option>
                ))}
            </select>
        </>
    );
}
// defaultProps helps to give a default value for parameters (for eg: maxValue)

//if we do not assign a maxValue the it will have this default value
RatingValues.defaultProps={
    maxValue:3
};
export default RatingValues;