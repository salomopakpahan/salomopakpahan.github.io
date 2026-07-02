import "./Hero.css";

import profile from "../assets/profile.jpg";

import { getAge } from "../utils/age";

import useClock from "../hooks/useClock";

import {

FaMapMarkerAlt,

FaClock,

FaLaptopCode,

FaProjectDiagram,

FaMicrochip,

FaCircle

} from "react-icons/fa";

function Hero(){

const {

hour,

minute,

second

}=useClock();

return(

<section id="home" className="hero">

<div className="hero-container">

<div className="hero-left">

<p className="hero-top">

<FaCircle className="online"/>

AVAILABLE FOR WORK

</p>

<h1>

Salomo

<br/>

Fransiskus

<br/>

Pakpahan

</h1>

<h2>

Automation Engineer

<span>|</span>

AI Developer

<span>|</span>

PLC Programmer

</h2>

<p className="desc">

I design intelligent automation systems by integrating Artificial Intelligence,

Industrial Internet of Things (IIoT), PLC Programming, Embedded Systems,

Computer Networking, and Modern Web Development into real industrial solutions.

</p>

<div className="hero-information">

<div>

<FaMapMarkerAlt/>

<span>Surabaya, Indonesia</span>

</div>

<div>

<FaClock/>

<span>

{hour}:{minute}:{second} WIB

</span>

</div>

<div>

<FaMicrochip/>

<span>

Age {getAge()} Years

</span>

</div>

</div>

<div className="btn-group">

<a

href="/CV_Salomo.pdf"

target="_blank"

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

<div className="hero-stats">

<div>

<FaProjectDiagram/>

<h3>20+</h3>

<p>Projects</p>

</div>

<div>

<FaLaptopCode/>

<h3>30+</h3>

<p>Technologies</p>

</div>

<div>

<FaMicrochip/>

<h3>3+</h3>

<p>Years Learning</p>

</div>

</div>

</div>

<div className="hero-right">

<div className="photo">

<img src={profile} alt="Salomo"/>

</div>

</div>

</div>

</section>

)

}

export default Hero;