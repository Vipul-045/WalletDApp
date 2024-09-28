import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";


const login = () => {
  const {email, setEmail, password, setPassword} = useContext(AuthContext);

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8000/login', { email, password}) 
    .then(res=> console.log("Registered Successfully!!"))
    .catch(err => console.log(err))
}

  return (
    <div>
        <h3>Login Page</h3>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default login