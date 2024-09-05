import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/login', values);
      console.log(response);
      localStorage.setItem('token', response.data.id);
      navigate('/')
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={e => setValues({ ...values, email: e.target.value })}
            type='email'
            placeholder='Enter your email'
            name='email'
            value={values.email}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={e => setValues({ ...values, password: e.target.value })}
            type='password'
            placeholder='Enter your password'
            name='password'
            value={values.password}
            required
          />
        </div>

        <button className='login btn' type='submit'>Log in</button>
        <Link className='create-account' to="/signup">Create Account</Link>
      </form>
    </div>
  );
}

export default Login;
