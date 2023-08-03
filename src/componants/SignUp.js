import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
  let navigate = useNavigate();
  const host = "http://localhost:5000"

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { name, email, password } = credentials
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });

    const json = await response.json()
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      props.showAlert("Account Created successfully", "success")
      navigate('/home')

    }
    else {
      props.showAlert("Something went wrong", "warning")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='container signUp-form-container'>
      <h1 className='px-5 signUpLoginFormHeading signUpHead'>Create A New Account!</h1>
      <form className='container' onSubmit={handleSubmit} style={{maxWidth:'500px', margin:'0 20px'}}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input autoComplete="on" type="text" onChange={onChange} className="form-control" name='name' id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input autoComplete="on" type="email" required onChange={onChange} className="form-control" name='email' id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input autoComplete="on" type="password" required minLength={5} onChange={onChange} className="form-control" name='password' id="password" />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">Confirm Password</label>
          <input type="Password" className="form-control" name='cPassword' id="cPassword" />
        </div> */}
        <button type="submit" onChange={onChange} className="btn transparentBtn">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
