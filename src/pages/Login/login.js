
import React, { useState } from "react";
import './login.css' 
import Navbar from '../../components/Navbar.js';
// This import should probably be changed, getting error but it seemingly works fine 

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // You can add your authentication logic here
      if (username === "" || password === "") {
        setError("Please fill in both fields.");
      } else {
        setError("");
        // Example: send data to server for authentication
        console.log({ username, password });
  
        // Reset form
        setUsername("");
        setPassword("");
      }
    };


    return (
      <div>
        <Navbar />
        <div className="login-form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      );
    };


export default Login;