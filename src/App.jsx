import logo from './logo.svg';
import './App.css';
import Root from './Hooks-Context';
import ValueContext from './ValueContext';
import HooksEffects from './Hooks-Effect';
import { useState } from 'react';
function App() {
  const [hide,setHide]=useState(false);
  return (
    <>
      <div>
        <h1>hello world..</h1>
      </div>
      <input type="checkbox"  onChange={()=> setHide(!hide)} />
        Click to Hide
      {hide ? null:<HooksEffects/>}
      <ValueContext.Provider value={hide}>
        <Root />
      </ValueContext.Provider>
    </>
  );
}export default App;
