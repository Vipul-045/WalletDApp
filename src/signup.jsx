import {React, useContext} from 'react'
import { AuthContext } from './AuthContext'


const signup = () => {
    const {username, setUsername, email, setEmail, password, setPassword} = useContext(AuthContext);
    
    return (
      <div>
          <h3>Ragistration Page</h3>
          <input type="text" placeholder='Enter Usernaame' value={username} onChange={(e)=>setUsername(e.target.value)} />
          <br />
          <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <button>Ragister User</button>
      </div>
    )
  }

export default signup