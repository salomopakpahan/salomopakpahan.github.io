import "./About.css";

import profile from "../assets/profile.jpg";
import { getAge } from "../utils/age";
import CountUp from "react-countup";

import {
  FaRobot,
  FaLaptopCode,
  FaMicrochip,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaUniversity,
  FaDownload,
  FaEnvelope,
  FaBirthdayCake,
  FaLanguage,
  FaUsers,
  FaAward,
} from "react-icons/fa";

console.log(FaRobot);
console.log(CountUp);

function About() {
  return (
    <section id="about" className="about reveal">

      {/* ================= HEADER ================= */}
      <div className="about-header">
        <p>WHO AM I</p>
        <h2>About Me</h2>
        <span className="about-line"></span>
      </div>

      {/* ================= TOP SECTION ================= */}
      <div className="about-top">

        {/* PHOTO */}
        <div className="about-photo">
          <img src={profile} alt="profile" />
        </div>

        {/* CONTENT */}
        <div className="about-content">

          <span className="about-badge">
            Automation Engineer • AI Developer
          </span>

          <h1>
            Salomo Fransiskus Pakpahan
          </h1>

          <h3>
            Electrical Engineering Undergraduate
          </h3>

          <p>
            I am an Electrical Engineering undergraduate passionate about
            Industrial Automation, Artificial Intelligence, Industrial IoT,
            Embedded Systems, Computer Networking, and Full Stack Development.
          </p>

          <p>
            I enjoy building intelligent engineering systems that combine
            software, hardware, and automation to solve real industrial problems
            and improve efficiency in Industry 4.0.
          </p>

          {/* ================= INFO GRID ================= */}
      <div className="about-info-grid">

        <div className="about-info-card">
          <FaBirthdayCake />
          <div>
            <h4>Age</h4>
            <span>{getAge()} Years Old</span>
          </div>
        </div>

        <div className="about-info-card">
          <FaMapMarkerAlt />
          <div>
            <h4>Location</h4>
            <span>Surabaya, Indonesia</span>
          </div>
        </div>

        <div className="about-info-card">
          <FaUniversity />
          <div>
            <h4>University</h4>
            <span>Petra Christian University</span>
          </div>
        </div>

        <div className="about-info-card">
          <FaRobot />
          <div>
            <h4>Focus</h4>
            <span>AI & Industrial Automation</span>
          </div>
        </div>

      </div>

      {/* ================= BUTTON GROUP ================= */}
      <div className="about-button-group">

        <a
          href="/CV_Salomo.pdf"
          download
          className="download-btn"
        >
          <FaDownload />
          Download CV
        </a>

        <a
          href="#contact"
          className="contact-btn"
        >
          <FaEnvelope />
          Contact Me
        </a>

      </div>

      {/* ================= FACT CARDS ================= */}
      <div className="about-facts">

        <div className="fact-card">
          <FaRobot />
          <h3>Artificial Intelligence</h3>
          <p>
            Machine Learning, Computer Vision, Decision Tree, and Industrial AI systems.
          </p>
        </div>

        <div className="fact-card">
          <FaMicrochip />
          <h3>Industrial Automation</h3>
          <p>
            PLC Siemens, HMI, MQTT, Node-RED, and Industrial IoT systems.
          </p>
        </div>

        <div className="fact-card">
          <FaLaptopCode />
          <h3>Full Stack Development</h3>
          <p>
            React, JavaScript, Node.js, API integration, and modern web apps.
          </p>
        </div>

      </div>

            {/* ================= EDUCATION ================= */}
      <div className="about-education">

        <div className="section-small-title">
          <FaUserGraduate />
          <h2>Education Journey</h2>
        </div>

        <div className="about-education-line">

          <div className="about-education-item">
            <span className="education-year">2023 - Present</span>
            <div className="education-content">
              <h3>Petra Christian University</h3>
              <h4>Bachelor of Electrical Engineering</h4>
              <p>
                Focused on Industrial Automation, Artificial Intelligence,
                Industrial IoT, Embedded Systems, Networking, and Software Engineering.
              </p>
            </div>
          </div>

          <div className="about-education-item">
            <span className="education-year">2020 - 2023</span>
            <div className="education-content">
              <h3>SMK KR Harapan Sejati</h3>
              <h4>Industrial Electronics Engineering</h4>
              <p>
                Learned PLC programming, industrial electrical systems,
                electronics, automation, and control systems.
              </p>
            </div>
          </div>

          <div className="about-education-item">
            <span className="education-year">2017 - 2020</span>
            <div className="education-content">
              <h3>SMP Negeri 40 Surabaya</h3>
              <h4>Junior High School</h4>
              <p>
                Built foundation in science, mathematics, leadership,
                and teamwork through school activities.
              </p>
            </div>
          </div>

          <div className="about-education-item">
            <span className="education-year">2011 - 2017</span>
            <div className="education-content">
              <h3>SD Negeri Jeruk Surabaya</h3>
              <h4>Elementary School</h4>
              <p>
                Developed curiosity in science, math, and technology.
              </p>
            </div>
          </div>

          <div className="about-education-item">
            <span className="education-year">2008 - 2011</span>
            <div className="education-content">
              <h3>Excellent Children Driyorejo</h3>
              <h4>Kindergarten</h4>
              <p>
                First step of my education journey.
              </p>
            </div>
          </div>

        </div>
      </div>

            {/* ================= LANGUAGES + SKILLS GRID ================= */}
      <div className="about-grid">

        {/* ================= LANGUAGES ================= */}
        <div className="about-card">

          <h2>
            <FaLanguage />
            Languages
          </h2>

          <div className="language-item">
            <span>🇮🇩 Indonesian</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: "100%" }}></div>
            </div>
          </div>

          <div className="language-item">
            <span>🇺🇸 English</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="language-item">
            <span>🇯🇵 Japanese (Learning)</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: "25%" }}></div>
            </div>
          </div>

        </div>

        {/* ================= SOFT SKILLS ================= */}
        <div className="about-card">

          <h2>
            <FaUsers />
            Soft Skills
          </h2>

          <div className="skill-tags">
            <span>Leadership</span>
            <span>Critical Thinking</span>
            <span>Problem Solving</span>
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Adaptability</span>
            <span>Project Management</span>
            <span>Creativity</span>
            <span>Time Management</span>
          </div>

        </div>

        {/* ================= TECHNICAL SKILLS ================= */}
        <div className="about-card">

          <h2>
            <FaLaptopCode />
            Technical Skills
          </h2>

          <div className="skill-tags">
            <span>PLC Siemens</span>
            <span>Arduino</span>
            <span>ESP32</span>
            <span>Industrial IoT</span>
            <span>MQTT</span>
            <span>Node-RED</span>
            <span>Python</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>Linux</span>
            <span>Git & GitHub</span>
            <span>Networking</span>
            <span>AI / ML</span>
            <span>Computer Vision</span>
          </div>

        </div>

      </div>

            {/* ================= ACHIEVEMENTS ================= */}
      <div className="achievement-section">

        <div className="section-small-title">
          <FaAward />
          <h2>Achievements</h2>
        </div>

        <div className="achievement-grid">

          <div className="achievement-card">
  <h3>20+</h3>
  <span>Engineering Projects</span>
