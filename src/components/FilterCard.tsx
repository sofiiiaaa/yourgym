import React, {FC} from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { SecondPageCourse } from "../mock/listAllCourses";
import { ChevronRight, Clock } from "react-bootstrap-icons";

interface FilterCardProps {
    course: SecondPageCourse
}

const FilterCard : React.FC<FilterCardProps>= (obj) => {
    return (
        // <Col>
        //     {obj.course.course_location}
        //     {obj.course.course_category}
        //     {obj.course.course_name}
        // </Col>

         <Card>
            <Row>
                <Col>
                    <Card.Img className="float-start me-3 card-image-size" src="https://scottspinelli.files.wordpress.com/2018/01/6358992963022842562123671258_gym20people.jpg" />
                    <Card.Body className="filtered-courses-info" >
                        <Card.Title>{obj.course.course_name}</Card.Title>
                        <Card.Text><span className="clock"><Clock/></span>{obj.course.course_hour_last}</Card.Text>
                        <Card.Text>{obj.course.course_hour_start}</Card.Text>
                        <Card.Text>{obj.course.course_hour_end}</Card.Text>
                        <Card.Text>{obj.course.course_still_available_spots} / {obj.course.course_all_available_spots}</Card.Text>
                        <Card.Text>{obj.course.course_hour_end}</Card.Text>
                        <Button className="subscribe-btn"><b>ISCRIVITI</b></Button>
                        <Button><ChevronRight/></Button>

                        {/* <Card.Text>{obj.course.course_category}</Card.Text>
                        <Card.Text>{obj.course.course_location}</Card.Text> */}
                    </Card.Body>
                </Col>
            </Row>
         </Card>
    )
}


export default FilterCard;