import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
import image_html from '../../../images/html.png'
import image_react from '../../../images/react.png'
import image_angular from '../../../images/angular.png'
import image_js from '../../../images/js.png'
import image_css from '../../../images/css.png'


export default function Frontend() {
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleSelectedCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    }
    return (
        <Container fluid>
            <Container>
                <Row className="mt-4">
                    <Col ms={12} md={12} xs={12} className="flex-column">
                        <Zoom>
                            <Slide direction="down">
                                <Fade>
                                    <h2>I Fortify my frontend with</h2>
                                    <Container className="mt-4">
                                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                                            <Col xs={12} sm={6} md={3} lg={2} className="tech-icons">
                                                <img src={image_react} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={12} sm={6} md={3} lg={2} className="tech-icons">
                                                <img src={image_angular} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={12} sm={6} md={3} lg={2} className="tech-icons">
                                                <img src={image_html} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={12} sm={6} md={3} lg={2} className="tech-icons">
                                                <img src={image_js} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={12} sm={6} md={3} lg={2} className="tech-icons">
                                                <img src={image_css} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Fade>
                            </Slide>
                        </Zoom>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}