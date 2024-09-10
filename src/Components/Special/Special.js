import React from 'react'
import wed from '../Assets/wed.jpg'
import deliver from '../Assets/deliver.png'
import Cocktail from '../Assets/Cocktail.jpg'
import './Special.css'
import './SpecialMedia.css'

function special() {
  return (
    <div className='special'>
        <div className="special-a">
            <img src={wed} alt="" />
            <h3>Events </h3>
            {/* <hr/> */}
            <p>Let us help make your special event<br/>even more special with our unique<br/>
            cakes,cocktails and pastries,<br/> customizable to match your<br/>colors and event theme .</p>
        </div>

        <div className="special-b">
            <img src={deliver} alt="" />
            <h3>Fast Delivery</h3>
            <p>We are very swift and we deliver<br/> freshly made products to<br/> every customer on time.</p>
        </div>
        <div className="special-c">
            <img src={Cocktail} alt="" />
            <h3>Fresh &nbsp;Ingredients</h3>
            <p>Fresh ingredients are lifeblood of any<br/> confectionery and cocktail creation.<br/> 
            When browsing through our delightful<br/> assortment of confectionery and cocktail treats,<br/> 
            you can rest assured that we prioritize quality by<br/> sourcing only the freshest ingredients.</p>
              
        </div>
    </div>
  )
}

export default special