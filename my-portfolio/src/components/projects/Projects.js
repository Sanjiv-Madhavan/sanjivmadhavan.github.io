import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Slide, Zoom } from "react-awesome-reveal";
import nyc from "../../images/nyc.png";
import { FaCode } from "react-icons/fa";

export default function ProjectsComponent() {
    return (
        <div>
            <Container className="home-about-section">
                <Container fluid>
                    <Row>
                        <Col md={12} className="d-flex justify-contents-start">
                            <Slide direction="right">
                                <Zoom left cascade>
                                    <h1 className="aboutme-heading d-flex justify-content-start">Projects</h1>
                                </Zoom>
                            </Slide>
                        </Col>
                        <Col md={3} className="mt-4">
                            <div className="projectTile"
                                style={{
                                    backgroundColor: "rgb(142 70 186 / 31%)",
                                    border: "1px solid",
                                }}>
                                <div className="projectContent">
                                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                        Kubectl
                                    </h5>
                                    <img src={nyc}></img>
                                    <div className="project--showcaseBtn">
                                        <a
                                            href={
                                                "https://github.com/Sanjiv-Madhavan"
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className={"iconBtn"}
                                            aria-labelledby={`code`}
                                        >
                                            <FaCode
                                                id={`code`}
                                                className={"icon"}
                                                aria-label="Code"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <h6>
                                    <p className="project-desc"
                                        style={{
                                            color: "#b061df",
                                            backgroundColor: "#fbd9ad"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis ullamcorper nibh. Vestibulum pretium luctus accumsan. In eleifend vel tellus non dictum. Aenean sapien nunc, vehicula ac rhoncus ac, mattis eu dui. Duis venenatis magna a est blandit, ac ornare nibh lobortis.
                                    </p>
                                </h6>
                                <div className="project-tags" style={{
                                    color: "#b061df",
                                    backgroundColor: "#fbd9ad"
                                }}
                                >HTML, CSS, SCSS, React, JavaScript</div>
                            </div>
                        </Col>
                        <Col md={3} className="mt-4">
                            <div className="projectTile"
                                style={{
                                    backgroundColor: "rgb(142 70 186 / 31%)",
                                    border: "1px solid",
                                }}>
                                <div className="projectContent">
                                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                        Kubectl
                                    </h5>
                                    <img src={nyc}></img>
                                    <div className="project--showcaseBtn">
                                        <a
                                            href={
                                                "https://github.com/Sanjiv-Madhavan"
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className={"iconBtn"}
                                            aria-labelledby={`code`}
                                        >
                                            <FaCode
                                                id={`code`}
                                                className={"icon"}
                                                aria-label="Code"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <h6>
                                    <p className="project-desc"
                                        style={{
                                            color: "#b061df",
                                            backgroundColor: "#fbd9ad"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis ullamcorper nibh. Vestibulum pretium luctus accumsan. In eleifend vel tellus non dictum. Aenean sapien nunc, vehicula ac rhoncus ac, mattis eu dui. Duis venenatis magna a est blandit, ac ornare nibh lobortis.
                                    </p>
                                </h6>
                                <div className="project-tags" style={{
                                    color: "#b061df",
                                    backgroundColor: "#fbd9ad"
                                }}
                                >HTML, CSS, SCSS, React, JavaScript</div>
                            </div>
                        </Col>
                        <Col md={3} className="mt-4">
                            <div className="projectTile"
                                style={{
                                    backgroundColor: "rgb(142 70 186 / 31%)",
                                    border: "1px solid",
                                }}>
                                <div className="projectContent">
                                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                        Kubectl
                                    </h5>
                                    <img src={nyc}></img>
                                    <div className="project--showcaseBtn">
                                        <a
                                            href={
                                                "https://github.com/Sanjiv-Madhavan"
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className={"iconBtn"}
                                            aria-labelledby={`code`}
                                        >
                                            <FaCode
                                                id={`code`}
                                                className={"icon"}
                                                aria-label="Code"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <h6>
                                    <p className="project-desc"
                                        style={{
                                            color: "#b061df",
                                            backgroundColor: "#fbd9ad"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis ullamcorper nibh. Vestibulum pretium luctus accumsan. In eleifend vel tellus non dictum. Aenean sapien nunc, vehicula ac rhoncus ac, mattis eu dui. Duis venenatis magna a est blandit, ac ornare nibh lobortis.
                                    </p>
                                </h6>
                                <div className="project-tags" style={{
                                    color: "#b061df",
                                    backgroundColor: "#fbd9ad"
                                }}
                                >HTML, CSS, SCSS, React, JavaScript</div>
                            </div>
                        </Col>
                        <Col md={3} className="mt-4">
                            <div className="projectTile"
                                style={{
                                    backgroundColor: "rgb(142 70 186 / 31%)",
                                    border: "1px solid",
                                }}>
                                <div className="projectContent">
                                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                        Kubectl
                                    </h5>
                                    <img src={nyc}></img>
                                    <div className="project--showcaseBtn">
                                        <a
                                            href={
                                                "https://github.com/Sanjiv-Madhavan"
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className={"iconBtn"}
                                            aria-labelledby={`code`}
                                        >
                                            <FaCode
                                                id={`code`}
                                                className={"icon"}
                                                aria-label="Code"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <h6>
                                    <p className="project-desc"
                                        style={{
                                            color: "#b061df",
                                            backgroundColor: "#fbd9ad"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis ullamcorper nibh. Vestibulum pretium luctus accumsan. In eleifend vel tellus non dictum. Aenean sapien nunc, vehicula ac rhoncus ac, mattis eu dui. Duis venenatis magna a est blandit, ac ornare nibh lobortis.
                                    </p>
                                </h6>
                                <div className="project-tags" style={{
                                    color: "#b061df",
                                    backgroundColor: "#fbd9ad"
                                }}
                                >HTML, CSS, SCSS, React, JavaScript</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}