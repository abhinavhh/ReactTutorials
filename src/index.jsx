import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';//global styling
import reportWebVitals from './reportWebVitals';
import Frag from './Fragment';
import Dis from './Hello';
import Express from './Expression';
import Event from './Events';
import Hook from './Hooks';
import Condition from './Conditionalsif';
import MapC from './MapCollection'; 
import Compo from './Components';
import Compon from './Component_content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Dis />
    {/* <Frag /> */}
    {/* <Express /> */}
    {/* <Condition /> */}
    {/* <Event /> */}
    {/* <Hook /> */}
    {/* <Condition /> */}
    {/* <MapC /> */}
    {/* <Compo /> */}
    <Compon />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();