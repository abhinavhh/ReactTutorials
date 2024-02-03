//Drawback of if else conditioning is we can create options for more numbers..
//if we need 100 options it is very time consuming.
// TO overcome this we use MapCollections.

import React, { useState } from "react";
function MapC(){
    //*********************/

    // Generating UI from array

    //**********************/
    const arrayvalue=Array(1000).fill(0);//[0,0,0,0.......]
    const[rating,setRating]=useState(1);
    return(
        <>
            <h1>Iteration</h1>
            <div>
                <select onChange={(e)=>{
                    setRating(parseInt(e.currentTarget.value,10));
                }}
                >
                    {arrayvalue.map((number,index)=>(
                        <option key={index+1} value={index+1}>
                            {index+1}
                        </option>
                    ))}
                </select>
            </div>
            <div>{rating}</div>
        </>
    );
}export default MapC;