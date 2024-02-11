
import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from "react";
import HooksEffects from './Hooks-Effect';
function App() {
  const [hide,setHide]=useState(false);
  return (
    // <div>
    //     <h1>hello world..</h1>
    //  </div>
    // 
    <>
      <input type="checkbox" onChange={()=> setHide(!hide)} />
      Click to Hide
      {hide ? null:<HooksEffects/>}
    </>
  );
}
export default App;