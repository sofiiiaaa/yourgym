import React, {FC} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from "./Navbar";
import HomeActivities from "./HomeActivities";
import HomeAnnouncement from "./HomeAnnouncement";
import HomeCarousel from "./HomeCarousel";



const Home = () => {

    return (
        <Container fluid>
            <NavigationBar/>
            <HomeActivities/>
            <HomeAnnouncement/>
            <HomeCarousel/>
            
                
            {/* <Container>
                <Row>
                    <Col xs={3} sm={12}> 
                        <p>here you are at Home!!</p>
                    </Col>
                    <Col xs={3} sm={12}> 
                        <p>here you are at Home</p>
                    </Col>
                </Row>
            </Container> */}
        </Container>        
    )
}


export default Home;
