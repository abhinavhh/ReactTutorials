

//Type of react hook --> useEffect

// useEffect--> serves to work side effects on your computer

// * A side effect is anything that is not related to the components output value

// * useEffect helps to execute a method while loading & just before destroying a component

// * We can indicate conditions to prevent useEffect from running
import React,{useEffect,useState} from "react";
function HooksEffects() {
    const [clicks ,setClicks]=useState(0);
    useEffect( () => {
        alert("Loaded");
    
    return()=>{
        alert("Destroyed");
    };
    
},[]);
useEffect(()=>  {
    document.title=`You have clicked ${clicks} times`;
},[clicks]);
return(
    <>
        <h1>UseEffect</h1>
        <div>
            <button onClick={() => setClicks(clicks+1)}>
                Click Here! {clicks} times
            </button>
        </div>
    </>
);
}
export default HooksEffects;