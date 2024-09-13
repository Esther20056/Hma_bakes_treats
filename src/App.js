// import React from 'react';
// import './App.css'
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import LoginSignup from './pages/LoginSigup'
// import Cart from './pages/Cart';
// import Product from './Components/Display/Display';
// import HomeCategory from './pages/HomeCategory';
// import Register from './pages/Register';
// import Footer from './Components/Footer/Footer';
// import About from './Footerlinks/About/About';
// import Office from './Footerlinks/Office/Office';
// import Wedding_banner from '../src/Components/Assets/Wedding_banner.png'
// import Pastries_banner from '../src/Components/Assets/Pastries_banner.png'
// import Cocktail_banner from '../src/Components/Assets/Cocktail_banner.png'
// import Birthday_banner from '../src/Components/Assets/Birthday_banner.png'
// import Samedaay_banner from '../src/Components/Assets/Samedaay_banner.png'

// function App() {
//   return (
//     <div className='main'>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/birthday' element={<HomeCategory  banner={Birthday_banner} category="birthday"/>}/>
//           <Route path='/pastries' element={<HomeCategory banner={Pastries_banner} category="pastries"/>}/>
//           <Route path='/special' element={<HomeCategory category="special"/>}/>
//           <Route path='/cocktail' element={<HomeCategory  banner={Cocktail_banner}   category="cocktail"/>} />
//           <Route path='/sameday' element={<HomeCategory banner={Samedaay_banner} category="sameday"/>} />
//           <Route path='/wedding' element={<HomeCategory banner={Wedding_banner}   category="wedding"/>} />
//           <Route path='/anniversary' element={<HomeCategory category="anniversary"/>} />
//           <Route path='/mother' element={<HomeCategory  category="mother"/>} />
//           <Route path='/father' element={<HomeCategory   category="father"/>} />
//           <Route path='/val' element={<HomeCategory    category="val"/>} />
//           <Route path='/product/:id' element={<Product/>}/>
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/login' element={<LoginSignup />} />
//           <Route path='/register' element={<Register/>} />
//           <Route path='/about' element={<About/>} />
//           <Route path='/office' element={<Office/>} />
//           <Route path='/about' element={<About/>} />
//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;


import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSigup';
import Cart from './pages/Cart';
import Product from './Components/Display/Display';
import HomeCategory from './pages/HomeCategory';
import Register from './pages/Register';
import Footer from './Components/Footer/Footer';
import About from './Footerlinks/About/About';
import Office from './Footerlinks/Office/Office';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/category/:category' element={<HomeCategory />} /> */}
          <Route path='/category/:category' element={<HomeCategory />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/office' element={<Office />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
