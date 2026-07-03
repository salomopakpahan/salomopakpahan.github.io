import "./Contact.css";

import {

FaInstagram,

FaTelegramPlane,

FaGithub,

FaEnvelope,

FaMapMarkerAlt,

FaClock,

FaCircle

} from "react-icons/fa";

import useClock from "../hooks/useClock";

function Contact(){

const{

hour,

minute,

second,

day,

date,

month,

year

}=useClock();

return(

<section
id="contact"
className="contact reveal"
>

<div className="contact-title">

<p>

LET'S CONNECT

</p>

<h2>

Let's Build Something Amazing Together

</h2>

</div>

<div className="contact-container">

<div className="contact-left">

<div className="status-card">

<div className="status-top">

<FaCircle/>

<h3>

Available for Internship

</h3>

</div>

<p>

Open to Internship, Collaboration,
Research Project, Industrial Automation,
Artificial Intelligence and IoT Development.

</p>

</div>

<div className="contact-info">

<div className="info">

<FaMapMarkerAlt/>

<div>

<h4>

Location

</h4>

<span>

Surabaya, Indonesia

</span>

</div>

</div>

<div className="info">

<FaClock/>

<div>

<h4>

Jakarta Time

</h4>

<span>

{hour}:{minute}:{second} WIB

</span>

</div>

</div>

<div className="info">

<FaClock/>

<div>

<h4>

Today

</h4>

<span>

{day}, {date} {month} {year}

</span>

</div>

</div>

</div>

</div>

<div className="contact-right">

<a

href="mailto:c11230015@john.petra.ac.id"

className="social-card"

>

<FaEnvelope/>

<div>

<h3>Email</h3>

<p>

c11230015@john.petra.ac.id

</p>

</div>

</a>

<a

href="https://www.instagram.com/frans_salomo"

target="_blank"

className="social-card"

>

<FaInstagram/>

<div>

<h3>Instagram</h3>

<p>

@frans_salomo

</p>

</div>

</a>

<a

href="https://t.me/s234567812"

target="_blank"

className="social-card"

>

<FaTelegramPlane/>

<div>

<h3>Telegram</h3>

<p>

@s234567812

</p>

</div>

</a>

<a

href="https://github.com/salomopakpahan"

target="_blank"

className="social-card"

>

<FaGithub/>

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

)

}

export default Contact;