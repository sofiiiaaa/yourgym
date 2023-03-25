import React, {FC} from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

const HomeSecondBanner = () => {
    return (
        <Container>
            <Row className="banner-position">
                <Col xs={12} sm={6}>
                    <Image className="banner-size" src="https://marketplace.canva.com/EADaj610UEg/1/0/1600w/canva-grayscale-gift-ideas-rectangular-advertisement-6-rgSGhAP7Q.jpg" alt="marketing banner" />
                </Col>
            </Row>
        </Container>
    )
}


export default HomeSecondBanner;