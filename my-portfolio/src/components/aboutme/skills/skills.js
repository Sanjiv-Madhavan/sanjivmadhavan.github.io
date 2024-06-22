import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleSelectedCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    }
    return (
        <Container fluid>
            <Container>
                <Zoom>
                    <Slide>
                        <Fade>
                            <Row className="mt-5">
                                <Col ms={12} md={12} xs={12} className="flex-column">
                                    <div>
                                        <Nav justify variant="pills" activeKey="backend" defaultActiveKey="backend">
                                            <Nav.Item className="navItem">
                                                <Nav.Link className="navLink" as={Link} to="backend" eventKey="link-1" style={{ fontSize: "17px", fontWeight: 700 }} onClick={() => handleSelectedCategory('backend')}>Backend</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="navItem">
                                                <Nav.Link className="navLink" as={Link} to="frontend" eventKey="link-2" style={{ fontSize: "17px", fontWeight: 700 }} onClick={() => handleSelectedCategory('frontend')}>Frontend</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="navItem">
                                                <Nav.Link className="navLink" as={Link} to="devops" eventKey="link-3" style={{ fontSize: "17px", fontWeight: 700 }} onClick={() => handleSelectedCategory('cloud')}>Dev/Ops</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Outlet />
                                    </div>
                                </Col>
                            </Row>
                        </Fade>
                    </Slide>
                </Zoom>
            </Container>
        </Container>
    )
}