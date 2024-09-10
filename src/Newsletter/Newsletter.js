import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
           <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>

      <form>
        <div id='form'>
        <input type="email"placeholder='Your Email' />
        <button>Suscribe</button>
        </div>
      </form>
    </div>
  )
}

export default Newsletter