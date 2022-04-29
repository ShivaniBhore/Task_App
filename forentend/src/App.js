import Register from "./compentent/Register";
import { useState } from "react";
import "./App.css";

function App() {
  const [newpage,setnewpage]=useState(false)
  const [username,setusername]=useState("")
  //call an API once you get username and password from here 
  //use onchange to get the values of username and password or email
  return (
    <div className="App">
    {!newpage ?
    <div className="SubApp">
      <h1> Log In </h1>
      <input placeholder="username" onChange={(event)=>setusername(event.target.value)}></input>
      <input  type ="password" placeholder="password"></input>
      <button>Log In</button>
      <button onClick={()=>setnewpage(true)}>Register</button>
    </div>:
    <Register/>
    }
      
    </div>
  );
}

export default App;
