import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  
  return (
    <>
    
      <nav className="py-5 px-10 bg-emerald-400 flex items-center justify-between">
        <h2 className="text-2xl">Shreyans</h2>

        <div className="flex gap-8 items-center ">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/services'>Services</Link>
            <Link to='/home'>Your Profile</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
