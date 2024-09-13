import React, { useContext, useState } from 'react';
import './Navbar.css';
import Hma from '../Assets/Hma.png';
import carto from '../Assets/carto.png';
import { NavLink, Link } from 'react-router-dom';
import { HomeContexts } from '../../Contexts/HomeContexts';

function Navbar() {
    const [menu, setMenu] = useState("");
    const { getTotalCartItems } = useContext(HomeContexts);
    const [barsOpen, setBarsOpen] = useState(false);

    // Function to the handle closing the menu
    const handleLinkClick = () => {
        setBarsOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="nav-cupcake">
                <img src={Hma} alt="" />
            </div>
            <div
                className={`hamburger ${barsOpen ? 'hidden' : ''}`}
                onClick={() => setBarsOpen(!barsOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            {barsOpen && (
                <button className="cancel-button" onClick={() => setBarsOpen(false)}>
                    <strong className='times'>&times;</strong>
                </button>
            )}
            <div className="wrapper">
                <ul id='nav-menu' className={barsOpen ? 'open' : ''}>
                    <li onClick={handleLinkClick}>
                        <NavLink to='/' onClick={handleLinkClick}>Home</NavLink>
                        {menu === "home" ? <hr /> : <></>}
                    </li>
                    <li>
                        <div className="dropdown">
                            <button
                                className="btn border border-0 dropdown-toggle"
                                type="button"
                                id="triggerId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Occasion
                            </button>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                {/* <li><NavLink to={`/category/birthday`} onClick={handleLinkClick}>Birthday</NavLink></li>
                                <li> <NavLink to={`/category/${wedding}`} onClick={handleLinkClick}>Wedding</NavLink></li>
                                <NavLink to={`/category/${category}`} onClick={handleLinkClick}>Category Name</NavLink> */}
                                <li><NavLink to='/val' onClick={handleLinkClick}>Valentine</NavLink></li>
                                <li><NavLink to='/father' onClick={handleLinkClick}>Father's Day</NavLink></li>
                                <li><NavLink to='/mother' onClick={handleLinkClick}>Mother's Day</NavLink></li>
                                <li><NavLink to='/anniversary' onClick={handleLinkClick}>Anniversary</NavLink></li>
                            </div>
                        </div>
                    </li>
                    {/* <li onClick={handleLinkClick}>
                        <NavLink to='/cocktail' onClick={handleLinkClick}>CupCakes</NavLink>
                        {menu === "cupcakes" ? <hr /> : <></>}
                    </li> */}
                    <li onClick={handleLinkClick}>
                        <NavLink to='/pastries' onClick={handleLinkClick}>Pastries</NavLink>
                        {menu === "pastries" ? <hr /> : <></>}
                    </li>
                    <li onClick={handleLinkClick}>
                        <NavLink to='/sameday' onClick={handleLinkClick}>Same day Cakes</NavLink>
                        {menu === "sameday" ? <hr /> : <></>}
                    </li>
                    <li onClick={handleLinkClick}>
                        <NavLink to='/gifts' onClick={handleLinkClick}>Gifts</NavLink>
                        {menu === "gifts" ? <hr /> : <></>}
                    </li>
                    <li onClick={handleLinkClick}>
                        <Link to='/login' onClick={handleLinkClick}>Register</Link>
                        {menu === "login" ? <hr /> : <></>}
                    </li>
                    <li>
                        <Link className='cart' to='/cart' onClick={handleLinkClick}>
                            <img src={carto} alt="" />
                        </Link>
                    </li>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
