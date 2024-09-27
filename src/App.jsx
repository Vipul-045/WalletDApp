import React, { useContext } from 'react'
import Signup from './signup';
import Wallet from './Wallet'
import { AuthContext } from './AuthContext';

function App() {
	const { isRegistered } = useContext(AuthContext);
  return (
	<div className="App">
		{isRegistered() ? <Wallet/> : <Signup/>}
	</div>
  )
}

export default App