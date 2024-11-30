import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UserManagement.css';

const UserManagement = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); 

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "test@test.com" && password === "test1234") {
      navigate('/dashboard'); 
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid email or password.'); 
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setErrorMessage('All fields are required.');
      return;
    }
    console.log(`Signing up as ${role} with email: ${email}`);
    setErrorMessage('');
    alert(`Account created successfully as ${role}`);
  };

  return (
    <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <input 
            type="text" 
            placeholder="Name" 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            required
          >
            <option value="" disabled>Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={handleSignIn}>
          <h1>Sign in</h1>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setRightPanelActive(false)} id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={() => setRightPanelActive(true)} id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
