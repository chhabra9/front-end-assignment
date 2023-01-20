/*jshint esversion: 6 */
import './App.css';
import FetchData from './fetchData';
import { useState } from 'react';
function App() {
  const [val,changeVal]=useState(false);
  const updateStatus=()=>{
    changeVal(prev=>!prev);
  };
  return (
    <div className="App">
      <button onClick={updateStatus}>Show me Data</button>  
      {val? <FetchData></FetchData>:<></>}
      
    </div>
  );
}

export default App;
