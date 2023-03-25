import React, {FC} from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Announcement } from "../mock/announcement";

interface HomeSingleAnnouncementProps {
    announcement: Announcement
}

const HomeSingleAnnouncement: React.FC<HomeSingleAnnouncementProps> = (obj) => {
        return(
            <Accordion.Item eventKey={obj.announcement.id}>
                <Accordion.Header>{obj.announcement.announcement_title} {obj.announcement.announcement_date}</Accordion.Header>
                <Accordion.Body>
                   {obj.announcement.announcement_description}
                </Accordion.Body>
            </Accordion.Item> 
        )
    }

    //accordion.Item eventKey="0" da sistemare e cercare. Anche perché se no si aprono e chiudono tutti gli accordion insieme

export default HomeSingleAnnouncement;