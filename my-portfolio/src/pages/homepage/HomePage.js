import Particle from "../../Particle";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typing from "./Typing";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import Tilt from "react-parallax-tilt";

export default function Home() {
    return (
      <section className="home-section"> 
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <Row className="rowContainer">
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sanjiv Sethu Madhavan </strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
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
            </Col>
            <Col md={3} style={{ paddingBottom: 20, paddingLeft: 50 }}>
              <div className="img-home-main">
                <Tilt>
                <img
                    src="./dudu.jpg"
                    alt="home pic"
                    className="img-fluid"
                  />
                </Tilt>
              </div>
            </Col>
            </Row>
          </Container>
        </Container>
      </section>
    )
}