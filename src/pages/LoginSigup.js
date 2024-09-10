import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Style.css/LoginSignup.css'
import axios from 'axios'
function LoginSigup() {
  async function handleSubmit(w) {
    w.preventDefault()

    let form = new FormData(w.currentTarget)

    await axios.post("http://localhost:8000/signup/", form)
    .then((res) => {
      alert("account created successfully")
    })
      .catch((err) => {
       for(let i in err?.response?.data){
        alert(i + "" + err?.response?.data[i])
       }
      })
  
  }
  
  return (
    <div className='loginsignup'>
      <form id="Signup" onSubmit={(w) => handleSubmit(w)}>
        <div className="loginsignup-container">
           <div>
            <label htmlFor="username">USERNAME :</label>
            <input name='username' id='username' type="text" />
           </div>

           <div >
            <label htmlFor="email">EMAIL :</label>
            <input name='email' id='email' type="email"  />
           </div>

           <div>
           <label htmlFor="password">PASSWORD :</label>
          <input name='password' id='password' type="password" />
           </div>

         <div>
          <label htmlFor="phone">PHONE :</label>
          <input name='phone' id='phone' type="number"/>
         </div>
           <button type='submit' id="btn-one">Sign Up</button>
           <div className="signin">
              <p>Already have an accout?</p>
              <Link to='/register'><p>Sign In</p></Link>
           </div>
        </div>
     </form> 
    </div >    
    
  )
}

export default LoginSigup