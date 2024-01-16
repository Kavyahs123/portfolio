import './App.css';
import React from 'react';
import Navbar from './Navbar.js';
import About from './About.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Goup from './Goup.js';
import Certification from './Certification.js';
function App() {
  return (
    <div className="App" style={{ background: ' linear-gradient(90deg, rgba(15,26,148,1) 20%, rgba(14,55,85,1) 74%)'}}>
  <Navbar/>
  <About></About>
<Experience></Experience>
<Skills></Skills>
<Certification></Certification>
<Contact></Contact>
<Goup></Goup>

    </div>
  );
}

export default App;
