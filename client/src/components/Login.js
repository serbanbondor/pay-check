import React from 'react';

export const Login = () => {
  return (
    <div className="login-register-container">
      <p className="login-description">
        Welcome! Login in order to view your transactions.
      </p>
      <form className="login-register-form">
        <div>
          <label htmlFor="text"></label>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="amount"></label>
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn">Login</button>
      </form>
      <p className="register-hint">Dont have an account yet? Sign up now!</p>
      <button className="btn btn-register-hint">Register</button>
    </div>
  );
};
