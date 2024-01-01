import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../home/layouts/Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Register = () => {
  const location = useLocation();
  const email = location.state?.email || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDay: '',
    email_verified_at: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
      setSuccessMessage('Registration successful. Your account has been created.');
      setErrors({});
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.errors;
        setErrors(validationErrors);
      } else {
        setErrors({ general: 'An error occurred. Please try again.' });
      }
      setSuccessMessage('');
    }
  };

  return (
    <div >
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Register</h2>
          {successMessage ? (
          <div>  <p className="text-green-500 mb-4">{successMessage} <i class="fa-solid fa-check"></i></p>
          <button                   className="bg-purple-600 text-white py-2 px-5 rounded hover:bg-purple-400 transition duration-300"
          ><Link to="/login">Go to sign in</Link></button></div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-xl font-semibold text-gray-800 mb-2">Welcome to our platform!</p>
                <p className="text-gray-600">
                  We are excited to have you. Please fill out the registration form below.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={email}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter a valid email address"
                    className={`w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    title="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character"
                    className={`w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="birthDay" className="block text-sm font-semibold text-gray-600">
                    BirthDay
                  </label>
                  <input
                    type="date"
                    id="birthDay"
                    name="birthDay"
                    value={formData.birthDay}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300 ${
                      errors.birthDay ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.birthDay && <p className="text-red-500 mt-1">{errors.birthDay}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-12 rounded hover:bg-purple-400 transition duration-300"
                >
                  Register
                </button>
                {errors.general && <p className="text-red-500 mt-4">{errors.general}</p>}

           
              </form>
            </>
          )}
        </div>
      </div>
   
    </div>

    </div>
  );
};

export default Register;
