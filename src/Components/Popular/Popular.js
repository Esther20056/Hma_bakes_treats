import React from 'react'
import './popular.css'
import Items from '../Items/Items'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Popular() {
  const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/popular/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

  return (
    <div className="popular">
      <h1>OUR TOP BAKERY PRODUCTS</h1>
      <div className="popular-item">
        {data.map((item) => {
            return < Items key={item.id}
             id={item.id}
              name={item.name} 
              image={`http://localhost:8000/${item.image}`} 
              current_price= {item.current_price}
              size={item.size}/>
        })}
      </div>
    </div>
  )
      }


   

export default Popular