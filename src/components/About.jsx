import "./About.css";

import profile from "../assets/profile.jpg";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaMicrochip,
  FaProjectDiagram,
  FaUserGraduate,
  FaAward,
} from "react-icons/fa";

function About() {

  return (

<section id="about" className="about">

<div className="about-container">

<h2>

About Me

</h2>

<div className="about-top">

<div className="about-image">

<img src={profile} alt="Salomo"/>

</div>

<div className="about-text">

<h3>

Who am I?

</h3>

<p>

I am <span>Salomo Fransiskus Pakpahan</span>, an Electrical Engineering undergraduate with a passion for Industrial Internet of Things (IIoT), Automation Systems, Embedded Systems, Artificial Intelligence, Networking, and Software Development.

</p>

<p>

I enjoy transforming ideas into practical solutions by integrating hardware and software to create intelligent systems. Throughout my academic journey, I have worked on various projects involving Siemens PLC, Arduino, ESP32, MQTT, Node-RED, Python, and React.

</p>

<p>

My long-term goal is to become an Automation & Artificial Intelligence Engineer who contributes to the advancement of Industry 4.0 by developing smart technologies that improve industrial efficiency and everyday life.

</p>

</div>

</div>

<div className="about-cards">

<div className="about-card">

<FaGraduationCap/>

<h3>Education</h3>

<p>

Bachelor of Electrical Engineering

<br/>

Widya Mandala Catholic University

</p>

</div>

<div className="about-card">

<FaLaptopCode/>

<h3>Specialization</h3>

<p>

Industrial IoT

<br/>

PLC Automation

<br/>

Embedded System

<br/>

Artificial Intelligence

</p>

</div>

<div className="about-card">

<FaMicrochip/>

<h3>Tools</h3>

<p>

Arduino

<br/>

ESP32

<br/>

Node-RED

<br/>

MQTT

<br/>

React

</p>

</div>

</div>

<div className="stats">

<div className="stat">

<FaProjectDiagram/>

<h1>20+</h1>

<p>Projects</p>

</div>

<div className="stat">

<FaAward/>

<h1>10+</h1>

<p>Technologies</p>

</div>

<div className="stat">

<FaUserGraduate/>

<h1>3+</h1>

<p>Years Learning</p>

</div>

<div className="stat">

<FaGraduationCap/>

<h1>100%</h1>

<p>Passion</p>

</div>

</div>

</div>

</section>

  )

}

export default About;