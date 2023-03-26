import React, {FC} from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

const HomeFirstBanner = () => {


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