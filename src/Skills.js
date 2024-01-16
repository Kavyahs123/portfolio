import React, { useState } from "react";

export default function Skills() {
  const skills = [
    { name: "Core Java", percentage: 80 },
    { name: "SQL", percentage: 80 },
    { name: "CSS", percentage: 100 },
    { name: "HTML", percentage: 100 },
    { name: "JavaScript", percentage: 80 },
    { name: "ReactJS", percentage: 75 },
    { name: "Bootstrap 5", percentage: 100 },
    { name: "MUI", percentage: 70 },
    { name: "Node.js", percentage: 75 },
    { name: "MongoDB", percentage: 70 },
  ];

  const groupedSkills = [];
  for (let i = 0; i < skills.length; i += 3) {
    groupedSkills.push(skills.slice(i, i + 3));
  }

  return (
    <div className="container-fluid" id="skills">
      <div className="container" >
        <h2 style={{color:'#eeee',paddingTop:'20px',paddingBottom:"20px"}}>Skills</h2>
        {groupedSkills.map((skillGroup, rowIndex) => (
          <div key={rowIndex} className="row mb-3">
            {skillGroup.map((skill, colIndex) => (
              <div key={colIndex} className="col">
                <h5 style={{color:'#8f90af'}}>{skill.name}</h5>
                <SkillProgressBar percentage={skill.percentage} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillProgressBar({ percentage }) {
  const [width, setWidth] = useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (width < percentage) {
        setWidth(width + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [width, percentage]);

  return (
    <div className="progress">
      <div
        className="progress-bar" 
        role="progressbar"
        style={{ width: `${width}%` ,background:'#8c91cb'}}
        aria-valuenow={width}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {`${width}%`}
      </div>
    </div>
  );
}
