
import { useReducer, useState } from 'react';

function Contact ()  {
    const initialState = [{name : "Sushmitha", 
                        email:"sushmithasyadav24@gmail.com",
                        id: Date.now()}];
    const [ name, setName] = useState("");
    const[ email, setMail] = useState(""); 

    function reducer(state, action) {
        switch(action.type) {
            case "add" : return [...state, action.payload];
            case "delete" : return state.filter((record) => {
                            return record.id !== action.payload.record.id;
                            });
            default: break;
        }
    }
    const [state, dispatch]= useReducer(reducer, initialState);
    function addContact(e) {
        e.preventDEfault();
        const data = {
            id: Date.now(),
            name,
            email
        };
        setName("");
        setMail("");
        dispatch({type:"add", payload:{data}});


    }
    return (
        <div>
            <form onSubmit = {addContact}>
            <input onChange = {(e) =>setName(e.target.value)} 
            type="text" value={name} placeholder="Enter your name"></input>
            <input onChange = {(e) =>setMail(e.target.value)} 
            type="text" value={email} placeholder="Enter your mail id"></input>
            <button>Add Contact</button>
            </form>
            <div>
            <ul>
          {state.map((record) => {
         return( 
              <li key = {record.id}> 
              <h2>{record.name}    {record.email}</h2>
              <button onClick = {()=> dispatch({type:"delete",payload:{record}})}>
              DELETE CONTACT</button>
               </li>
            );
          
          })}
            </ul>
            </div>

        </div>
    );
}

export default Contact;





