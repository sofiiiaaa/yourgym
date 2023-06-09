import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

const HomeFirstBanner: React.FC = () => {


    if (window.innerWidth < 576) return <></>

    return (
        <Container>
            <Row className="banner-position">
                <Col xs={12} sm={6}>
                    <Image className="banner-size" src={`${process.env.PUBLIC_URL}/img/banner.webp`} alt="marketing banner" />
                </Col>
            </Row>
        </Container>
    )
}


export default HomeFirstBanner;