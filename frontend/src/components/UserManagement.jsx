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

  // Use the environment variable for the API URL
  const apiUrl = process.env.REACT_APP_API_URL;

  // Sign In Handler
  const handleSignIn = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}/users/${email}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid email or password');
        }
        return response.json();
      })
      .then(userData => {
        if (userData.password === password) {
          navigate('/dashboard');
          setErrorMessage('');
        } else {
          setErrorMessage('Invalid email or password');
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  // Sign Up Handler
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setErrorMessage('All fields are required.');
      return;
    }

    const newUser = {
      email: email,
      password: password,
      role: role,
    };

    fetch(`${apiUrl}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create account');
        }
        return response.json();
      })
      .then(userData => {
        alert(`Account created successfully as ${role}`);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
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
