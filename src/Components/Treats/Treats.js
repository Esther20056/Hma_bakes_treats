import React, { useEffect, useRef } from 'react'
import './Treats.css'
import PurpleBanner from '../Assets/PurpleBanner.png'
import GreenBanner from '../Assets/GreenBanner.png'
import WhiteBanner from '../Assets/WhiteBanner.png'

function Treats() {
  return (
    <div className='treats'>
      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators list-unstyled ">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="First slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="1"
            aria-label="Second slide"
          ></li>
           <li
            data-bs-target="#carouselId"
            data-bs-slide-to="2"
            aria-label="Third slide"
          ></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active slide-one">
            <img
              src={PurpleBanner}
              alt="First slide"
            />
            <div className="carousel-boby">
              <div className="treats-b">
                {/* <h3>Exquisite treats <br /> and special gifts available</h3> */}
                {/* <h3>Sweet sensations, expertly crafted in Lagos.</h3> */}
                <h3>Sweet sensations <br /> crafted in Lagos</h3>
                <button className="treats-b-btn">Shop now</button>
              </div>
            </div>
          </div>
          <div class="carousel-item slide-two">
            <img
              src={GreenBanner}
              alt="Second slide"
            />
            <div className="carousel-boby">
              <div className="treats-b">
                <h3>Unforgettable sweetness <br/>you'll keep craving for</h3>
                <button className="treats-b-btn">Shop now</button>
              </div>
              </div>
          </div>    
          <div class="carousel-item slide-two">
            <img
              src={WhiteBanner}
              alt="Third slide"
            />
            <div className="carousel-boby">
              <div className="treats-b">
                <h3>Hma Bakes & Treats <br /> Stunning flowers and gifts.</h3>
                <button className="treats-b-btn">Shop now</button>
              </div>
              </div>
          </div> 
            </div>
            <button
              class="carousel-control-prev slide-btn"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next slide-btn"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        )
}

        export default Treats