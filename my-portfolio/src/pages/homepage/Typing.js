import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Golang/Kubernetes Developer",
                    "Frontend Developer",
                    "SAP Labs",
                    "University of Birmingham",
                ],
                autoStart: true,
                loop: true,
                delay: 1
            }}
        />
    );
}

export default Typing;
