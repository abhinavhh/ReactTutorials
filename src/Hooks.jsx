// State - data belongs to a component that,when changed ,causes the component to be re-rendered.

//React Hooks helps to develop React applications mostly using functional component. 

//Types of react hooks 1. useState

//UseState - Lets you add a state variable to your functional component.

//syntax : const[name-"(state variable)", setName-"(Function to update sate)"] = useState("")-"(default state or initial value)";

//setname("Name")--automatically updates value in name into Name.

//users can set any datatype with react hooks -useState.

//Users cannot use React hooks - useState conditionally.

import React, { useState } from "react";
function Hook() {
    const [sessionActive,setSession]= useState(false);
    const[message,setMessage]=useState("");
    const handleChange = () => {
        setSession(!sessionActive);
    };
    const handleClick = () => {
        setSession(!sessionActive);
    }
    const handleKeyup = (e:React.KeyboardEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value);
    };
    return(
        <>
            <h1>Hooks...</h1>
            <div>
                <input type="checkbox" onChange={handleChange}/>
            </div>
           {sessionActive?(
            <h1>Successfully Logged out..</h1>
           ):(
            <h1>Successfully Loged in...</h1>
            
           )
           }
           <div>
            <button onClick={handleClick}
            style={{ backgroundColor:sessionActive? "#ff8a8a" : "#aef359"}}>
                {sessionActive?"Login":"Logout"}</button>
           </div>
           <div>
            <input type="text" onKeyUp={(e)=>handleKeyup(e)}/>
           </div>
           <div>{message}</div>
        </>
    );
}export default Hook;