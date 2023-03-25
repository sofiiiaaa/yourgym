import React, { FC, useState } from "react";
import { allCourses, Course } from "../mock/info_courses";
import { Row, Col, Card, Image, Button, } from "react-bootstrap";
import { ChevronRight } from 'react-bootstrap-icons';

interface CourseCardProps {
    course: Course
}

const CourseCard: React.FC<CourseCardProps> = (obj) => {
    const [unsubscribe, setUnsubscribe] = useState(null)

    let status = obj.course.status
    let cardDetail;
    if(status == "subscribed"){
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
            <Button onClick ={()=> console.log("button annulla was clicked")}>
                ANNULLA
            </Button>
            </Col>
        </Row>
    )
    }


    return (
        <Card>
            <Card.Body>
                <Image className="float-start me-3 card-image-size" style={{ width: '30%', height: 'auto' }} src="https://media.istockphoto.com/id/1225752911/it/foto/determinata-donna-atletica-che-sale-la-corda-in-palestra.jpg?s=1024x1024&w=is&k=20&c=sVM0q72rlaJeZB2aQ3arUfy7tWpnGHmLHp2S0E_ox3o=" alt="Yoga" />
                <Row style={{ margin: '1rem 0rem 0rem 0rem' }}>
                    <Col xs={9}>
                        <Card.Title> {obj.course.course_name}</Card.Title>
                    </Col>
                    <Col xs={3}>
                        <ChevronRight />
                    </Col>
                    <Row style={{ margin: '1rem 0rem 0rem 0rem' }}>
                        <Col style={{ color: 'grease' }}><b>{obj.course.course_date}</b></Col>
                    </Row>
                    <Row style={{ margin: '1rem 0rem 0rem 0rem' }}>
                        <Col xs={6}> <b>{obj.course.course_hour_start}</b> {obj.course.course_hour_end}</Col>
                        <Col xs={6}>
                            <span className="text-small-size secondary-information">{obj.course.course_hour_last}</span>
                        </Col>
                    </Row>
                    {cardDetail}
                </Row>
            </Card.Body>
        </Card>
    )
}



export default CourseCard;