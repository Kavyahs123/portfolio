import React from 'react';
import './App.css';
import graduated1 from '../src/images/graduated1.jpg';

export default function About() {
  return (
    <div>
    <div className="container">
      <h2 className="card-title" style={{ color: 'white', paddingTop: '10px'}}>Qualification</h2>
      <div className="col-md mt-4">
        <div className="card" style={{ boxShadow: '2px 4px 8px rgba(0,100,500,0.6)',  overflow: 'hidden'}}>
          <img src={graduated1} alt="Cit" className="card-image" />
          <div className="card-overlay">
            <p className="card-text" style={{fontSize:'18px'}}>
              <strong style={{fontSize:'22px'}}>CIT College, VTU University, Ponnampet, Kodagu</strong><br />
              Bachelor of Engineering, Major in ECE<br />
              June 2022<br />
              <button type="button" class="btn btn-danger" style={{cursor:'none',marginTop:'5px'}}>80%</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
