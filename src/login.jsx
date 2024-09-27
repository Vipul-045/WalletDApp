import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Signup from "./signup";

const login = () => {
  const {email, setEmail, password, setPassword} = useContext(AuthContext);

  return (
    <div>
        <h3>Login Page</h3>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button>Login</button>
    </div>
  )
}

export default login