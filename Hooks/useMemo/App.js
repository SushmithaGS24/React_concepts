

import React, { useState, useMemo, memo } from 'react';


function App () {

    const[name, setName] = useState('');
    const [ counter, setCounter ] = useState(1);
    const result = useMemo(() => {
        return factorial (counter);
    }, [counter] );

    function factorial(n) {
        let count = 0;
        let fact = 1;
       while(count<1000000000) count++;
        for(let i=1;i<=n;i++) {
            fact = fact * i;
        }

        return fact;

    }

    return (

        <div>
        <h2> Factorial of { counter } : {result}</h2>
        <button onClick = {()=>setCounter(counter + 1)} >Increment</button>
        <button onClick = {()=>setCounter(counter - 1)}  >Decrement</button>
        <div>
            <input type = "text" placeholder = "name" value={name} onChange = {(e)=> setName(e.target.value)}/>
           <DisplayName name = {name}></DisplayName>
        </div>
        </div>


    );



}


const DisplayName = memo(({ name }) => {
    console.log("rendered");
    return (
        <div>
           
            <h4>Name is {name}</h4>
        </div>
    );

  });

export default App;
