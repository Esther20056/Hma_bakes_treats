import React, { useEffect, useRef } from 'react'
import './Treats.css'
import firstSlide from '../Assets/firstSlide.png'
import secondSlide from '../Assets/secondSlide.png'

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
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active slide-one">
            <img
              src={firstSlide}
              alt="First slide"
            />
            <div className="carousel-boby">
              <div className="treats-b">
                <h2>Confectionery shop</h2>
                <h3>Sameday cake and pastries <br />delivery in Lagos </h3>
                <button className="treats-b-btn">Shop now</button>
              </div>
            </div>
          </div>
          <div class="carousel-item slide-two">
            <img
              src={secondSlide}
              alt="Second slide"
            />
            <div className="carousel-boby">
              <div className="treats-b">
                <h3>Unforgettable sweetness <br />you'll keep craving for</h3>
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