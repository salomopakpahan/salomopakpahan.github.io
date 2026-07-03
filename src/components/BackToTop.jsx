import "./BackToTop.css";

import { FaArrowUp } from "react-icons/fa";

import { useEffect, useState } from "react";

function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShow(window.scrollY > 500);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <button

      className={show ? "top-btn show" : "top-btn"}

      onClick={scrollTop}

    >

      <FaArrowUp />

    </button>

  );

}

export default BackToTop;