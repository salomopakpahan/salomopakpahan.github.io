import "./Experience.css";

import {
  FaLaptopCode,
  FaNetworkWired,
  FaRobot,
  FaMicrochip,
} from "react-icons/fa";

const experiences = [
  {
    year: "2023",
    icon: <FaMicrochip />,
    title: "Embedded System Developer",
    company: "Personal & University Projects",
    desc:
      "Started learning Arduino, ESP32, sensors, embedded programming, PCB design, and electronic circuit development.",
  },
  {
    year: "2024",
    icon: <FaNetworkWired />,
    title: "Network Engineer",
    company: "Huawei eNSP Laboratory",
    desc:
      "Studied Routing, Switching, VLAN, ACL, NAT, IPv4, IPv6, OSPF, DHCP, and Enterprise Network.",
  },
  {
    year: "2025",
    icon: <FaRobot />,
    title: "Artificial Intelligence Developer",
    company: "Petra Christian University",
    desc:
      "Built AI projects including Decision Tree, Neuro Fuzzy, Computer Vision, Machine Learning, and IoT Intelligence.",
  },
  {
    year: "2026",
    icon: <FaLaptopCode />,
    title: "Industrial Automation Engineer",
    company: "PLC Siemens • Node-RED • MQTT",
    desc:
      "Developing Smart Factory, SCADA Dashboard, IIoT, MES, Industrial Monitoring and Automation Systems.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience reveal">

      <div className="experience-header">

        <p>CAREER JOURNEY</p>

        <h2>Experience Timeline</h2>

      </div>

      <div className="experience-timeline">

        {experiences.map((item, index) => (

          <div className="experience-item" key={index}>

            <div className="experience-icon">

              {item.icon}

            </div>

            <div className="experience-content">

              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;
