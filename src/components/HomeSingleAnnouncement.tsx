import React, {FC} from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Announcement } from "../mock/announcement";
import { Col } from "react-bootstrap";

interface HomeSingleAnnouncementProps {
    announcement: Announcement
}

const HomeSingleAnnouncement: React.FC<HomeSingleAnnouncementProps> = (obj) => {
        return(
            <Accordion.Item eventKey={obj.announcement.id}>
                <Accordion.Header>
                    <Col className="text-start">
                        {obj.announcement.announcement_title}
                    </Col> 
                    <Col className="text-end">
                        <span className="announcement-date">{obj.announcement.announcement_date}</span>
                    </Col>
                    </Accordion.Header>
                <Accordion.Body>
                   {obj.announcement.announcement_description}
                </Accordion.Body>
            </Accordion.Item> 
        )
    }

    //accordion.Item eventKey="0" da sistemare e cercare. Anche perché se no si aprono e chiudono tutti gli accordion insieme

export default HomeSingleAnnouncement;