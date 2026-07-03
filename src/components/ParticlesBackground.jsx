import { useMemo } from "react";
import Particles from "@tsparticles/react";

function ParticlesBackground() {
  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: -1,
    },

    background: {
      color: {
        value: "#050505",
      },
    },

    particles: {
      number: {
        value: 60,
      },

      color: {
        value: "#d4af37",
      },

      opacity: {
        value: 0.25,
      },

      size: {
        value: {
          min: 1,
          max: 3,
        },
      },

      move: {
        enable: true,
        speed: 0.4,
      },

      links: {
        enable: true,
        color: "#d4af37",
        opacity: 0.15,
        distance: 150,
      },
    },
  }), []);

  return <Particles options={options} />;
}

export default ParticlesBackground;