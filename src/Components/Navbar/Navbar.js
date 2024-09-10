import React, { useContext, useState } from 'react'
import './Navbar.css'
import Hma from '../Assets/Hma.png'
import carto from '../Assets/carto.png'
import { NavLink, Link } from 'react-router-dom'
import { HomeContexts } from '../../Contexts/HomeContexts'

function Navbar() {
    const [menu, setMenu] = useState("");
    const {getTotalCartItems} = useContext(HomeContexts);
    const [barsOpen, setBarsOpen] = useState(false)

  return (
      <div className='navbar'>
       <div className="nav-cupcake">
          <img src={Hma} alt="" />
        </div>
         <div className="hamburger" onClick={() =>{
          setBarsOpen(!barsOpen);
         }}>
          <span></span>
          <span></span>
          <span></span>
         </div>
   <div className="wrapper">
        <ul id='nav-menu'className={barsOpen ? 'open' : ""}>
          <li onClick={() =>{setMenu("home")}}><NavLink to='/'>Home</NavLink>{menu==="home"?<hr/>:<></>}</li>
          <li><div className="dropdown">
    <button
      className="btn border border-0  dropdown-toggle"
      type="button"
      id="triggerId"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
     Occasion
    </button>
    <div className="dropdown-menu" aria-labelledby="triggerId">
      <li><NavLink to='/birthday'>Birthday</NavLink></li>
        <li><NavLink to ='/wedding'>Wedding</NavLink></li>
        <li><NavLink to ='/val'>Valentine</NavLink></li>
        <li><NavLink to ='/father'>Father's Day</NavLink></li>
        <li><NavLink to ='/mother'>Mother's Day</NavLink></li>
        <li><NavLink to ='/anniversary'>Anniversary</NavLink></li>
    </div>
   </div>
   </li>
          <li onClick={() =>{setMenu("cupcakes")}}><NavLink to='/cocktail'>CupCakes</NavLink>{menu==="cupcakes"?<hr/>:<></>}</li>
          <li onClick={() =>{setMenu("pastries")}}><NavLink to='/pastries'>Pastries</NavLink>{menu==="pastries"?<hr/>:<></>}</li>         
          <li onClick={() =>{setMenu("sameday")}}><NavLink to='/sameday'>Same day&nbsp;Cakes</NavLink>{menu==="sameday"?<hr/>:<></>}</li>
          <li onClick={() =>{setMenu("gifts")}}><NavLink to ='/gifts'>Gifts</NavLink>{menu==="gifts"?<hr/>:<></>}</li>
         {/* <li><Link style={{textDecoration: "none"}} to='/register'>Login</Link></li> */}
          <li onClick={() =>{setMenu("login")}}><Link to='/login'>Register</Link>{menu==="login"?<hr/>:<></>}</li>
           <li><Link className='cart' to ='/cart'><img src={carto} alt="" /></Link></li>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </ul>
   </div>
   
      </div>
  )
}

export default Navbar