import React, {FC} from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

const HomeFirstBanner = () => {


    if (window.innerWidth < 576) return <></>

    return (
        <Container>
            <Row className="banner-position">
                <Col xs={12} sm={6}>
                    <Image className="banner-size" src="https://marketplace.canva.com/EADaj610UEg/1/0/1600w/canva-grayscale-gift-ideas-rectangular-advertisement-6-rgSGhAP7Q.jpg" alt="marketing banner" />
                    {/* <Button>Scopri di Più</Button> */}
                </Col>
            </Row>
        </Container>
    )
}


export default HomeFirstBanner;