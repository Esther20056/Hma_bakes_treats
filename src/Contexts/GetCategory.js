// import axios from 'axios';

// const BASE_URL = 'http://localhost:3001'; 

// const api = axios.create({
//     baseURL: BASE_URL,
// });

// export const getProductByCategory = async (category) => {
//     try {
//         const response = await api.get(`http://localhost:8000/cake/category/${category}/`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         throw error;
//     }
// };


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProductByCategory } from './GetProductCategory'; // Adjust the path to your actual file


// const HomeCategory = () => {
//     const { category } = useParams(); 
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const data = await getProductByCategory(category);
//                 setProducts(data);
//             } catch (error) {
//                 setError('Failed to fetch products');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [category]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div>
//             <h1>{category} Products</h1>
//             <div>
//                 {products.map(product => (
//                     <div key={product.id}>
//                         <h2>{product.name}</h2>
//                         <p>{product.description}</p>
//                         <img src={`http://localhost:8000${product?.image}`} alt={product?.name} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HomeCategory;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../path/to/apiService'; // Adjust the import path accordingly

const HomeCategory = () => {
    const { category } = useParams(); 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
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
