// import React, { useContext } from 'react'
// import './Display.css'
// import { HomeContexts } from '../../Contexts/HomeContexts'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// function Display() {
//     const { id } = useParams()
//     const { addToCart } = useContext(HomeContexts)
//     const [product, setProduct] = useState(null);
//     const [formData, setFormData] = useState([]);

//     const fetchProducts = async (name) => {
//         try {
//             const response = await axios.get('http://localhost:8000/details/' + id);          
//             setProduct(response.data);
            
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };


//     useEffect(() => {
//         fetchProducts();
//     }, []);


//     return (
//         <div className='display'>          
//             <div className='main-display'>
//                 <div className="display-one">
//                     <div className="display-img-list">
//                     <img src={`http://localhost:8000${product?.image}`} alt="" />
//                     <img src={`http://localhost:8000${product?.image}`} alt="" />
//                     </div>
//                     <div className="display-img">
//                         <img src={`http://localhost:8000${product?.image}`} alt="" />
//                     </div>
//                 </div>

//                 <div className="display-two">
//                     <h1>{product?.name}</h1>
//                     <div className="display-one-current-price">#{product?.current_price}</div>
//                     <div className="display-description">
//                         {product?.description}
//                     </div>
//                     <h5 className='layers_description'>{product?.layers_display}</h5>
//                     {/* <form id="display-size" onSubmit={handleFormSubmit}> */}
//                     <form className='form' id={`display-form-${product?.id}`}>
//                         <div id="display-one-size">
//                             <label htmlFor="select size">Select size</label>
//                             <input type="text" id='size' placeholder='10 inches or more' />
//                         </div>
//                         <div id="display-one-layers">
//                             <label htmlFor="select layers">Select layers</label>
//                             <select name="" className="layers">
//                                 <option value="50000">single</option>
//                                 <option value="50000">2layers</option>
//                                 <option value="50000">3layers</option>
//                             </select>
//                         </div>
//                         <div id="display-one-messagee">
//                             <label htmlFor="message on cake topper">Message on cake topper</label>
//                             <input type="text" id='message' placeholder='e.g Happy birthday, Congratulations' />
//                         </div>
//                         <div id="recievers-location">
//                             <label htmlFor="reciever's address and contact">Reciever's address and contact</label>
//                             <input type="text" id='location' placeholder="Enter reciever's address and phone number" />
//                         </div>
//                         <button type='submit' onClick={() => { addToCart(product?.id) }}>Add to cart</button>
//                         {/* <button type='submit'>Add to cart</button> */}
//                     </form>
//                     <p className='display-one-category'><span>Category:</span> {product?.category}, {product?.name}</p>
//                     <p className='display-two-category'><span>Flavour:</span> {product?.flavour}</p>


//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Display


// import React, { useContext, useState, useEffect } from 'react';
// import './Display.css';
// import { HomeContexts } from '../../Contexts/HomeContexts';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Display() {
//     const { id } = useParams();
//     const { addToCart } = useContext(HomeContexts);
//     const [product, setProduct] = useState(null);

//     const fetchProduct = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8000/details/${id}`);
//             setProduct(response.data);
//         } catch (error) {
//             console.error('Error fetching product:', error);
//         }
//     };

//     useEffect(() => {
//         fetchProduct();
//     }, [id]);

//     if (!product) return <div>Loading...</div>;

//     return (
//         <div className='display'>
//             <div className='main-display'>
//                 <div className="display-one">
//                     <div className="display-img-list">
//                         <img src={`http://localhost:8000${product?.image}`} alt={product?.name} />
//                         <img src={`http://localhost:8000${product?.image}`} alt={product?.name} />
//                     </div>
//                     <div className="display-img">
//                         <img src={`http://localhost:8000${product?.image}`} alt={product?.name} />
//                     </div>
//                 </div>

//                 <div className="display-two">
//                     <h1>{product?.name}</h1>
//                     <div className="display-one-current-price">#{product?.current_price}</div>
//                     <div className="display-description">
//                         {product?.description}
//                     </div>

