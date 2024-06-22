import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
import image_helm from '../../../images/helm.png'
import image_docker from '../../../images/docker.png'
import image_aws from '../../../images/aws.png'


export default function DevOps() {
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
                                    <h2>I deploy using</h2>
                                    <Container className="mt-4">
                                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                                            <Col xs={12} sm={6} md={3} lg={2} className="tech-icons">
                                                <img src={image_docker} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={12} sm={6} md={3} lg={2} className="tech-icons">
                                                <img src={image_helm} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
                                            </Col>
                                            <Col xs={12} sm={6} md={3} lg={2} className="tech-icons">
                                                <img src={image_aws} alt="" style={{ width: "85%", height: "50%", paddingBottom: "2px" }} />
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