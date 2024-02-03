import React from "react";
function Condition() {
    const Session=false;
    return(
        <>
            <h1>Conditionals</h1>
            {Session?(
                <h1>Welcome...</h1>
            ) : (
                <h2>please login</h2>
            )}
        </>
    );
}
export default Condition;