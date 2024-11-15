import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    let isValid = true;

    if (!formData.username) {
      setNameError('Username is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!formData.email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!formData.password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (formData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!formData.confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (isValid) {
      // Form submission logic
      console.log(formData);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required
          />
          {nameError && <div className="text-danger">{nameError}</div>}
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group"> 
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required
          />
          {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
       
      </form>
    </div>
  );
};

export default LoginForm;
