import React from "react";
import Container from 'react-bootstrap/Container';
import HomeActivities from "./HomeActivities";
import HomeAnnouncement from "./HomeAnnouncement";
// import HomeHeaderCarousel from "./HomeHeaderCarousel";
import HomeAllCarousells from "./HomeAllCarousells";
import HomeFirstBanner from "./HomeFirstBanner";
import HomeSecondBanner from "./HomeSecondBanner";


const Home: React.FC = () => {

    return (
        <Container fluid>
            <HomeActivities/>
            <HomeFirstBanner/>
            <HomeAnnouncement/>
            <HomeSecondBanner/>
            <HomeAllCarousells/>
        </Container>         
    )
}


export default Home;
