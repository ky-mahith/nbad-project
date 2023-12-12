import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.scss'


const LoginPage = (props) => {
  const history=useNavigate()
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

  
    axios
    .post('http://142.93.116.20:3002/login', formData)
    .then((response) => {
      setSuccessMessage(response.data.message);
      if(response.data.user) {
        localStorage.setItem('userId', (response.data.user._id.toString()));
       
      }
      localStorage.setItem('token',(response.data.token))
      login();
      setIsLoggedIn(true);
      props.callBack(true);
      history('/')
    })
    .catch((error) => {
      setError('');
      setSuccessMessage('Invalid username or password');
    })
  };



  return (
    <section className="login-page">
      <section className="login-form-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </section>
    </section>
  );
};

export default LoginPage;