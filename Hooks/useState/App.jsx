
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count + 1);
  }
  return (
      <div>
        <p> Counter is {count}</p>
        <button onClick= {incrementCount}>Increment</button>
        <button onClick = {decrementCount}>Decrement</button>
      </div>
      
  );
}

export default App;
