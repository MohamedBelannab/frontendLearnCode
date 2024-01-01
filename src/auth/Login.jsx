import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Login() {
  const [typingText, setTypingText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const targetText = '.LearnCode for your Knowledge </>';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setTypingText(targetText.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

 const handleButtonClick = async () => {
  try {
    // Check if email is provided
    if (!email) {
      setErrorMessage('Email is required');
      return;
    }

    // Check if password is required and provided
    if (showPasswordInput && !password) {
      setErrorMessage('Password is required');
      return;
    }

    const responseCheck = await axios.post('http://127.0.0.1:8000/api/check', {
      email: email,
    });

    if (responseCheck.data.message.includes('Email found')) {
      setShowPasswordInput(true);
      setErrorMessage('');

      const responseLogin = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password,
      });

      console.log('Login API Response:', responseLogin);

      if (responseLogin.data.message.includes('Invalid credentials')) {
        setErrorMessage('password requierd');

        setTimeout(() => {
          navigate('/register');
        }, 2000);
      } else {
        const user = responseLogin.data.user;
        setErrorMessage('Success');

        console.log(responseLogin.data);

        cookies.set('user', user, { path: '/' });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } else {
      setShowPasswordInput(false);
      setErrorMessage('Email not found in the database');

      setTimeout(() => {
        navigate('/register', { state: { email } });
      }, 2000);
    }
  } catch (error) {
    console.error('Error:', error);
    setErrorMessage('Invalid email or password');
  }
};
  
  
  

  return (
    <div>
      <section className="background-radial-gradient overflow-hidden" style={{ backgroundImage: 'url("your-background-image.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
        <div className="container px-4 py-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-3 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                {typingText} <br />
              </h1>
              <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)', fontSize: '19px' }}>
                We are here to help you learn programming languages and learn about the story, importance, and areas of use of each one separately, with your
                exam in each language so that you know your level. Each language is what they are.
              </p>

              <div className="d-flex justify-content-start" style={{ marginLeft: '-7px' }}>
                <i className="fab fa-facebook-square fa-2x mx-2" style={{ color: 'white' }}></i>
                <i className="fab fa-twitter-square fa-2x mx-2" style={{ color: 'white' }}></i>
                <i className="fab fa-instagram-square fa-2x mx-2" style={{ color: 'white' }}></i>
              </div>
            </div>

            <div className="col-lg-6 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5">
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="text-center">
                          <h2 style={{ color: 'black', fontSize: '25px' }}>
                            Enter your E-mail <br />
                          </h2>
                          <p style={{ color: 'blue', fontSize: '18px' }}>Continue to .learnCode</p>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example4"
                        placeholder="Enter your email"
                        className="form-control"
                        style={{ width: '90%', height: '45px', marginLeft: '20px' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {showPasswordInput && (
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3ExamplePassword"
                          placeholder="Enter your password"
                          className="form-control"
                          style={{ width: '90%', height: '45px', marginLeft: '20px' }}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    )}

                    {errorMessage && (
                      <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                        {errorMessage}
                      </div>
                    )}

                    <br />
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                      style={{ backgroundColor: 'darkviolet', width: '90%', marginLeft: '20px',color:'white' }}
                      onClick={handleButtonClick}
                    >
                      Sign up or Sign in
                    </button>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
}

export default Login;