//                     {/* Conditional rendering for cakes */}
//                     {product?.category === 'birthday, wedding' && (
//                         <>
//                             <h5 className='layers_description'>{product?.layers_display}</h5>
//                             <form className='form' id={`display-form-${product?.id}`}>
//                                 <div id="display-one-size">
//                                     <label htmlFor="size">Select size</label>
//                                     <input type="text" id='size' placeholder='10 inches or more' />
//                                 </div>
//                                 <div id="display-one-layers">
//                                     <label htmlFor="layers">Select layers</label>
//                                     <select name="layers" className="layers">
//                                         <option value="50000">single</option>
//                                         <option value="50000">2 layers</option>
//                                         <option value="50000">3 layers</option>
//                                     </select>
//                                 </div>
//                                 <div id="display-one-messagee">
//                                     <label htmlFor="message">Message on cake topper</label>
//                                     <input type="text" id='message' placeholder='e.g. Happy birthday, Congratulations' />
//                                 </div>
//                                 <div id="recievers-location">
//                                     <label htmlFor="location">Receiver's address and contact</label>
//                                     <input type="text" id='location' placeholder="Enter receiver's address and phone number" />
//                                 </div>
//                                 <button type='button' onClick={() => addToCart(product?.id)}>Add to cart</button>
//                             </form>
//                         </>
//                     )}

//                     <p className='display-one-category'><span>Category:</span> {product?.category}, {product?.name}</p>
//                     <p className='display-two-category'><span>Flavour:</span> {product?.flavour}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Display;



import React, { useContext, useState, useEffect } from 'react';
import './Display.css';
import { HomeContexts } from '../../Contexts/HomeContexts';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Display() {
    const { id } = useParams();
    const { addToCart } = useContext(HomeContexts);
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        size: '',
        layers: '50000', // Default value for layers
        message: '',
        location: ''
    });
    const navigate = useNavigate();  

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/details/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    useEffect(() => {
        if (product) {
            if (product.category === 'pastries' || product.category === 'gifts') {
                navigate(`/another-page/${product.id}`);  // Change the route to your desired page
            }
        }
    }, [product, navigate]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Include any additional logic here, e.g., validating form data
        // Example: adding the product to the cart with additional form data
        addToCart(product.id, formData);
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className='display'>
            <div className='main-display'>
                <div className="display-one">
                    <div className="display-img-list">
                        <img src={`http://localhost:8000${product?.image}`} alt={product?.name} />
                        <img src={`http://localhost:8000${product?.image}`} alt={product?.name} />
                    </div>
                    <div className="display-img">
                        <img src={`http://localhost:8000${product?.image}`} alt={product?.name} />
                    </div>
                </div>

                <div className="display-two">
                    <h1>{product?.name}</h1>
                    <div className="display-one-current-price">#{product?.current_price}</div>
                    <div className="display-description">
                        {product?.description}
                    </div>

                    {/* Conditional rendering for cakes */}
                    {product?.category === 'birthday' || product?.category === 'wedding' ? (
                        <>
                            <h5 className='layers_description'>{product?.layers_display}</h5>
                            <form className='form' id={`display-form-${product?.id}`} onSubmit={handleFormSubmit}>
                                <div id="display-one-size">
                                    <label htmlFor="size">Select size</label>
                                    <input type="text" id='size' placeholder='10 inches or more' value={formData.size} onChange={handleInputChange} />
                                </div>
                                <div id="display-one-layers">
                                    <label htmlFor="layers">Select layers</label>
                                    <select id="layers" className="layers" value={formData.layers} onChange={handleInputChange}>
                                        <option value="50000">Single</option>
                                        <option value="100000">2 layers</option>
                                        <option value="150000">3 layers</option>
                                    </select>
                                </div>
                                <div id="display-one-messagee">
                                    <label htmlFor="message">Message on cake topper</label>
                                    <input type="text" id='message' placeholder='e.g. Happy birthday, Congratulations' value={formData.message} onChange={handleInputChange} />
                                </div>
                                <div id="recievers-location">
                                    <label htmlFor="location">Receiver's address and contact</label>
                                    <input type="text" id='location' placeholder="Enter receiver's address and phone number" value={formData.location} onChange={handleInputChange} />
                                </div>
                                <button type='submit'>Add to cart</button>
                            </form>
                        </>
                    ) : (
                        <p>Additional information or functionality for {product?.category} products can be added here.</p>
                    )}

                    <p className='display-one-category'><span>Category:</span> {product?.category}, {product?.name}</p>
                    <p className='display-two-category'><span>Flavour:</span> {product?.flavour}</p>
                </div>
            </div>
        </div>
    );
}

export default Display;
