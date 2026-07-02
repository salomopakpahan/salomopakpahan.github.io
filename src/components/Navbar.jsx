import "./Navbar.css";
import { useEffect,useState } from "react";

function Navbar(){
  
const [scroll,setScroll]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setScroll(window.scrollY>50);

};

window.addEventListener("scroll",handleScroll);

return ()=>window.removeEventListener("scroll",handleScroll);

},[]);


return(

<nav className={scroll ? "navbar active":"navbar"}>

<div className="nav-container">

<div className="logo">

Salomo

</div>

<ul className="nav-links">

<li><a href="#home">Home</a></li>

<li><a href="#about">About</a></li>

<li><a href="#skills">Skills</a></li>

<li><a href="#projects">Projects</a></li>

<li><a href="#contact">Let's Talk</a></li>

</ul>

</div>

</nav>

)

}

export default Navbar;