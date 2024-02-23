import React from "react";
import css from "./CssStyling.module.css";
function Css(){
    const divstyle={
        background:"yellow",
        width:"100%",
    };
    return(
        <>
            {/* external styling is given from index.css file */}
            <h1 className="green">Css for React</h1> 
            

            {/* Inline Styling for single component */}
            <h2 style={{color:"red",textAlign:"center",background:"black"}}>
                Styling React using css{""}
            </h2>
            

            {/* Styling within the react file */}
            <div style={divstyle}>box
                </div>
            <br />
            <div style={divstyle}>box</div>


            {/*  */}
            <h2 className={css["primary-color"]}>Abhinav</h2>
            <h2 className={"primary-color"}>Abhinav</h2>
        </>
    );
}export default Css;