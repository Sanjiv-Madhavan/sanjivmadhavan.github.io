import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';

export default function AboutContainer() {
    return (
            <Container fluid className="home-about-section">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='aboutme-heading'>
                                About me
                            </h1>
                        </Col>
                        <Col ms={12} md={12} xs={12} className="flex-column">
                            <div>
                                <Nav justify variant="tabs" defaultActiveKey="/">
                                    <Nav.Item className="navItem">
                                        <Nav.Link className="navLink" as={Link} to="/" eventKey="link-1" style={{ fontSize: "17px", fontWeight: 700 }}>About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="navItem">
                                        <Nav.Link className="navLink" as={Link} to="skills/backend" eventKey="link-2" style={{ fontSize: "17px", fontWeight: 700 }}>Skills</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="navItem">
                                        <Nav.Link className="navLink" as={Link} to="experience" eventKey="link-3" style={{ fontSize: "17px", fontWeight: 700 }}>Experience</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="navItem">
                                        <Nav.Link className="navLink" as={Link} to="education" eventKey="link-4" style={{ fontSize: "17px", fontWeight: 700 }}>Education</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
    )
}