"use client"

import Link from 'next/link';
import React, { useState } from 'react';



export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
    return (<>
      <div className="header">
        <div className="navbarOne">
          <div className="left flex">
              <div className="location">
                  <span>
                      <i class="fas fa-globe-africa"></i>
                  </span>
                  <div className="header__location-content">
                      <p>5th Floor Suite 501, Kikinga Hse Annex, Biashara Street, Kiambu</p>
                      {/* <p></p> */}
                  </div>
              </div>
          </div>
          <div className="right flex">
              <div className="email">
                  <i className="fa fa-envelope"></i>
                  <p>info@gcolaw.co.ke</p>
              </div>
              
              
              
          </div> 

        </div>

        {/* <nav className={navbar ? "navbar active" : "navbar"}> */}
        <nav className="navbar">
          <div className="logo">
            <a href="/"><img src="../logo.png" alt="Logo" className="logo-img" id="logo_img2" /></a>
          </div>

          <ul className="navbarList" id="menu-nav">
            <li className="navbarItem">
              <a href="/" className="navbarLink">HOME</a>
            </li>
            <li className="navbarItem">
              <a href="/about" className="navbarLink">ABOUT US</a>
                

            </li>
            
            <li className="navbarItem">
              <a href="/practiceAreas" className="navbarLink">PRACTICE AREAS</a>
              

            </li>
            <li className="navbarItem">
              <a href="/advocates" className="navbarLink">ADVOCATES</a>
            </li>
            <li className="navbarItem">
              <a href="/contacts" className="navbarLink">CONTACT US</a>
            </li>
          </ul>

          
          <div className="facebook">
              <span><i class="fa-solid fa-phone"></i></span>
              <a href="tel:020-8000-601" className="phone-number">020-8000-601</a>
          </div>

          {/* <div className="toggle-btn">
            <i class="fa-solid fa-bars"></i>
          </div> */}
          
          <div className="toggle-btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>

          <div className={`dropped-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="dropped-links">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
              <li><Link href="/practiceAreas">PRACTICE AREAS</Link></li>
              <li><Link href="/advocates">ADVOCATES</Link></li>
              <li><Link href="/contacts">CONTACTS</Link></li> 
            </div>                    
            
            <div className="dropped-socials">
              <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a>  </li>                              
              <li><a href="#"><i className="fab fa-instagram"></i></a> </li>                               
              <li><a href="#"><i class="fa-brands fa-square-x-twitter"></i></a></li>                                
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </div>

            <li>
              <div className="emaild">
                <p>TEL:</p>
                <p><span>020-8000-601</span></p>
              </div>             
            </li>

            <li>
              <div className="emaild1">
                <p>EMAIL:</p>
                <p><span>info@gcolaw.co.ke</span></p>
              </div>
            </li>
            
            <li><p>5th Floor, Suite 501 <br /> Kikinga Hse Annex</p></li>
            {/* <li><p><span>Kikinga Hse Annex</span></p></li> */}
            
            
            <li>
            <div className="emaild2">
                <p>P.O BOX 1555 - 00900</p>
                <p>KIAMBU</p>
              </div> 
            </li>
                  
          </div>

        </nav>

        

        
      </div>
      </>
    );
  
}

// export default Navbar;
