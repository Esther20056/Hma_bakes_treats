import React from 'react'
// import {useContext} from 'react'
import  './Style.css/HomeCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'
// import { HomeContexts } from '../Contexts/HomeContexts'
import { useEffect, useState } from 'react'
import axios from 'axios'

function HomeCategory(props) {
  // const {all_products} = useContext(HomeContexts)
  const [categoryProducts, setCategoryProducts] = useState([]);   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/cake/category/${props.category}`);
         setCategoryProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
      };

    fetchData();
}, [props.category]);
  return (
    <div className='home-category'>
      <img id='banner-img' src={props.banner} alt="" />
      <div className="HomeCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 13 items
        </p>
        <div className="HomeCategory-sort">
          sort by <img style={{width: '10%', marginBottom: '-0.5rem' }} src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="Homecategory-items">
          {categoryProducts.map((items,i) =>{
               return<Items key={i} id={items.id} name={items.name} image={`http://localhost:8000/${items.image}`} current_price= {items.current_price} size={items.size}/>
          })}
      </div>
        <div className="HomeCategory-Loadmore">
          Explore More
        </div>
    </div>
  )
}

export default HomeCategory