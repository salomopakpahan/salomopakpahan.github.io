import "./Projects.css";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [

{
title:"Smart Conveyor Monitoring",

tech:"PLC Siemens • Node-RED • MQTT • ESP32",

desc:"Industrial conveyor monitoring system with real-time dashboard, Telegram notification, Email alert, and production monitoring.",

image:"https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800"

},

{
title:"Hybrid AI Stunting Prediction",

tech:"Python • Decision Tree • NFIS",

desc:"Artificial Intelligence system for predicting child stunting risk using hybrid Decision Tree and Neuro Fuzzy Inference System.",

image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"

},

{
title:"Smart Greenhouse IoT",

tech:"ESP32 • MQTT • NodeRED",

desc:"Automatic greenhouse with temperature, humidity and soil monitoring connected to cloud dashboard.",

image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"

},

{
title:"Solar Tracking System",

tech:"Arduino • Servo • LDR",

desc:"Automatic solar panel tracking system using dual LDR sensors to maximize solar energy efficiency.",

image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800"

},

{
title:"Factory Automation",

tech:"PLC Siemens",

desc:"Industrial automation using Siemens PLC with HMI, conveyor control, sensors and actuators.",

image:"https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800"

},

{
title:"Temperature Monitoring",

tech:"ESP32 • MQTT",

desc:"Real-time temperature monitoring with Telegram, Email and Node-RED Dashboard.",

image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"

},

{
title:"Smart Parking IoT",

tech:"ESP32 • RFID",

desc:"IoT parking system with RFID authentication and monitoring dashboard.",

image:"https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"

},

{
title:"Portfolio Website",

tech:"React • CSS",

desc:"Modern personal portfolio website with premium UI, responsive layout and animation.",

image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"

}

];

function Projects(){

return(

<section id="projects" className="projects">

<div className="projects-container">

<h2>

Featured Projects

</h2>

<p className="project-subtitle">

Here are some selected projects that demonstrate my experience in Industrial Automation, IoT, Artificial Intelligence, Embedded Systems and Web Development.

</p>

<div className="project-grid">

{projects.map((project,index)=>(

<div className="project-card" key={index}>

<img src={project.image} alt={project.title}/>

<div className="project-content">

<h3>

{project.title}

</h3>

<span>

{project.tech}

</span>

<p>

{project.desc}

</p>

<div className="project-buttons">

<button>

<FaGithub/>

Github

</button>

<button>

<FaExternalLinkAlt/>

Demo

</button>

</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default Projects;