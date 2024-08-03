import { NavLink } from 'react-router-dom';
import './Navbar1.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div id='nav-left'>
          <NavLink to="/">
            <h1>Chatter</h1>
          </NavLink>
        </div>

        <div id='menu'>
          <RxHamburgerMenu size={'30px'} onClick={toggleNavbar} style={{cursor:'pointer'}}/>
        </div>

        <div id='nav-center' className={isOpen ? 'open' : ''}>
          <NavLink to="/">
            <div id='navs' onClick={toggleNavbar}>Home</div>
          </NavLink>
          <NavLink to="/about">
            <div id='navs' onClick={toggleNavbar}>About</div>
          </NavLink>
          <NavLink to="/contact">
            <div id='navs' onClick={toggleNavbar}>Contact</div>
          </NavLink>
          <NavLink to="/signUp">
            <div id='navs' onClick={toggleNavbar}>Write</div>
          </NavLink>
          <NavLink to="/login">
            <div id='navs' onClick={toggleNavbar}>Log In</div>
          </NavLink>
          <NavLink to="/signup">
            <div id='navs' 
            onClick={toggleNavbar}
            style={{ backgroundColor: 'rgba(162, 0, 255, 0.918)', marginLeft:'8px' }}>Get Started</div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
