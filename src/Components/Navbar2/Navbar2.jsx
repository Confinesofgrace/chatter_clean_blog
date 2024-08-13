import { NavLink } from 'react-router-dom';
import './Navbar2.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Searchbar from '../Searchbar/Searchbar';

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div id='nav-left'>
          <NavLink to="/loggedin">
            <h1>Chatter</h1>
          </NavLink>
        </div>

        <div id='menu'>
          <RxHamburgerMenu size={'30px'} onClick={toggleNavbar} style={{cursor:'pointer'}}/>
        </div>

        <div id='nav-center' className={isOpen ? 'open' : ''}>
          <NavLink to="/loggedin">
            <div id='navs' onClick={toggleNavbar}>Home</div>
          </NavLink>
          <NavLink to="/loggedin/about">
            <div id='navs' onClick={toggleNavbar}>About</div>
          </NavLink>
          <NavLink to="/loggedin/myposts">
            <div id='navs' onClick={toggleNavbar}>My Posts</div>
          </NavLink>
          <NavLink to="/createnewpost">
            <div id='navs' onClick={toggleNavbar}>Write</div>
          </NavLink>
          
        </div>

            <div style=
                {{
                    width: '80%',
                    display: 'flex',

                    marginRight:'50px',
                    

                }}>

                <Searchbar/>

                <div id='loggedin-user'>
                    <IoMdNotificationsOutline size={20} style={{marginRight:'12px'}} />

                    <NavLink to= "loggedin/settings">
                      <div id='profile-pic'>
                        <CgProfile size={20} />

                      </div>
                    </NavLink>
                    
                </div>

                
            </div>

      </nav>
    </div>
  );
}

export default Navbar2;
