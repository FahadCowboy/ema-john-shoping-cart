import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
   return (
      <header>
         <div className='logo-wrap'>
            <img src={logo} className='logo' alt="" />
         </div>

         <nav className="nav">
            <a href="/shop" className="nav-anchors">Shop</a>
            <a href="/orders" className="nav-anchors">Order Review</a>
            <a href="/inventory" className="nav-anchors">Manage Inventory</a>
         </nav>
      </header>
   );
};

export default Header;