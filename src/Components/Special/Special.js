import React from 'react';
import wed from '../Assets/wed.jpg';
import deliver from '../Assets/deliver.png';
import Ingredients from '../Assets/Ingredients.webp';
import './Special.css';
import './SpecialMedia.css';

function Special() {
  return (
    <div className='special'>
      <div className="special-a">
        <img src={wed} alt="Wedding Event" />
        <h3>Events</h3>
         <p>
          Let us help make your special event
          even more special with our unique
          cakes, and pastries,
          customizable to match your
          colors and event theme.
        </p>
      </div>

      <div className="special-b">
        <img src={deliver} alt="Fast Delivery" />
        <h3>Fast Delivery</h3>
           <p>
          We are very swift and we deliver
          freshly made products to
          every customer on time.
        </p>
      </div>

      <div className="special-c">
        <img src={Ingredients} alt="Fresh Ingredients" />
        <h3>Fresh Ingredients</h3>
           <p>
          Fresh ingredients are the lifeblood of any
          confectionery. When browsing
           through our delightful assortment
           of confectionery treats, you can rest
          assured that we prioritize quality
          by sourcing only the freshest ingredients.
        </p>
      </div>
    </div>
  );
}

export default Special;
