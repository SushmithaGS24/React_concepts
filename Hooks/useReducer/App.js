

import './App.css';
import { useReducer, useState } from "react";



function reducer( state, action) {
  switch(action.type) {
    case "add" :
       return [...state, action.payload];
    case "delete" :
        return  state.filter((contact) =>
          contact.id !== action.payload);
    default : break;
  }


}

function App() {
    
    const initialValue = [{
      id: Date.now(),
      name: "Sushmitha",
      email : "sush@gmail.com"
    }];

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");


    const [ state, dispatch] = useReducer(reducer, initialValue);

    function addContact(e) {
      e.preventDefault();
      const contact = {
        id: Date.now(),
        name,
        email
      }
      dispatch({type:"add", payload: contact});
      setName("");
      setEmail("");
    }


  return (
    <div className="border">

      <form onSubmit={addContact}>
        <input type="text"placeholder="name" value={name} onChange = {(e)=> setName(e.target.value)} />
        <input type="email"placeholder="email" value={email} onChange = {(e)=> setEmail(e.target.value)} />
        <button>Submit</button>
      </form>

      <ul>
        {state.map((contact)=> {
        return (
          <li key={contact.id}>
            <h4>
              <div>{contact.name} </div>
              <div>{contact.email} </div>

          </h4>
          <button onClick = {()=> dispatch({ type:"delete", payload: contact.id})}>Delete Contact</button>
            </li>
        );
        }
        )}
      
      </ul>
     
      

     
    </div>
  );
}

export default App;
