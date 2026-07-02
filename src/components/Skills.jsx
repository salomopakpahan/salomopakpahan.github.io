import "./Skills.css";

import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiArduino,
  SiEspressif,
  SiNodered,
  SiMqtt,
  SiSiemens,
  SiFigma,
} from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <SiSiemens />, name: "Siemens PLC", level: 95 },
    { icon: <SiArduino />, name: "Arduino", level: 95 },
    { icon: <SiEspressif />, name: "ESP32", level: 92 },
    { icon: <SiNodered />, name: "Node-RED", level: 90 },
    { icon: <SiMqtt />, name: "MQTT", level: 88 },
    { icon: <FaPython />, name: "Python", level: 88 },
    { icon: <FaReact />, name: "React", level: 85 },
    { icon: <FaHtml5 />, name: "HTML", level: 95 },
    { icon: <FaCss3Alt />, name: "CSS", level: 90 },
    { icon: <FaJsSquare />, name: "JavaScript", level: 82 },
    { icon: <FaGitAlt />, name: "Git", level: 80 },
    { icon: <FaGithub />, name: "GitHub", level: 85 },
    { icon: <SiFigma />, name: "Figma", level: 85 },
  ];

  return (

    <section id="skills" className="skills">

      <div className="skills-container">

        <h2>My Skills</h2>

        <p className="subtitle">
          Technologies, programming languages, frameworks, and tools
          that I use to build modern engineering and software solutions.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-header">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div>

                  <h3>{skill.name}</h3>

                  <span>{skill.level}%</span>

                </div>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;