import "./Projects.css";

import {
FaGithub,
FaExternalLinkAlt,
FaStar,
} from "react-icons/fa";

const projects=[

{
title:"Industrial Conveyor Monitoring System",
year:"2026",
level:"Advanced",
image:"https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800",
description:
"Industrial conveyor monitoring using Siemens PLC, ESP32, MQTT, Node-RED Dashboard and Email/Telegram notification.",
tech:[
"PLC Siemens",
"ESP32",
"MQTT",
"Node-RED",
"React"
]
},

{
title:"AI Quality Inspection",
year:"2026",
level:"Advanced",
image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
description:
"YOLO based product defect detection integrated with Industrial Automation.",
tech:[
"Python",
"YOLO",
"OpenCV",
"AI"
]
},

{
title:"Smart Greenhouse",
year:"2025",
level:"Intermediate",
image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
description:
"IoT greenhouse with temperature, humidity and soil monitoring.",
tech:[
"ESP32",
"MQTT",
"NodeRED",
"DHT11"
]
},

{
title:"Smart Parking System",
year:"2025",
level:"Intermediate",
image:"https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800",
description:
"Automatic parking monitoring using ESP32 and ultrasonic sensors.",
tech:[
"ESP32",
"IoT",
"Arduino"
]
},

{
title:"AI Stunting Prediction",
year:"2025",
level:"Advanced",
image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
description:
"Decision Tree and Neuro Fuzzy Inference System for stunting prediction.",
tech:[
"Python",
"Decision Tree",
"NFIS",
"AI"
]
},

{
title:"Network Infrastructure Simulation",
year:"2025",
level:"Intermediate",
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
description:
"Enterprise Routing, Switching, VLAN, ACL and IPv6 using Huawei eNSP.",
tech:[
"Huawei",
"Routing",
"Switching",
"ACL"
]
}

];

function Projects(){

return(

<section
id="projects"
className="projects reveal"
>

<div className="project-title">

<p>

MY PORTFOLIO

</p>

<h2>

Featured Projects

</h2>

</div>

<div className="project-grid">

{

projects.map((project,index)=>(

<div
className="project-card"
key={index}
>

<img
src={project.image}
alt={project.title}
/>

<div className="project-content">

<div className="project-head">

<h3>

{project.title}

</h3>

<span>

{project.year}

</span>

</div>

<p>

{project.description}

</p>

<div className="badge-group">

{

project.tech.map((item,i)=>(

<span key={i}>

{item}

</span>

))

}

</div>

<div className="level">

<FaStar/>

<FaStar/>

<FaStar/>

<FaStar/>

<FaStar/>

<span>

{project.level}

</span>

</div>

<div className="project-button">

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

))

}

</div>

</section>

)

}

export default Projects;