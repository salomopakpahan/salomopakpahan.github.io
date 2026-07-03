import "./Skills.css";

import {
  FaMicrochip,
  FaRobot,
  FaNetworkWired,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaLinux,
  FaGitAlt,
  FaBrain,
  FaChartLine,
  FaCode,
  FaAward,
  FaLightbulb,
  FaStar,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiSiemens,
  SiArduino,
  SiEspressif,
  SiMqtt,
  SiNodered,
} from "react-icons/si";

function Skills() {

  const summary = [
    {
      icon: <FaCode />,
      number: "15+",
      title: "Technologies",
    },
    {
      icon: <FaBrain />,
      number: "5+",
      title: "Engineering Fields",
    },
    {
      icon: <FaAward />,
      number: "20+",
      title: "Projects",
    },
    {
      icon: <FaChartLine />,
      number: "90%",
      title: "Average Skill",
    },
  ];

  const technicalSkills = [
    {
      icon: <SiSiemens />,
      title: "PLC Siemens",
      category: "Automation",
      level: 95,
      desc: "TIA Portal • Ladder Logic • HMI • Industrial Automation",
      color: "#d4af37",
    },
    {
      icon: <SiArduino />,
      title: "Arduino",
      category: "Embedded",
      level: 95,
      desc: "Sensors • Actuators • Serial Communication",
      color: "#ff9800",
    },
    {
      icon: <SiEspressif />,
      title: "ESP32",
      category: "Industrial IoT",
      level: 94,
      desc: "WiFi • Bluetooth • Cloud Connectivity",
      color: "#29b6f6",
    },
    {
      icon: <FaMicrochip />,
      title: "Embedded System",
      category: "Hardware",
      level: 94,
      desc: "Microcontroller Programming & Device Integration",
      color: "#00c853",
    },
    {
      icon: <SiMqtt />,
      title: "MQTT",
      category: "Protocol",
      level: 94,
      desc: "Industrial Messaging Protocol",
      color: "#42a5f5",
    },
    {
      icon: <SiNodered />,
      title: "Node-RED",
      category: "Dashboard",
      level: 93,
      desc: "Industrial Dashboard & Automation Flow",
      color: "#ff5252",
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      category: "AI",
      level: 91,
      desc: "Machine Learning • YOLO • Decision Tree • NFIS",
      color: "#9c27b0",
    },
    {
      icon: <FaPython />,
      title: "Python",
      category: "Programming",
      level: 92,
      desc: "Automation • AI • Computer Vision",
      color: "#4caf50",
    },
    {
      icon: <FaNetworkWired />,
      title: "Computer Networking",
      category: "Networking",
      level: 90,
      desc: "Routing • Switching • VLAN • ACL",
      color: "#26c6da",
    },
    {
      icon: <FaReact />,
      title: "React",
      category: "Frontend",
      level: 88,
      desc: "Modern Component Based Web Development",
      color: "#61dafb",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      category: "Frontend",
      level: 95,
      desc: "Semantic HTML Development",
      color: "#ff7043",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      category: "Frontend",
      level: 93,
      desc: "Responsive UI • Animation • Flexbox • Grid",
      color: "#42a5f5",
    },
    {
      icon: <FaJsSquare />,
      title: "JavaScript",
      category: "Programming",
      level: 90,
      desc: "Modern ES6+ Interactive Programming",
      color: "#ffd600",
    },
    {
      icon: <FaLinux />,
      title: "Linux",
      category: "Operating System",
      level: 86,
      desc: "Ubuntu • Bash • Server Administration",
      color: "#90a4ae",
    },
    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      category: "Version Control",
      level: 90,
      desc: "Version Control • Collaboration • Deployment",
      color: "#ef5350",
    },
  ];

  const averageSkill = Math.round(
    technicalSkills.reduce((total, item) => total + item.level, 0) /
      technicalSkills.length
  );

  return (

    <section id="skills" className="skills reveal">

  <div className="skills-header">

    <p>MY EXPERTISE</p>

    <h2>Technical Skills</h2>

    <span className="skills-line"></span>

  </div>

  <div className="skills-intro">

    <div className="intro-left">

      <h3>

        Engineering Meets <br />

        Artificial Intelligence

      </h3>

      <p>

        I specialize in Industrial Automation,

        Artificial Intelligence,

        Industrial Internet of Things,

        Embedded Systems,

        Computer Networking,

        and Modern Web Development.

        Every technology below has been applied

        in academic projects,

        industrial simulations,

        research,

        and real-world implementations.

      </p>

      <a

        href="#projects"

        className="explore-btn"

      >

        Explore Projects

        <FaArrowRight />

      </a>

    </div>

    <div className="intro-right">

      {

        summary.map((item,index)=>(

          <div

            className="summary-card"

            key={index}

          >

            <div className="summary-icon">

              {item.icon}

            </div>

            <h2>

              {item.number}

            </h2>

            <p>

              {item.title}

            </p>

          </div>

        ))

      }

      <div className="summary-card average">

        <div className="summary-icon">

          <FaChartLine/>

        </div>

        <h2>

          {averageSkill}%

        </h2>

        <p>

          Average Skill

        </p>

      </div>

    </div>

  </div>

  <div className="skills-divider"></div>

  <div className="skills-grid">

    {

      technicalSkills.map((item,index)=>(

        <div

          className="skill-card"

          key={index}

        >

          <div className="skill-top">

            <div

              className="skill-icon"

              style={{

                color:item.color

              }}

            >

              {item.icon}

            </div>

            <span className="skill-category">

              {item.category}

            </span>

          </div>

          <h3>

            {item.title}

          </h3>

          <p>

            {item.desc}

          </p>

          <div className="progress">

            <div

              className="progress-fill"

              style={{

                width:`${item.level}%`

              }}

            >

            </div>

          </div>

          <div className="skill-footer">

            <span>

              Proficiency

            </span>

            <strong>

              {item.level}%

            </strong>

          </div>

        </div>

      ))

    }

  </div>

  <div className="skills-divider"></div>

<div className="softskills-section">

  <div className="section-title">

    <p>

      PERSONAL ATTRIBUTES

    </p>

    <h2>

      Professional Soft Skills

    </h2>

    <p>

      Beyond technical expertise, I believe successful engineering
      projects are built through leadership, collaboration,
      effective communication, problem solving,
      and continuous learning.

    </p>

  </div>

  <div className="softskills-grid">

    <div className="soft-card">

      <div className="soft-icon">

        <FaLightbulb/>

      </div>

      <h3>

        Leadership

      </h3>

      <p>

        Experienced in leading engineering teams,
        organizing projects,
        and making strategic technical decisions.

      </p>

    </div>

    <div className="soft-card">

      <div className="soft-icon">

        <FaBrain/>

      </div>

      <h3>

        Critical Thinking

      </h3>

      <p>

        Analyze complex engineering problems
        and design efficient,
        data-driven industrial solutions.

      </p>

    </div>

    <div className="soft-card">

      <div className="soft-icon">

        <FaCode/>

      </div>

      <h3>

        Problem Solving

      </h3>

      <p>

        Experienced in troubleshooting
        PLC,
        Embedded Systems,
        Networking,
        AI,
        and IoT applications.

      </p>

    </div>

    <div className="soft-card">

      <div className="soft-icon">

        <FaAward/>

      </div>

      <h3>

        Communication

      </h3>

      <p>

        Strong communication skills
        in technical discussions,
        presentations,
        and project documentation.

      </p>

    </div>

    <div className="soft-card">

      <div className="soft-icon">

        <FaChartLine/>

      </div>

      <h3>

        Project Management

      </h3>

      <p>

        Able to manage engineering projects,
        schedule tasks,
        monitor progress,
        and deliver results efficiently.

      </p>

    </div>

    <div className="soft-card">

      <div className="soft-icon">

        <FaRobot/>

      </div>

      <h3>

        Continuous Learning

      </h3>

      <p>

        Passionate about learning
        Artificial Intelligence,
        Industrial Automation,
        Computer Vision,
        and emerging technologies.

      </p>

    </div>

  </div>

</div>

<div className="skills-bottom">

  <div className="career-box">

    <span className="career-subtitle">

      WHY WORK WITH ME

    </span>

    <h2>

      Building Intelligent Engineering Solutions

    </h2>

    <p>

      I combine Industrial Automation,
      Artificial Intelligence,
      Embedded Systems,
      Industrial IoT,
      Networking,
      and Modern Web Development
      to build reliable,
      scalable,
      and innovative solutions
      for Industry 4.0.

    </p>

    <a

      href="#projects"

      className="career-btn"

    >

      View Projects

      <FaArrowRight/>

    </a>

  </div>

  <div className="career-box">

    <span className="career-subtitle">

      CURRENT FOCUS

    </span>

    <h2>

      Technologies I'm Exploring

    </h2>

    <div className="focus-tags">

      <span>Artificial Intelligence</span>

      <span>Machine Learning</span>

      <span>Computer Vision</span>

      <span>PLC Siemens</span>

      <span>Industrial Automation</span>

      <span>ESP32</span>

      <span>Arduino</span>

      <span>Node-RED</span>

      <span>MQTT</span>

      <span>Python</span>

      <span>React</span>

      <span>JavaScript</span>

      <span>Networking</span>

      <span>Linux</span>

      <span>GitHub</span>

    </div>

  </div>

</div>

<div className="skills-footer">

  <div className="footer-card">

    <span>

      KEEP LEARNING

    </span>

    <h2>

      Technology Never Stops Evolving

    </h2>

    <p>

      I believe every engineering project is an opportunity
      to learn something new.

      Whether it is Industrial Automation,
      Artificial Intelligence,
      Embedded Systems,
      Networking,
      or Modern Web Development,

      I always strive to create solutions that are efficient,
      scalable,
      and beneficial for real industries.

    </p>

  </div>

  <div className="footer-card stats">

    <div>

      <h3>

        {technicalSkills.length}

      </h3>

      <span>

        Technologies

      </span>

    </div>

    <div>

      <h3>

        {averageSkill}%

      </h3>

      <span>

        Average Skill

      </span>

    </div>

    <div>

      <h3>

        20+

      </h3>

      <span>

        Projects

      </span>

    </div>

    <div>

      <h3>

        3+

      </h3>

      <span>

        Years Learning

      </span>

    </div>

  </div>

</div>

</section>

);

}

export default Skills;