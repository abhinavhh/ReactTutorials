import { useContext } from "react";
import Chi from "./child";
import ValueContext from "./ValueContext";
function Par() {
    const value=useContext(ValueContext);
    return(
        <>
            <h2>Parent Node</h2>
            <h2>Parent node value is : {value.toString()}</h2>
            <Chi />
        </>
    );
}export default Par;