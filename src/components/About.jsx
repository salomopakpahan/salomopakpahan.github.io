import "./About.css";

import profile from "../assets/profile.jpg";
import { getAge } from "../utils/age";

import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUniversity,
  FaBullseye,
  FaLanguage,
  FaUsers,
  FaLaptopCode,
  FaMicrochip,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-title">

        <p>WHO AM I</p>

        <h2>About Me</h2>

      </div>

      <div className="about-top">

        <div className="about-image">

          <img src={profile} alt="Salomo" />

        </div>

        <div className="about-info">

          <h1>Salomo Fransiskus Pakpahan</h1>

          <h3>
            Automation Engineer • AI Developer • IoT Engineer
          </h3>

          <p>

            I am an Electrical Engineering undergraduate at Petra Christian
            University who is passionate about Automation Systems,
            Artificial Intelligence, Industrial Internet of Things,
            PLC Programming, Networking, and Full Stack Development.

            <br /><br />

            I enjoy designing intelligent industrial solutions by integrating
            software and hardware to improve productivity, efficiency,
            and innovation in Industry 4.0.

          </p>

          <div className="info-grid">

            <div>

              <FaBirthdayCake />

              <span>{getAge()} Years Old</span>

            </div>

            <div>

              <FaMapMarkerAlt />

              <span>Surabaya, Indonesia</span>

            </div>

            <div>

              <FaUniversity />

              <span>Petra Christian University</span>

            </div>

            <div>

              <FaBullseye />

              <span>Automation & AI Engineer</span>

            </div>

          </div>

        </div>

      </div>

      <div className="education">

        <h2>

          <FaUserGraduate />

          Education Journey

        </h2>

        <div className="timeline">

          <div className="timeline-item">
            <h3>2023 - Present</h3>
            <p>Petra Christian University</p>
          </div>

          <div className="timeline-item">
            <h3>2020 - 2023</h3>
            <p>SMK KR Harapan Sejati</p>
          </div>

          <div className="timeline-item">
            <h3>2017 - 2020</h3>
            <p>SMPN 40 Surabaya</p>
          </div>

          <div className="timeline-item">
            <h3>2011 - 2017</h3>
            <p>SDN Jeruk Surabaya</p>
          </div>

          <div className="timeline-item">
            <h3>2008 - 2011</h3>
            <p>Excellent Children Driyorejo</p>
          </div>

        </div>

      </div>

      <div className="about-bottom">

        <div className="about-card">

          <h2>

            <FaLanguage />

            Languages

          </h2>

          <div className="skill-line">

            <span>🇮🇩 Indonesian</span>

            <div className="bar">

              <div style={{ width: "100%" }}></div>

            </div>

          </div>

          <div className="skill-line">

            <span>🇺🇸 English</span>

            <div className="bar">

              <div style={{ width: "82%" }}></div>

            </div>

          </div>

        </div>

        <div className="about-card">

          <h2>

            <FaUsers />

            Soft Skills

          </h2>

          <div className="badge-container">

            <span>Leadership</span>

            <span>Public Speaking</span>

            <span>Critical Thinking</span>

            <span>Problem Solving</span>

            <span>Communication</span>

            <span>Teamwork</span>

            <span>Negotiation</span>

            <span>Creativity</span>

            <span>Project Management</span>

            <span>Adaptability</span>

          </div>

        </div>

        <div className="about-card">

          <h2>

            <FaLaptopCode />

            Technical Skills

          </h2>

          <div className="badge-container">

            <span>PLC Siemens</span>

            <span>Arduino</span>

            <span>ESP32</span>

            <span>Industrial IoT</span>

            <span>Artificial Intelligence</span>

            <span>Python</span>

            <span>React</span>

            <span>JavaScript</span>

            <span>Node-RED</span>

            <span>MQTT</span>

            <span>Networking</span>

            <span>Linux</span>

            <span>Git</span>

            <span>Embedded System</span>

            <span>HTML</span>

            <span>CSS</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;