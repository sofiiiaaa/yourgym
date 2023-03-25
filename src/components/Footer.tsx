import React, {FC} from "react";
import { Instagram, Facebook, Youtube, ChevronDown } from "react-bootstrap-icons";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
    return (
       <Row className="align ita-component" style={{display:'flex'}}>
            <Col xm={4}>
                <Instagram/>
                <Facebook/>
                <Youtube/>
            </Col>
            <Col  xm={4} className="ita-component" style={{display:'flex'}}>
                <Image className="image-width" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png?20111003040337" alt="italian flag"/>
                <h3> ITA</h3>
                <ChevronDown/>
            </Col>
            <Col  xm={4}>
                <h3> Made by <span><b>PED</b></span></h3>
            </Col>
       </Row>
    )
}


export default Footer;