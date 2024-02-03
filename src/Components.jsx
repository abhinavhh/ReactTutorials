
//important.....

//Components helps to create map Collections using different UI by passing a component.


import React, { useState } from "react";
import RatingValues from "./Ratingvalues";
function Compo() {
    const[rating,setRating]=useState(1);
    function displayRating(){
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
            <h1>Components...</h1>

            <div>Your rating is {rating} !</div>
            <div>{displayRating()}</div>
            {/* <div>
                <RatingValues maxValue={20} />
            </div> */}
            {/* this is used for passing a component only but UI display will not change will not change*/}

            {/* we use a parent to make communication b/w two UI's. */}
            <div>
                <RatingValues 
                    maxValue={5} 
                    //we can make this a optional parameter by using defaultProps

                    // This value is passed to Ratingvalues.jsx UI
                    // onSelected event will call setRating
                    onSelected={(value)=>{
                        setRating(value); 
                        // Value of rating variable is updated
                    }}
                />
            </div>

        
        </>
    );
}export default Compo;