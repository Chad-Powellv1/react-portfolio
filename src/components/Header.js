import './header.css';
import React from 'react';
import logo from '../assets/logo.png';
import { FaBloggerB } from "react-icons/fa";
import { BsGithub, BsLinkedin, } from "react-icons/bs";
import { BiHome, BiUser, BiBook, BiEnvelope } from 'react-icons/bi'

export const Header = () => {
  return (
    <div>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header className="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                    <img src= {logo} alt="Initial logo" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="index.html"><span className="chad">Chad</span> <span className="powell">Powell</span></a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://github.com/Chad-Powellv1" className="github"><i className="bx bxl-github"><BsGithub/></i></a>
                            <a href="https://www.linkedin.com/in/chad-powell-dev/" className="linkedin"><BsLinkedin/><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                <nav className="navbar nav-menu">
                    <ul>
                        <li><a href="#home" className="nav-link scrollto active"><i className="bx bx-home"><BiHome/></i> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"><BiUser/></i><span>About</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"><BiBook/></i> <span>Portfolio</span></a></li>
                        <li><a href="#blog" className="nav-link scrollto"><i className='bx bxl-blogger'><FaBloggerB/></i><span>Blog</span></a></li>
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"><BiEnvelope/></i><span>Contact</span></a></li>
                    </ul>
                </nav>
                </div>
            </header>
    </div>
  )
}