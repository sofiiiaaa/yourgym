import React, {FC} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {OneCarousel} from "../mock/myCarousel";
import { ChevronRight } from "react-bootstrap-icons";
import Carousel from 'react-bootstrap/Carousel';

interface HomeCarouselProp {
    carousel: OneCarousel
}

const HomeCarousel: React.FC<HomeCarouselProp>= (obj) => {
    return (
                <Card className="card-event">
                    <Card.Img src={obj.carousel.carousel_url} alt="dettaglio evento" />
                    <Button className="card-carousel-btn" onClick = {()=> alert("no page available.")}><ChevronRight/></Button>
                    <Card.Body>
                        <Card.Title>{obj.carousel.carousel_title}</Card.Title>
                        <Card.Text>{obj.carousel.carousel_description}</Card.Text>
                        <Card.Text>{obj.carousel.carousel_date}</Card.Text>
                    </Card.Body>
                </Card>


        // </Container>
    )
}




export default HomeCarousel;