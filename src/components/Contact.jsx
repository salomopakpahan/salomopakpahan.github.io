import "./Contact.css";

import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  return (

<section id="contact" className="contact">

<div className="contact-container">

<h2>

Let's Connect

</h2>

<p className="contact-subtitle">

I'm always open to discussing new opportunities, collaboration,
industrial automation projects, IoT solutions, or simply connecting
with fellow developers and engineers.

</p>

<div className="contact-grid">

<div className="contact-card">

<FaEnvelope/>

<h3>Email</h3>

<p>

pakpahansalomo2@gmail.com

</p>

<a href="mailto:pakpahansalomo2@gmail.com">

Send Email

</a>

</div>

<div className="contact-card">

<FaWhatsapp/>

<h3>WhatsApp</h3>

<p>

082140865618

</p>

<a
href="https://wa.me/6282140865618"
target="_blank"
rel="noreferrer"
>

Chat Now

</a>

</div>

<div className="contact-card">

<FaInstagram/>

<h3>Instagram</h3>

<p>

@frans_salomo

</p>

<a
href="https://www.instagram.com/frans_salomo/"
target="_blank"
rel="noreferrer"
>

Visit Profile

</a>

</div>

<div className="contact-card">

<FaGithub/>

<h3>GitHub</h3>

<p>

github.com/salomopakpahan

</p>

<a
href="https://github.com/salomopakpahan"
target="_blank"
rel="noreferrer"
>

View Projects

</a>

</div>

</div>

<div className="contact-message">

<h3>

Have an exciting idea?

</h3>

<p>

Let's build something amazing together.
Whether it's an IoT solution, automation system,
web application, or AI project,
I'm always ready for the next challenge.

</p>

<a
href="mailto:pakpahansalomo2@gmail.com"
className="contact-button"
>

<FaPaperPlane/>

Let's Talk

</a>

</div>

</div>

</section>

)

}

export default Contact;