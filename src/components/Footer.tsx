import React from "react";
import { Instagram, Facebook, Youtube, ChevronDown } from "react-bootstrap-icons";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <Container className="footer-bar">

       <Row className="text-center ita-component">
            <Col xs={12} md={4}>
                <Instagram/>
                <Facebook/>
                <Youtube/>
            </Col>
            <Col xs={12} md={4} className="ita-component">
                <Image className="image-width" src={`${process.env.PUBLIC_URL}/img/italian_flag.jpg`} alt="bandiera italiana"/>
                <h3> ITA</h3>
                <ChevronDown/>
            </Col>
            <Col xs={12} md={4}>
                <h3> Made by <span><b>PED</b></span></h3>
            </Col>
       </Row>
        </Container>
    )
}


export default Footer;