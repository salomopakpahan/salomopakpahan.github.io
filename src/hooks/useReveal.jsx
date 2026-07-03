import { useEffect } from "react";

function useReveal() {

  useEffect(() => {

    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

          }

        });

      },

      {

        threshold: 0.15,

      }

    );

    sections.forEach((section) => {

      observer.observe(section);

    });

    return () => observer.disconnect();

  }, []);

}

export default useReveal;