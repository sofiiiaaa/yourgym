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
            <HomeCarousel carousel={singleCarousel} />
        )
    })

    return (   
        <Container>
             <Row>
                <Col>
                    <span className="text-magazine">MAGAZINE</span>
                </Col>
                <Col>
                <Button className="show-all-btn" onClick={() => setShowAll(!showAll)}>
                        {!showAll? <span> Mostra tutti</span> : <span> Nascondi tutti</span>}
                </Button>
                </Col>
            </Row>
            <Row className="carousels" defaultActiveKey="0">
                {showAll ? carousel : carousel.slice(5)}                    
            </Row>
            {/* <Row >
                
                    {allCarousels.map((carousel) => {
                        return (
                            <Col xs="12" sm="auto">                    
                                <HomeCarousel carousel={carousel} />             
                            </Col>
                        )
                    })}
            </Row> */}
        </Container>
    )
}


export default HomeAllCarousells;

//qui vanno almeno 5 caroselli da poi mettere in Home Carousel! (quello già importato in Home)