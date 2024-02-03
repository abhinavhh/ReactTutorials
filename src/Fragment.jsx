import React from "react";
//React.Fragment is used to use elements without a parent.
//OR we can use a tag open (<.>) and tag close (</>) for fragment function.
function Frag() {
    return(
        // <React.Fragment>
        //     <h1>Fragment</h1>
        // </React.Fragment>
        <>
            <h1>Fragment</h1>
        </>
    );
}
export default Frag;