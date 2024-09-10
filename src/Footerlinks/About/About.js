import React from 'react'
import './About.css'

function About () {
  return (
    <div className='about'>
     <h2>FAQ'S/CAKE CARE INSTRUCTIONS</h2>
     <p>We have included answers to some of the most commonly asked questions below. If you look through this 
      information and still have questions for us, just send us a WhatsApp message</p>
      <h3>HOW TO PLACE AN ORDER ON www.bakes_and_treats.com</h3>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
          What are the modes of placing an order with
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            Following are the ways in which you can place an order with us.
            <ul>
              <li><p>You can log on to www.bakes_and_treats.com from your mobile and desktop. Have Fun Shopping!</p></li>
              <li><p>You can call or whatsapp us +2348090566920  (24 hours online service) and we will be more than happy to assist you in placing your order.</p></li>
            </ul>
            </div>
          </div>
        </div>
        
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
          What are the modes of placing an order with
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            We would require the following information from you –
            {/* What information is required from my end to submit the order? */}
            <ul>
              <li><p>Recipient’s name</p></li>
              <li>Complete delivery address, along with optional landmark description</li>
              <li><p>Contact number(s) of the recipient</p></li>
              <li><p>Date of delivery</p></li>
              <li><p>Type of Residence Address e.g. Residence, Office</p></li>
               <li><p>Optional complimentary message to be attached to the order</p></li>
               <li><p>Delivering zone</p></li>
               <li><p>Billing information</p></li>
            </ul>
            </div>
          </div>
        </div>
        
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
             How do I find different types of products?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse show"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>To make shopping easy and hassle-free for you, we have categorised our products in different categories. You have the option to choose products from categories like Same Day Cakes,  Cupcakes and Gifts. You can also choose products based on an occasion. Happy shopping!</p>
            </div>
          </div>
        </div>
        
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Can I get a product customized?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              This is the first item's accordion body.
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default About 