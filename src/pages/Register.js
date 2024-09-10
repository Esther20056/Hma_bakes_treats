import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Style.css/Register.css'
import axios from 'axios'

//THIS IS A LOGIN FORM

function Register() {
  const navigate = useNavigate()
  async function handleLogin(e) {
    e.preventDefault();

    let form = new FormData(e.currentTarget);
      await axios.post("http://localhost:8000/login/", form)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          alert('Login successful');
          navigate("/")
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err?.response?.data === "Invalid informations provided") {
            alert("Invalid informations");
          } else {
            for (let field in err?.response?.data) {
              alert(`${field}: ${err?.response?.data[field]}`);
            }
          }
        })
  }
  return (
    <div className='register'>
      <form id='red' onSubmit={(e) => handleLogin(e)}>
        <div className="login">
          <div>
            <label htmlFor="email">EMAIL :</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">PASSCODE :</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type='submit' id='reg'>Login</button>
          <div className="signin">
            <p>Don't have an accout?</p>
            <Link to='/register'><p>Sign Up</p></Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register



