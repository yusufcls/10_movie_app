import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };


  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src="https://picsum.photos/800/800" alt="random-img" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address please"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password please"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="link" >Forgot Password</div>

          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
          
          <button 
          className="btn btn-primary form-control"
          >
            Continue With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;