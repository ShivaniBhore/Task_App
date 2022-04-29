import React from 'react'
import { useState , useRef} from "react";
import axios from 'axios';
import "../App.css";
import emailjs from '@emailjs/browser';
const Register = () => {
  const form = useRef();

  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [mail,setmail]=useState("")
  const [phoneno,setphoneno]=useState("")
const sendreq = (e) =>{
  e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
  emailjs.sendForm('service_f7kvy8p', 'template_bw0r2k7',form.current,'S5HhindGZYWE6Tlnt')
  .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  axios({
    method: "post",
    url: "http://localhost:3001/posts",
    data: {
      username : username,
      password : password,
      phoneno : phoneno,
      mail : mail
    },
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    
}

  return (
    <div >
      <h1> Register</h1>
      <form ref={form} onSubmit={sendreq} className='newreg'>
        <input placeholder = "username" onChange={(event)=>setusername(event.target.value)}></input>
        <input type ="password" placeholder = "password" onChange={(event)=>setpassword(event.target.value)}></input>
       
        <input placeholder = "gmail"onChange={(event)=>setmail(event.target.value)}></input>
        
        <input placeholder = "phone.no"onChange={(event)=>setphoneno(event.target.value)}></input>  
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}
 


export default Register