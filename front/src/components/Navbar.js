import { useRef } from 'react';

import React from 'react';

import {FaBars,FaTimes} from 'react-icons/fa';

import "./../Style/main.css";

function Navbar(){

const navRef = useRef();

const showNavbar =() => {
    navRef.current.classList.toggle("responsive_nav");
}

return( 
<div>
    <div class="sidebar">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="#about">Cards </a>
  
</div>

<div>

</div>


</div>

// <!-- Page content -->
 
    // <div className='navbar'>
    // <header>
    //     <h3>
    //         Logo
            
    //     </h3>
    //     <nav ref={navRef}>
    //         <a href="/#"> Home </a>
    //         <a href="/#"> About us </a>
    //         <a href="/#"> Company </a>
    //         <a href="/#"> Cards </a>

    //         <button className="nav btn nav-close-btn" onClick={showNavbar}>
    //             <FaTimes/>
    //             </button>
            
            
    //     </nav>
    //     <button className="nav-btn" onClick={showNavbar}><FaBars/></button>
    // </header>
    // </div>

);
}
export default Navbar;