import {React, useContext} from 'react'
import { AuthContext } from './AuthContext'
import axios from 'axios';


const signup = () => {
    const {username, setUsername, email, setEmail, password, setPassword} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8000/register', {username, email, password}) 
        .then(res=> console.log("Registered Successfully!!"))
        .catch(err => console.log(err))
    }

    return (
      <div>
          <h3>Ragistration Page</h3>
          <input type="text" placeholder='Enter Usernaame' value={username} onChange={(e)=>setUsername(e.target.value)} />
          <br />
          <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <button onClick={handleSubmit}>Ragister User</button>
      </div>
    )
  }

export default signup