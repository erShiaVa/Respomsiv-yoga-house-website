import React, { useState } from 'react';
import './navbar.scss';
import { RiMenu3Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav__logo">
          <a href="/">YOGA.H<span>OUSE</span></a>
        </div>

        <div className="nav__btn" onClick={toggleNavbar}>
          {isOpen ? <IoMdClose size={22} /> : <RiMenu3Line size={22} />}
        </div>
      </nav>

      <div className={`navbar__open ${isOpen ? 'show' : ''}`}>
        <ul className="nav__items">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </header>
    
  );
}

export default Navbar;
