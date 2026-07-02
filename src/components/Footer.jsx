import "./Footer.css";

import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {

  return (

<footer className="footer">

<div className="footer-container">

<h2>

Salomo

</h2>

<p>

Electrical Engineering Student

</p>

<span>

Industrial IoT • PLC Automation • Artificial Intelligence • Embedded System • Web Development

</span>

<div className="footer-social">

<a
href="https://github.com/salomopakpahan"
target="_blank"
rel="noreferrer"
>

<FaGithub/>

</a>

<a
href="https://www.instagram.com/frans_salomo/"
target="_blank"
rel="noreferrer"
>

<FaInstagram/>

</a>

<a
href="mailto:pakpahansalomo2@gmail.com"
>

<FaEnvelope/>

</a>

</div>

<hr/>

<p className="copyright">

© 2026 Salomo Fransiskus Pakpahan

</p>

<p className="made">

Designed & Developed with

<FaHeart/>

using React

</p>

</div>

</footer>

  )

}

export default Footer;