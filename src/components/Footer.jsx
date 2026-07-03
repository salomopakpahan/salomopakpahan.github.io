import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>SPARKLAB</h2>

      <p>
        Building the future through
        Automation, Artificial Intelligence,
        and Industrial IoT.
      </p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-socials">
        <a href="https://github.com/" target="_blank">
          Github
        </a>

        <a href="https://linkedin.com/" target="_blank">
          LinkedIn
        </a>

        <a href="mailto:your@email.com">
          Email
        </a>
      </div>

      <span>
        © 2026 Salomo Fransiskus Pakpahan
      </span>

    </footer>
  );
}

export default Footer;