import React, { useState } from "react";
import Slide, { Zoom, Fade } from "react-awesome-reveal";
import { Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function About() {
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleSelectedCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    }
    return (
        <Container>
            <Row className="mt-5">
                <Col md={5}>
                    <Slide left>
                        <lottie-player src="https://lottie.host/e1fd401f-5c36-481c-9fc5-b388319e3999/O8hZKukejo.json"
                            background="transparent"
                            speed="1"
                            style={{ width: "100%", height: "90%" }}
                            loop
                            autoplay>
                        </lottie-player>
                    </Slide>
                </Col>
                <Col md={6} className="home-about-body">
                    <Row>
                        <Fade>
                            <Zoom cascade>
                                <p>
                                    Hi, I'm <strong className="purple-bold">Sanjiv</strong>, a seasoned <strong className="purple-bold">Fullstack Developer </strong>
                                    with four years of experience at <strong className="purple-bold">SAP LABS India</strong>. I bring a diverse skill set and proven expertise in various technologies.
                                    To know more details, Browse the below expertise.
                                    <br />
                                </p>
                            </Zoom>
                        </Fade>
                    </Row>
                    <Row>
                        <Col ms={12} md={12} xs={12} className="flex-column">
                            <div>
                                <Nav justify variant="pills" defaultActiveKey="/">
                                    <Nav.Item className="navItem">
                                        <Nav.Link className="navLink" as={Link} to="/" eventKey="link-1" style={{ fontSize: "17px", fontWeight: 700 }} onClick={() => handleSelectedCategory('backend')}>Backend</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="navItem">
                                        <Nav.Link className="navLink" as={Link} to="/" eventKey="link-2" style={{ fontSize: "17px", fontWeight: 700 }} onClick={() => handleSelectedCategory('frontend')}>Frontend</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="navItem">
                                        <Nav.Link className="navLink" as={Link} to="/" eventKey="link-3" style={{ fontSize: "17px", fontWeight: 700 }} onClick={() => handleSelectedCategory('cloud')}>Cloud</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="navItem">
                                        <Nav.Link className="navLink" as={Link} to="/" eventKey="link-4" style={{ fontSize: "17px", fontWeight: 700 }} onClick={() => handleSelectedCategory('DB')}>Databases</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <div className="logo-display mt-3">
                                    {selectedCategory === 'backend' && (
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzDXLbbVrDEvLZvtOhhVvvrgvB1JG30mg_Gkb6OsuwCWG3qWHTO9Cbg3T84QxjRCX2SY&usqp=CAU" alt="Golang Logo" className="logo" />
                                    )}
                                    {selectedCategory === 'frontend' && (
                                        <img src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="React Logo" className="logo" />
                                    )}
                                    {selectedCategory === 'cloud' && (
                                        <img src="https://www.logo.wine/a/logo/Kubernetes/Kubernetes-Logo.wine.svg" alt="BTP Logo" className="logo" />
                                    )}
                                </div>
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}