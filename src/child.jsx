import { useContext } from "react";
import ValueContext from "./ValueContext";

function Chi() {
    const value=useContext(ValueContext);//calling ValueContext into child directly
    return(
        <>
            <div>
                <h4>Child Node</h4>
                <h5>Child node value is : {value.toString()}</h5>
            </div>
        </>
    );
}export default Chi;