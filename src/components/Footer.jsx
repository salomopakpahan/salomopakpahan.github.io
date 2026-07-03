import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUniversity,
  FaBolt,
  FaRobot,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h1>SPARKLAB</h1>

        <span className="footer-subtitle">
          Automation • Artificial Intelligence • Industrial IoT
        </span>

        <p className="footer-quote">
          Engineering the Future with Intelligence and Automation.
        </p>

        <div className="footer-divider"></div>

        <div className="footer-info">

          <div>
            <FaMapMarkerAlt />
            <span>Surabaya, Indonesia</span>
          </div>

          <div>
            <FaUniversity />
            <span>Petra Christian University</span>
          </div>

          <div>
            <FaBolt />
            <span>Available for Internship & Collaboration</span>
          </div>

          <div>
            <FaRobot />
            <span>Industrial Automation & AI Engineer</span>
          </div>

        </div>

        <div className="footer-socials">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <p>
            © 2026 Salomo Fransiskus Pakpahan
          </p>

          <span>
            Designed & Developed with React + Vite
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;