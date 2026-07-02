import "./Hero.css";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-left">

          <p className="hello">
            SOFTWARE • AUTOMATION • AI
          </p>

          <h1>
            Salomo
            <br />
            Pakpahan
          </h1>

          <span className="typing">
            Automation Engineer • IoT Developer
          </span>

          <p className="desc">
            I specialize in Industrial IoT, PLC Automation, Embedded Systems,
            Artificial Intelligence, Networking, and Full-Stack Web Development.
            I enjoy building intelligent solutions that bridge hardware and
            software to solve real-world industrial challenges.
          </p>

          <div className="btn-group">

           <a
            href="/CV_Salomo.pdf"
            download
            className="cv-btn"
           >
            Download CV
</a>

            <a
              href="#contact"
              className="contact-btn"
            >
              Let's Talk
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="photo">
            <img src={profile} alt="Salomo" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;