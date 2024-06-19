import React from 'react';
import Particles from "react-tsparticles";

const Particle = () => {
    return (
        <Particles
            params={{
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 50,
                        enable: true,
                        opacity: 0.5,
                        width: 0.5,
                    },
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: true,
                        opacity: 0.03,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.4,
                        straight: false,
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                            quantity: 10,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default Particle;
