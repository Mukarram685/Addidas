import React, { useState } from 'react';

export default function Signup() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // Clear error message when the user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Clear error message when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      valid = false;
    }

    if (valid) {
      console.log('Form submitted');
      // Proceed with form submission logic
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}
        </div>
        <div>
        <button type="submit" className="btn btn-primary">Signin</button>
        </div>
      </form>
    </div>
  );
}
