import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';


import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.svg'


// Navbar Page

const Navbar = () => {

        const [menu,setMenu] = useState("shop");
        const {getTotalCartItems} = useContext(ShopContext);
        const menuRef = useRef();

        const dropdown_toggle = (e) => {
            menuRef.current.classList.toggle('nav-menu-visible');
            e.target.classList.toggle('open');
        }


    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p><span className='nav-toye'>Toye</span>FashionStore</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none', color: 'Orange'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none', color: 'Green'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none', color: 'Red'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none', color: 'Grey'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar