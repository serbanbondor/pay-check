import React from 'react';

export const Register = () => {
  return (
    <div className="login-register-container">
      <p className="register-description">
        Join us now! It's easy and free to sign up.
      </p>
      <form className="login-register-form">
        <div>
          <label htmlFor="text"></label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="text"></label>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="amount"></label>
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn btn-register-hint">Register</button>
      </form>
      <p className="register-hint link">Forgot your password?</p>
      <button className="btn btn-register-hint">Back to login</button>
    </div>
  );
};
