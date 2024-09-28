import React, { useContext } from 'react'
import Signup from './signup';
import Login from './login';
import Wallet from './Wallet'
import { AuthContext } from './AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	const { isAuthenticated  } = useContext(AuthContext);
  return (
	<Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Wallet /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App