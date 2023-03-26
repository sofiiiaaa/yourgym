import React, { FC, useState } from "react";
import HomeCarousel from "./HomeCarousel";
import { allCarousels } from "./../mock/myCarousel";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const HomeAllCarousells = () => {

    const [showAll, setShowAll] = useState(false);
    console.log(showAll)

     let carousel = allCarousels.map((singleCarousel) => {
        return (
            <HomeCarousel carousel={singleCarousel} key={singleCarousel.id} />
        )
    })

    const text_web = 
        <Button className="show-all-btn" onClick={() => setShowAll(!showAll)}>
                        {!showAll? <span><b>Mostra tutti</b></span> : <span><b>Nascondi tutti</b></span>}
                </Button>
    
    const text_phone =
        <Button className="show-all-btn" onClick={() => setShowAll(!showAll)}>
                        {!showAll? <span> <b>Visualizza tutti</b></span> : <span><b>Nascondi tutti</b></span>}
                </Button>
    
    return (   
        <Container>
             <Row className="title-carousel-web">
                <Col >
                    <span className="text-magazine"><b>MAGAZINE</b></span>
                </Col>
                <Col>
                     <span className="text-show-all">{(window.innerWidth >= 576)? text_web: text_phone}</span>
                </Col>
            </Row>
            <Row className="carousels">
                    {showAll ? carousel : carousel.slice(5)}             
            </Row>
        </Container>
    )
}


export default HomeAllCarousells;

//qui vanno almeno 5 caroselli da poi mettere in Home Carousel! (quello già importato in Home)