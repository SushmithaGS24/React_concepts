
import { useContext } from 'react';
import { Context } from './CreateContext.js';



function ChildB() {
    const { counter, setCounter} = useContext(Context);
    
    return (
        <div className="border">
            <h2> Counter is {counter} </h2>
            <button onClick = {()=> setCounter(counter + 1)}>Increment</button>
        </div>
    );
    }

function ChildA() {

    const { counter, setCounter} = useContext(Context);

    return (
        <div className="border">
            <h2> Counter is {counter} </h2>
            <button onClick = {()=> setCounter(counter + 1)}>Increment</button>
            <ChildB />
        </div>
    );
}



export default ChildA;
