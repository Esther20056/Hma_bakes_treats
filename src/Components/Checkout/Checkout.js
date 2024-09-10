import React from 'react'

function Checkout() {
  return (
    <div className='checkout'>
      <form className="checkout-container">
        <div id='check'>
          <h1>Shipping Details</h1>
          <div>
            <div id='2'>
              <label htmlFor="name">First name :</label>
              <input type="text" id='first-name' />
            </div>
            <div id='3'>
              <label htmlFor="name">Last name :</label>
              <input type="text" id='first-name' />
            </div>
          </div>

          <div>
            <label htmlFor="number">Recipient Phone Number :</label>
            <input type="text" id='phone' />
          </div>

          <div>
            <label htmlFor="state">State :</label>
            <input type="text" id='state' />
          </div>
          <div>
            <label htmlFor="location">Location :</label>
            <input type="text" id='location' placeholder='e.g Ikeja,Ikoyi ' />
          </div>
        </div>

        <div>
          <label htmlFor="address">Home Address :</label>
          <input type="text" id='address ' />
        </div>

        <div>
          <label htmlFor="purpose">Purpose of ordering :</label>
          <input type="text" id='purpose ' />
        </div>
        
        <div>
          <label htmlFor="date">Delivery Date :</label>
          <input type="text" id='date ' />
        </div>


      </form >
    </div >
  )
}

export default Checkout