import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() { 
  return (
    <div className='footer'>
<div className="wrapper">
<div className="links">
     <h1>Hot Links</h1>
        <NavLink to='/about'><p>About</p></NavLink>
        <NavLink to='/office'><p>Office</p></NavLink>
        <NavLink to='./faq' ><p>Cake Delivery FAQ</p></NavLink>
     </div>
      <div className="Contact">
        <h1>Contact Us</h1>
        <p>Whatsapp: +234 706 8491 018</p>
        <p>Call: 09065889487</p>
        <p>Instagram: hma_bakes_treats</p>
      </div>
      <div className="payment">
        <h1>Payment Options-Direct Transfer</h1>
        <p>Bank Name:</p>
        <p>Account Name:</p>
        <p>Account Number:</p>
      </div>
      <div className="working-hours">
        <h1>Working Hours</h1>
        <p>Monday-Friday: 8:30AM-6PM</p>
        <p>Saturday: 9AM-6PM</p>
        <p>Sunday:1PM-6PM</p>
      </div>
</div>
      <div className="footer-copy">
        <p>Copyright &copy; &nbsp;Hma_bakes_treats in Lagos</p>
      </div>
   
    </div>

  )
}

export default Footer