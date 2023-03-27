import React from "react";
import { Row, Col, Card,  Button, } from "react-bootstrap";
import {  Clock } from 'react-bootstrap-icons';
import {  Course } from "../mock/list_all_courses";
import { user } from "../mock/user_data";

interface CourseCardProps {
    course: Course
}

const CourseCard: React.FC<CourseCardProps> = (obj) => {

    let cardDetail;

    if(user.subscibed_courses.includes(obj.course.id)){
        cardDetail = (
            <Row>
                <Col xs={6}>
                             <span className="text-small-size secondary-information"> Club</span>
                             <br/>
                            <span className="text-medium-size">{obj.course.course_name}</span>
                         </Col>
                         <Col xs={6}> 
                             <span className="text-small-size secondary-information">Sala</span> 
                             <br/>
                             <span className="text-medium-size">{obj.course.course_name}</span>
                         </Col>
            </Row>
        )
    }else {
    cardDetail =(
        <Row>
            <Col> 
                N persone di te
            </Col>
            <Col>
            <Button onClick = {()=> alert("action page available.")}>
                ANNULLA
            </Button>
            </Col>
        </Row>
    )
    }


    return (
        <Card key={"coursecard" + obj.course.id}>
            <Row>
                <Col xs={12} md={6} lg={3}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/arrampicata.jpg`} alt="arrampicata" />
                </Col>
                <Col xs={12} md={6} lg={9}>
                <Card.Body>
                    <Card.Title>{obj.course.course_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{obj.course.course_date}</Card.Subtitle>
                    <Row>
                    <Col xs={6}>
                        <Card.Text>{obj.course.course_hour_start} - {obj.course.course_hour_end}</Card.Text>
                    </Col>
                    <Col xs={6}>
                        <Card.Text className="text-small-size secondary-information">
                        <span className="clock"><Clock/></span>{obj.course.course_hour_last}
                        </Card.Text>
                    </Col>
                    </Row>
                    {cardDetail}
                </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}



export default CourseCard;