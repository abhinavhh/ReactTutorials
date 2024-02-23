import React from "react";
import "./Student.module.css";
function StudentMain(props) {
    const buildLink = () => `./students/${props.id}`;//hyperlink
    return(
        <>
            <div className="main">
                <a href={buildLink()}>
                    <img src={props.photo} alt="Photo" />
                </a>
                <p>
                    <a href={buildLink()}>{props.rollno}</a>
                    <a href={buildLink()}>{props.name}</a>
                </p>
            </div>
        </>
    );
}
export default StudentMain;


//create function StudentMain which pass attribute property (props) from App.css

//create a const buildlink inside created function 

//property is defined in a js file (Students.model.d.js)

//buildlink() is used to remain on the same page