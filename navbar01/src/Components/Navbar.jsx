import { useState } from "react";
import React from 'react'
import "./navbar.css"

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
        <div className="logo">
          <h2>
            <span>D</span>
            <span>N</span>
            <span>I</span>ngale
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Settings</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className='social-media-desktop'>
            <li>
              <a href='#'><FaFacebook className='facebook'/></a>
            </li>
            <li>
              <a href='#'><FaYoutube className='youtube'/></a>
            </li>
            <li>
              <a href='#'><FaTwitter className='twitter' /></a>
            </li>

          </ul>
           {/* hamburget menu start  */}
           <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />

            </a>
      </div>
        </div>
      </nav>
      <section className="hero-section"> 
        <p>Hello</p>
        <h1>Good Morning</h1>
      </section>
      
    </>
  )
}

export default Navbar