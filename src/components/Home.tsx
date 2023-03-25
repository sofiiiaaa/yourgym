import React from "react";
import Container from 'react-bootstrap/Container';
import HomeActivities from "./HomeActivities";
import HomeAnnouncement from "./HomeAnnouncement";
import HomeCarousel from "./HomeCarousel";



const Home: React.FC = () => {

    return (
        <Container fluid>
            <HomeActivities/>
            <HomeAnnouncement/>
            <HomeCarousel/>
        </Container>        
    )
}


export default Home;
