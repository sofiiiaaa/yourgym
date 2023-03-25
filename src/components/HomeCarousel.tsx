import React, {FC} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const HomeCarousel = () => {
    return (
       <Container>
            <Row>
                <Col>
                <span> pallino blu</span> <span>MAGAZINE</span>
                </Col>
                <Col>
                <span>Mostra tutti</span>
                </Col>
            </Row>
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}


export default HomeCarousel;