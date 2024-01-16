import React, { useState,useEffect,useContext} from 'react';

const Experience = () => {
  return (
    <div className="container-fluid" id="experience">
      <div className="container">
        <h2 style={{ color: 'white',paddingTop:'40px',paddingBottom:'10px'}}>Experience</h2>

        <div className="experience-item">
          <h4 style={{ color: '#bfc1eb' }}>Software Engineer, 5/2023 - Current</h4>
          <p style={{color:'#8f90af'}}>Gigleji Teknet pvt.ltd - Bengaluru, India</p>
          <ul style={{color:'#cfd0de'}}>
            <li>Tested methodology with writing and execution of test plans, debugging and testing scripts and tools.</li>
            <li>Worked on basic projects of React App like LoginPage, SignUp page, and designing responsive web pages.</li>
            <li>Designed UIs within frontend web frameworks, exploiting associated templates and tools to shorten development times.</li>
            <li>Built highly functional web pages using JavaScript, HTML, CSS, and React.</li>
            <li>Developed application UIs via emerging frontend technologies.</li>
            <li>Contributed significantly to the development of a secure and efficient payment module.</li>
            <li>Responsive web design: Experience in building responsive and mobile-friendly web pages.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4 style={{ color: '#bfc1eb' }}>Process Associate, 8/2022 - 12/2022</h4>
          <p style={{color:'#8f90af'}}>Prudent Partners - Mysore, India</p>
          <ul style={{color:'#cfd0de'}}>
            <li>Worked in industrial annotations relating to identifying manufacturing defects like packaging issues, bar code labeling with a scanner, and various other services.</li>
            <li>Worked in roof annotations for companies looking for ways to reduce their operational cost, time, and produce comprehensive reports for their clients, which are caused due to wind action and rooftop equipment.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Experience;
