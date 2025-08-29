import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
  };

  return (

    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
     <p>
  New User?{" "}
  <Link to="/register" className="login-link-btn">Sign up</Link>
</p>


    </div>
  );
};

export default Login;
