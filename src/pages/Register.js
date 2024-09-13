// import React from 'react'
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import './Style.css/Register.css'
// import axios from 'axios'

// //THIS IS A LOGIN FORM

// function Register() {
//   const navigate = useNavigate()
//   async function handleLogin(e) {
//     e.preventDefault();

//     let form = new FormData(e.currentTarget);
//       await axios.post("http://localhost:8000/login/", form)
//         .then((res) => {
//           localStorage.setItem("user", JSON.stringify(res.data));
//           alert('Login successful');
//           navigate("/")
//         })
//         .catch((err) => {
//           console.log(err.response.data);
//           if (err?.response?.data === "Invalid informations provided") {
//             alert("Invalid informations");
//           } else {
//             for (let field in err?.response?.data) {
//               alert(`${field}: ${err?.response?.data[field]}`);
//             }
//           }
//         })
//   }
//   return (
//     <div className='register'>
//       <form id='red' onSubmit={(e) => handleLogin(e)}>
//         <div className="login">
//           <div>
//             <label htmlFor="email">EMAIL :</label>
//             <input type="email" id="email" name="email" />
//           </div>
//           <div>
//             <label htmlFor="password">PASSCODE :</label>
//             <input type="password" id="password" name="password" />
//           </div>
//           <button type='submit' id='reg'>Login</button>
//           <div className="signin">
//             <p>Don't have an accout?</p>
//             <Link to='/register'><p>Sign Up</p></Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Register

import React, { useState } from 'react';
import './Style.css/Register.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
//THIS IS A LOGIN FORM

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:8000/login/', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      Swal.fire({
        title: 'Success!',
        text: 'Login successful',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate("/");
      });
    } catch (err) {
      let errorMessage = 'Something went wrong. Please try again.';
      if (err.response && err.response.data) {
        const errorResponse = err.response.data;
        errorMessage = errorResponse.non_field_errors ? errorResponse.non_field_errors[0] : errorMessage;
      } else if (!err.response) {
        errorMessage = 'Network Error: Failed to connect to the server.';
      }

      setError(errorMessage);
      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className='register'>
      <form className='form' id='red' onSubmit={handleLogin}>
        <div>
          <label htmlFor='email'>Your Email Address:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Your Password:</label>
          <div className='password-container'>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
              aria-describedby='passwordHelp'
            />
            <button
              type='button'
              className='password-visibility-toggle'
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        {error && <div className='error-message'>{error}</div>}
        <button id='reg' type='submit'>
          Login
        </button>
        <div className="signin">
            <p>Don't have an accout?</p>
            <Link to='/register'><p>Sign Up</p></Link>
          </div>
      </form>
    </div>
  );
}

export default Register;




