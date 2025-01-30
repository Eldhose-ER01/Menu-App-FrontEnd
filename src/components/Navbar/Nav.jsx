import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='wrapper'>
      <div className='navbar'>
        <div className='logo'>
          <img src="../../../src/assets/images/6860545013e0a63ba8cb7e94004971f7.png" alt="" />
        </div>
        <div className={`nav-items ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/">MENU</a></li>
            <li><a href="/addmenuitem">ADD MENU ITEM's</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
        <div className='hamburger' onClick={toggleNav}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </div>
  );
}