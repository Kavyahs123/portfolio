
import logo from '../src/images/logo.jpg';
import About from './About.js';
import React, { useState,useEffect,useContext} from 'react';
import myresume from '../src/resume/myresume.pdf';
export default function Navbar(){
    const iconStyle = {
        fontSize: '25px',
        paddingRight: '40px',
        transition: ' 0.3s, transform 0.3s',
      };
     
    return(
<div style={{paddingBottom:'20px'}}>

<nav class="navbar navbar-expand-md">
  <div class="container">
    <a class="navbar-brand text-white" href="#" style={{fontSize:'28px'}}>Kavya H S</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar" style={{fontSize:'18px'}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#skills" role="button" style={{color:'#cdcdf3'}}>Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience" style={{color:'#cdcdf3'}}>Experience</a>
        </li>    
        <li class="nav-item">
          <a class="nav-link" href="#contact" style={{color:'#cdcdf3'}}>Contact</a>
        </li>    
      </ul>
    </div>
  </div>
</nav>
<div class="container d-md-flex" style={{paddingTop:'50px'}}>
    <div>
         <h2 style={{color:'#eeee'}}>Software Engineer </h2>
          <h3 style={{color:'#a2a2bf',fontSize:'19px',lineHeight:'28px'}}>Dynamic and versatile aspiring Software Engineer with a solid foundation in SQL and Web Technologies.<br></br> Eager to contribute to innovative IT projects, dedicated to delivering impactful results in a dynamic and collaborative environment.</h3>
         <div  style={{display:'flex',marginBottom:'20px'}}>
     <a href="http://linkedin.com/in/Kavya H S">   <i className="bi bi-linkedin text-white" style={iconStyle}></i></a>
 <a href="mailto:kavyakavyagowda80@gmail.com"><i className="bi bi-envelope text-white" style={iconStyle}></i></a>
 <a href="https://github.com/Kavyahs123"><i className="bi bi-github text-white" style={iconStyle}></i></a>

         </div>
       <div>
        <button type="button" className="btn btn-danger" style={{marginBottom:'20px'}}> <a className="text-white" href={myresume} download="YourResume.pdf" style={{textDecoration:'none'}}> Download Resume
             </a>  <i class="bi bi-download"></i></button>
       </div>
    </div>
  <div>
      <img src={logo} ></img>
  </div>
  </div>
</div>

    );
}