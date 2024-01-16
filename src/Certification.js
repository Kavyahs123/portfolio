import React, { useState } from 'react';
import './App.css';
import hack from '../src/images/hack.png';
import pent from '../src/images/pent.png';




export default function Certification() {
 
  return (
    <div className="container pb-4">
      <h2 className="pt-3 text-white">Certifications</h2>

      <div className="col-md d-sm-row pt-3">
        <div style={{paddingRight:'35px'}}>
       <a href="https://www.hackerrank.com/certificates/410949cca23b"><img src={hack} alt="hack"  width='100%' height="auto"></img></a>
        </div>
    <div className="col-md d-sm-row pt-4">
        <img src={pent} alt="pent" width="97%" height="auto"></img>
    </div>
  
    </div>
    </div>
  );
}
