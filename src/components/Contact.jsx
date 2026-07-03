import "./Contact.css";

import {
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCircle,
  FaWhatsapp,
} from "react-icons/fa";

import useClock from "../hooks/useClock";

function Contact() {

  const {
    hour,
    minute,
    second,
    day,
    date,
    month,
    year
  } = useClock();

  return (

    <section
      id="contact"
      className="contact reveal"
    >

      {/* ================= TITLE ================= */}

      <div className="contact-title">

        <p>
          LET'S CONNECT
        </p>

        <h2>
          Let's Build Something Amazing Together
        </h2>

      </div>

      {/* ================= CONTAINER ================= */}

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <div className="status-card">

            <div className="status-top">

              <FaCircle />

              <h3>
                Available for Internship
              </h3>

            </div>

            <p>
              Open to Internship, Collaboration,
              Research Projects, Industrial Automation,
              Artificial Intelligence and Industrial IoT Development.
            </p>

          </div>

          <div className="contact-info">

            <div className="info">

              <FaMapMarkerAlt />

              <div>

                <h4>Location</h4>

                <span>
                  Surabaya, Indonesia
                </span>

              </div>

            </div>

            <div className="info">

              <FaClock />

              <div>

                <h4>Jakarta Time</h4>

                <span>
                  {hour}:{minute}:{second} WIB
                </span>

              </div>

            </div>

            <div className="info">

              <FaClock />

              <div>

                <h4>Today</h4>

                <span>
                  {day}, {date} {month} {year}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-right">

          {/* WHATSAPP */}

          <a
            href="https://wa.me/6282140865618?text=Hello%20Salomo,%20I%20visited%20your%20portfolio%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="social-card whatsapp-card"
          >

            <FaWhatsapp />

            <div>

              <h3>WhatsApp</h3>

              <p>
                +62 821-4086-5618
              </p>

            </div>

          </a>

          {/* EMAIL */}

          <a
            href="mailto:pakpahansalomo2@gmail.com"
            className="social-card"
          >

            <FaEnvelope />

            <div>

              <h3>Email</h3>

              <p>
                pakpahansalomo2@gmail.com
              </p>

            </div>

          </a>

          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/frans_salomo"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >

            <FaInstagram />

            <div>

              <h3>Instagram</h3>

              <p>
                @frans_salomo
              </p>

            </div>

          </a>

          {/* TELEGRAM */}

          <a
            href="https://t.me/s234567812"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >

            <FaTelegramPlane />

            <div>

              <h3>Telegram</h3>

              <p>
                @s234567812
              </p>

            </div>

          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/salomopakpahan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >

            <FaGithub />

            <div>

              <h3>Github</h3>

              <p>
                github.com/salomopakpahan
              </p>

            </div>

          </a>

        </div>

      </div>

    </section>

  );
}

export default Contact;