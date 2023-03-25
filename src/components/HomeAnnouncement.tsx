import React, { FC, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import HomeSingleAnnouncement from "./HomeSingleAnnouncement";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { allAnnouncements } from "../mock/announcement";
import { Bell } from 'react-bootstrap-icons';

const HomeAnnouncement = () => {
    const [showAll, setShowAll] = useState(false);
    console.log(showAll)

    let announcements = allAnnouncements.map((announce) => {
        return (
            <HomeSingleAnnouncement announcement={announce} />
        )
    })

    return (
        <Container>
            <Row>
                <Col>
                    <span className="text-advertisement"><Bell/></span>
                    <span className="text-advertisement">AVVISI</span>
                </Col>
                <Col>
                    <Button className="show-all-btn" onClick={() => setShowAll(!showAll)}>
                        {!showAll? <span> Mostra tutti</span> : <span> Nascondi tutti</span>}
                    </Button>
                </Col>
                <Accordion defaultActiveKey="0">
                    {showAll ? announcements : announcements.slice(1)}
                </Accordion>
            </Row>
        </Container>
    )
}


export default HomeAnnouncement;