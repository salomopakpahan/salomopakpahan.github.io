import "./Navbar.css";

import { useEffect, useState } from "react";
import useClock from "../hooks/useClock";

import {
  FaClock,
  FaMapMarkerAlt,
  FaCircle,
} from "react-icons/fa";

function Navbar() {

  const [active, setActive] = useState(false);

  const [weather, setWeather] = useState("--");
  const [temperature, setTemperature] = useState("--");

  const {
    day,
    date,
    month,
    year,
    hour,
    minute,
    second,
  } = useClock();

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 30) {
        setActive(true);
      } else {
        setActive(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  /* ================= WEATHER ================= */

  useEffect(() => {

  const getWeather = async () => {

    try {

      const response = await fetch(
        "https://wttr.in/Surabaya?format=j1"
      );

      const data = await response.json();

      setTemperature(
        data.current_condition[0].temp_C
      );

      setWeather(
        data.current_condition[0].weatherDesc[0].value
      );

    } catch (error) {

      console.log("Weather Error:", error);

      setTemperature("30");
      setWeather("Sunny");

    }

  };

  getWeather();

}, []);

  return (

    <nav className={active ? "navbar active" : "navbar"}>

      <div className="logo">

        <h1>SPARKLAB</h1>

        <span>
          Automation • AI • IoT
        </span>

      </div>

      <ul>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Let's Talk</a>
        </li>

      </ul>

      <div className="navbar-info">

        <div className="status">
          <FaCircle />
          ONLINE
        </div>

        <div className="clock">
          <FaClock />
          {hour}:{minute}:{second} WIB
        </div>

        <div className="date">
          {day}, {date} {month} {year}
        </div>

        <div className="location">
          <FaMapMarkerAlt />
          Surabaya
        </div>

        {/* WEATHER */}

        <div className="weather">
          🌤 {temperature}°C • {weather}
        </div>

      </div>

    </nav>

  );

}

export default Navbar;