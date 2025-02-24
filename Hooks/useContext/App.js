

import './App.css';
import { useState } from "react";
import { Context } from './CreateContext.js';
import ChildA from './ChildA.js';


function App() {
    const [ counter, setCounter] = useState(0);

    function handleIncrement () {
        setCounter(c => c + 1);
    }

    function handleDecrement () {
        setCounter(c => c - 1);
    }


  return (
    <div className="border">
      <h2> Counter value is {counter}</h2>
      <button onClick = {handleIncrement} >Increment</button>
      <button  onClick = {handleDecrement} >Decrement</button>
      <Context.Provider value = {{ counter, setCounter }}>
         < ChildA />
      </Context.Provider>

     
    </div>
  );
}

export default App;
