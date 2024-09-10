import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './NewProducts.css';
import Items from '../Items/Items';
import axios from 'axios';

function NewProducts() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/newbakes/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='newproducts'>
            <div className="topic">
            <h1>OUR BEST SELLING PRODUCTS</h1>
            </div>
            <div className="collections">
                {data.map((item) => (
                    <Items
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={`http://localhost:8000/${item.image}`}
                        current_price={item.current_price}
                        size={item.size}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewProducts;