</div>

<div className="achievement-card">
  <h3>15+</h3>
  <span>Technologies Mastered</span>
</div>

<div className="achievement-card">
  <h3>5+</h3>
  <span>Engineering Fields</span>
</div>

<div className="achievement-card">
  <h3>{getAge()}</h3>
  <span>Years Old</span>
</div>
        </div>

      </div>

      {/* ================= ABOUT EXTRA ================= */}
<div className="about-extra">

  <div className="about-card">
    <h2>Career Vision</h2>
    <p>
      My goal is to become an Automation & Artificial Intelligence Engineer
      who can integrate Industrial Automation, Embedded Systems,
      Cloud Computing, and AI into real Industry 4.0 solutions.
    </p>
  </div>

  <div className="about-card">
    <h2>Current Focus</h2>
    <p>
      Currently focusing on Industrial IoT, PLC Siemens,
      Node-RED, MQTT, Computer Vision,
      Machine Learning, React, and Python.
    </p>
  </div>

  <div className="about-card">
    <h2>Personal Values</h2>
    <p>
      I believe in continuous learning,
      discipline, teamwork and innovation
      as the foundation of becoming a strong engineer.
    </p>
  </div>

</div> {/* about-extra */}

</div> {/* about-content */}

</div> {/* about-top */}

</section>

);
}

export default About;