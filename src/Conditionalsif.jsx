import React, { useState } from "react";
function Condition() {
    const [rating,setRating]=useState(4);
    function displayRating() {
        if(rating === 1){
            return(
                <>
                    <div>
                        <span style={{color:"#ed2cd2"}}>Average !</span>
                    </div>
                </>
            );
        }
        else if(rating === 2){
            return(
                <>
                    <div>
                        <span style={{color:"red"}}>Good !</span>
                    </div>
                </>
            );
        }
        else if(rating === 3){
            return(
                <>
                    <div>
                        <span style={{color:"violet"}}>Ecellent !</span>
                    </div>
                </>
            );
        }
        else{
            return(
                <>
                    <div>
                        <span style={{color:"Blue"}}>Extra ordinary !</span>
                    </div>
                </>
            );
        }
    }
    return(
        <>
        <h1>Conditionals if else</h1>
            <div>
                <select 
                    onChange={(e)=>{
                        setRating(parseInt(e.currentTarget.value,10));
                    }}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </div>
            <span>=============================</span>
            <div>Your rating is {rating} !</div>
            <div>{displayRating()}</div>
        </>
    );
}export default Condition;