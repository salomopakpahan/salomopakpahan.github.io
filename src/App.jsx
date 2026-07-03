import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ScrollProgress from "./components/ScrollProgress";
import useReveal from "./hooks/useReveal";
import BackToTop from "./components/BackToTop";
import Experience from "./components/Experience";
import { useEffect } from "react";
import ParticlesBackground from "./components/ParticlesBackground";

import "./App.css";

function App() {

  useEffect(()=>{

    const reveals =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },
            {
                threshold:0.15
            }
        );

    reveals.forEach(
        el=>observer.observe(el)
    );

    return ()=>observer.disconnect();

},[]);


  useReveal();

  return (

    <div className="app">

      <Loading/>

      <ScrollProgress/>

       <ParticlesBackground />

      <Navbar/>

      <Hero/>

      <About/>

      <Skills/>

      <Projects/>

      <Experience/>

      <Contact/>

      <BackToTop/>

      <Footer/>

    </div>

  )

}

export default App;

