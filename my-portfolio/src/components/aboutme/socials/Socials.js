import React from "react";
import { AiFillInstagram } from "react-icons/ai";

export default function Socials() {
    return (
        <div className="mt-4">
            <Row className="g-5">
                <Col md={3}>
                    <a
                        href="https://www.instagram.com/sanjivmadhavan/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiFillInstagram></AiFillInstagram>
                    </a>
                </Col>
            </Row>
        </div>
    )
}