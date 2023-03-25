import React, {FC, useState} from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Course } from "../mock/list_all_courses";
import { ChevronRight, Clock } from "react-bootstrap-icons";
import { user, UserData } from "../mock/user_data";

interface FilterCardProps {
    course: Course
    setCourse: Function //aggiurnarlo col set course per il bottone annulla. +1 posto e se ti isctivi -1
    user: UserData
    setUser: Function
}

const FilterCard : React.FC<FilterCardProps>= ({course, setCourse, user, setUser,}) => {


    let btn;
    let free_sits;

    console.log(course)
    if(!user.subscibed_courses.includes(course.id) && !user.waiting_list.includes(course.id) && course.course_still_available_spots > 0 ) {
        btn = <Button className="subscribe-btn"><b>ISCRIVITI</b></Button>  //per visualizzazione bottone metti in attesa  setUser({...user, subscibed_courses:updatedSubscribedCourses, + course.id})
    } //per visualizzazione bottone iscriviti
    else if(!user.subscibed_courses.includes(course.id) && course.course_still_available_spots <= 0 ) {
        btn = <Button className="subscribe-btn"><b>METTI IN ATTESA</b></Button> //per visualizzazione bottone metti in attesa  setUser({...user, waiting_list:updatedIWaitingCourses + course.id})
    }else if (user.subscibed_courses.includes(course.id) || user.waiting_list.includes(course.id)){
        btn = <Button onClick = {()=>{
            const updatedSubscribedCourses = user.subscibed_courses.filter(itemId => itemId !== course.id);
            const updatedIWaitingCourses = user.waiting_list.filter(itemId => itemId !== course.id);
            setUser({...user, subscibed_courses:updatedSubscribedCourses, waiting_list:updatedIWaitingCourses }) //logica per far si che al click su annulla compaia il bottone metti in attesa o iscriviti.
            setCourse({...course, course_still_available_spots: course.course_still_available_spots +1}) //per aggiungere un posto alla posizione libera
        }} className="subscribe-btn"><b>ANNULLA</b></Button> //per visualizzazione bottone annulla
    }

    return (
 
         <Card key={"courseKey2"+ course.id}>
            <Row>
                <Col xs="12">
                    <Card.Img className="float-start me-3 card-image-size" src="https://scottspinelli.files.wordpress.com/2018/01/6358992963022842562123671258_gym20people.jpg" />
                    <Card.Body className="filtered-courses-info" >
                        <Col xs="2">
                            <Card.Title>{course.course_name}</Card.Title>
                        </Col>
                        <Col xs="2">
                            <Card.Text><span className="clock"><Clock/></span>{course.course_hour_last}</Card.Text>
                        </Col>
                        <Col xs="1">
                            <Card.Text>{course.course_hour_start}</Card.Text>
                        </Col>
                        <Col xs="1">
                            <Card.Text>{course.course_hour_end}</Card.Text>
                        </Col>
                        <Col xs="1">
                            <Card.Text>{course.course_still_available_spots} / {course.course_all_available_spots}</Card.Text>
                        </Col>
                        <Col xs="1">
                            <Card.Text>{course.course_hour_end}</Card.Text>
                        </Col>
                        <Col xs="auto">
                            {btn}
                        </Col>
                        <Button onClick = {()=> alert("no page available.")}><ChevronRight/></Button>
                    </Card.Body>
                </Col>
            </Row>
         </Card>
    )
}


export default FilterCard;