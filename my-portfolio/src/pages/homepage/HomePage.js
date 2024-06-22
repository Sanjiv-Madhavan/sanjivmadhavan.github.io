import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Typing from "./Typing";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import AboutContainer from "../../components/aboutme/AboutContainer";
import Particle from "../../Particle";

export default function Home() {
    return (
      <ParallaxProvider>
        <section className="home-section">
          <Container fluid id="home">
            <Container className="home-content">
              <Row className="rowContainer">
                <Col md={7} className="home-header">
                  <Parallax speed={10}>
                    <h1
                      style={{ paddingBottom: 15, fontSize: "175px" }}
                      className="heading"
                    >
                      Hi There!{" "}
                      <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                      </span>
                    </h1>
                  </Parallax>

                  <Parallax speed={10}>
                    <h1 className="heading-name">
                      I'M
                      <strong className="main-name"> Sanjiv Sethu Madhavan </strong>
                    </h1>
                  </Parallax>

                  <Parallax speed={10}>
                    <div className="typing-homeclass">
                      <Typing />
                    </div>
                  </Parallax>
                  <Parallax speed={30}>
                  <div className="sociallink-home">
                    <ul className="homeaboutsociallinks">
                      <li className="socialicons">
                        <a
                          href="https://github.com/sanjiv-madhavan"
                          target="_blank"
                          rel="noreferrer"
                          className="iconcolour  homesocialicons"
                        >
                          <FaGithub />
                        </a>
                      </li>
                      <li className="socialicons">
                        <a
                          href="https://www.linkedin.com/in/sanjivmadhavan"
                          target="_blank"
                          rel="noreferrer"
                          className="iconcolour  homesocialicons"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      <li className="socialicons">
                        <a
                          href="https://leetcode.com/SanjivMadhavan/"
                          target="_blank"
                          rel="noreferrer"
                          className="iconcolour homesocialicons"
                        >
                          <SiLeetcode />
                        </a>
                      </li>
                      <li className="socialicons">
                        <a
                          href="mailto:sanjivmadhavan@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                          className="iconcolour homesocialicons"
                        >
                          <FiMail />
                        </a>
                      </li>
                      <li className="socialicons">
                        <a
                          href="https://www.instagram.com/sanjivmadhavan"
                          target="_blank"
                          rel="noreferrer"
                          className="iconcolour homesocialicons"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                  </Parallax>
                </Col>
                <Col md={3} style={{ paddingBottom: 20, paddingLeft: 50 }}>
                  <div className="img-home-main">
                    <Tilt>
                      <Parallax speed={30}>
                        <img
                          src="./dudu.jpg"
                          alt="home pic"
                          className="img-fluid"
                        />
                      </Parallax>
                    </Tilt>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
          <Parallax speed={30}>
            <AboutContainer />
          </Parallax>
        </section>
      </ParallaxProvider>
    );
}
