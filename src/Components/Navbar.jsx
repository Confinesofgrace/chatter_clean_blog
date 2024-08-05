import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2/Navbar2';

function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith('/loggedin') || location.pathname === '/createnewpost') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <div>
      {showNavbar ? <Navbar1 /> : <Navbar2 />}
    </div>
  );
}

export default Navbar;
