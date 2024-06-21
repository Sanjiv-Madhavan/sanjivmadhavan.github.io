import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Go/K8s Developer",
                    "Frontend Developer",
                    "Ex - SAP Labs",
                ],
                autoStart: true,
                loop: true,
                delay: 1
            }}
        />
    );
}

export default Typing;
