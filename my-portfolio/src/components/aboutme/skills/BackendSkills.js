import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
import image_go from '../../../images/go.png'
import image_k8s from '../../../images/k8s.png'
import image_java from '../../../images/java.png'
import image_grafana from '../../../images/grafana.png'
import image_prom from '../../../images/prom.png'
import image_sql from '../../../images/sql.png'
import image_dynamo from '../../../images/dynamo.png'

export default function Backend() {
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
                            <Slide direction="up">
                                <Fade>
                                    <h2>My Backend Prowess</h2>
                                    <Container className="mt-4">
                                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                                            <Col xs={5} md={3} lg={2} className="tech-icons">
                                                <img src={image_go} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={5} md={3} lg={2} className="tech-icons">
                                                <img src={image_k8s} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={5} md={3} lg={2} className="tech-icons">
                                                <img src={image_prom} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={5} md={3} lg={2} className="tech-icons">
                                                <img src={image_grafana} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={5} md={3} lg={2} className="tech-icons">
                                                <img src={image_sql} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={5} md={3} lg={2} className="tech-icons">
                                                <img src={image_dynamo} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={5} md={3} lg={2} className="tech-icons">
                                                <img src={image_java} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
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