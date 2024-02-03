import React from "react";
function Event() {
    let sessionActive=true;
    function handleChange() {
        // alert("Change function triggered");
        sessionActive=!sessionActive;
        console.log(sessionActive);
    }
    function handleClick(){
        alert("Click button triggered");
    }
    function handleBlur(e:React.FocusEvent<HTMLInputElement>) {
        // alert("keyup event triggered");
        alert(e.currentTarget.value);//value given in text box is displayed with the trigger.
    }
    return(
        <>
            <h1>Events....</h1>
            <div>
                <input type="checkbox" onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleClick}>Click Here</button>
            </div>
           <div>
                <input type="text" onBlur={(e)=> handleBlur(e)}/>
           </div>
            {sessionActive?(
                <h1>Login</h1>
            ):(
                <h1>Welcome</h1>
            )
            }
        </>
    );
}export default Event;