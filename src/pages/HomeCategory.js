// import React from 'react'
// // import {useContext} from 'react'
// import  './Style.css/HomeCategory.css'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Items from '../Components/Items/Items'
// // import { HomeContexts } from '../Contexts/HomeContexts'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function HomeCategory(props) {
//   // const {all_products} = useContext(HomeContexts)
//   const [categoryProducts, setCategoryProducts] = useState([]);   
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/cake/category/${props.category}`);
//          setCategoryProducts(response.data);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
//       };

//     fetchData();
// }, [props.category]);
//   return (
//     <div className='home-category'>
//       <img id='banner-img' src={props.banner} alt="" />
//       <div className="HomeCategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 13 items
//         </p>
//         <div className="HomeCategory-sort">
//           sort by <img style={{width: '10%', marginBottom: '-0.5rem' }} src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       <div className="Homecategory-items">
//           {categoryProducts.map((items,i) =>{
//                return<Items key={i} id={items.id} name={items.name} image={`http://localhost:8000/${items.image}`} current_price= {items.current_price} size={items.size}/>
//           })}
//       </div>
//         <div className="HomeCategory-Loadmore">
//           Explore More
//         </div>
//     </div>
//   )
// }

// export default HomeCategory

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../Contexts/GetProductCategory'; 

const HomeCategory = () => {
    const { category } = useParams(); 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!category) {
                setError('Category is missing');
                setLoading(false);
                return;
            }

            try {
                const data = await getProductByCategory(category);
                setProducts(data);
            } catch (error) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{category} Products</h1>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <img src={`http://localhost:8000${product?.image}`} alt={product?.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCategory;
