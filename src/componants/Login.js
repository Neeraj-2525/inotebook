import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();
  const host = "http://localhost:5000"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json()
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      props.showAlert("Logged in successfully", "success")
      navigate('/home')

    }
    else {
      props.showAlert("invalid credentials", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='container login-form-container' >
      <h1 className='px-5 signUpLoginFormHeading loginHead'>Welcome back! <br /> Login to access your notes...</h1>
      <form className='container' onSubmit={handleSubmit} style={{maxWidth:'500px', margin:'0 20px'}}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input autoComplete="on" type="email" value={credentials.email} onChange={onChange} className="form-control" name='email' id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input autoComplete="on" type="password" value={credentials.password} onChange={onChange} className="form-control" name='password' id="password" />
        </div>

        <button type="submit" className="btn transparentBtn">Submit</button>
      </form>
    </div>
  )
}

export default Login
