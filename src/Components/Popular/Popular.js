// import React from 'react'
// import './popular.css'
// import Items from '../Items/Items'
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function Popular() {
//   const { id } = useParams();
//     const [data, setData] = useState([]);

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             // const response = await axios.get('http://localhost:8000/popular/');
//     //             setData(response.data);
//     //         } catch (error) {
//     //             console.error('Error fetching data:', error);
//     //         }
//     //     };

//     //     fetchData();
//     // }, [id]);
//     const productId = "popular";
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8000/cake/cakecategoryIdentifier/${productId}/`);
//           setData(response.data);
//                   } catch (error) {
//                       console.error('Error fetching data:', error);
//                   }
//       };
  
//       fetchData();
//     }, [productId]);
//   return (
//     <div className="popular">
//       <h1>OUR TOP BAKERY PRODUCTS</h1>
//       <div className="popular-item">
//         {data.map((item) => {
//             return < Items key={item.id}
//              id={item.id}
//               name={item.name} 
//               image={`http://localhost:8000/${item.image}`} 
//               current_price= {item.current_price}
//               size={item.size}/>
//         })}
//       </div>
//     </div>
//   )
//       }


   

// export default Popular

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Items from '../Items/Items';
import './popular.css';

function Popular() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cake/cakecategoryIdentifier/popular/');
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="popular">
      <h1>OUR TOP BAKERY PRODUCTS</h1>
      <div className="popular-item">
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

export default Popular;
