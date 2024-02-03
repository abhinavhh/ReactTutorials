
//important.....

//Components helps to create map Collections using different UI by passing a component.


import React, { useState } from "react";
import Project_con from "./Project_content";
import Dis from "./Hello";
function Compon() {
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
            {/* child content is project_content */}
            <div>
                <Project_con copyright={
                    <>
                        <span>Copyright &copy;</span>
                    </>
                }
                >
                    <>
                        {/* This is the children */}
                        <Dis />
                        <button onClick={()=>alert("Button Clicked")}>
                            Click Here
                        </button>
                    </>
                </Project_con>
            </div>
        </>
    );
}export default Compon;