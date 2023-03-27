import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Course } from "../mock/list_all_courses";
import { ChevronRight, Clock } from "react-bootstrap-icons";
import {  UserData } from "../mock/user_data";

interface FilterCardProps {
    course: Course
    setCourse: Function //aggiurnarlo col set course per il bottone annulla. +1 posto e se ti isctivi -1
    user: UserData
    setUser: Function
}

const FilterCard : React.FC<FilterCardProps>= ({course, setCourse, user, setUser,}) => {


    let btn;

    console.log("<3")
    if(!user.subscibed_courses.includes(course.id) && !user.waiting_list.includes(course.id) && course.course_still_available_spots > 0 ) {
        btn = <Button className="subscribe-btn" onClick= {()=> {
            user.subscibed_courses.push(course.id);
            setUser({...user})}
        }><b>ISCRIVITI</b></Button>  //per visualizzazione bottone metti in attesa  setUser({...user, subscibed_courses:updatedSubscribedCourses, + course.id})
    } //per visualizzazione bottone iscriviti
    else if(!user.subscibed_courses.includes(course.id) && course.course_still_available_spots <= 0 ) {
        btn = <Button className="waiting-btn" onClick= {()=> {
            user.subscibed_courses.push(course.id);
            const updatedIWaitingCourses = user.waiting_list.filter(itemId => itemId !== course.id);
            setUser({...user, waiting_list:updatedIWaitingCourses })
        }}><b>METTI IN ATTESA</b></Button> //per visualizzazione bottone metti in attesa  setUser({...user, waiting_list:updatedIWaitingCourses + course.id})
    }else if (user.subscibed_courses.includes(course.id) || user.waiting_list.includes(course.id)){
        btn = <Button onClick = {()=> {
            const updatedSubscribedCourses = user.subscibed_courses.filter(itemId => itemId !== course.id);
            const updatedIWaitingCourses = user.waiting_list.filter(itemId => itemId !== course.id);
            setUser({...user, subscibed_courses:updatedSubscribedCourses, waiting_list:updatedIWaitingCourses }) //logica per far si che al click su annulla compaia il bottone metti in attesa o iscriviti.
            // setCourse({...course, course_still_available_spots: course.course_still_available_spots +1}) //per aggiungere un posto alla posizione libera
        }} className="cancel-btn"><b>ANNULLA</b></Button> //per visualizzazione bottone annulla
    }
    
    const cardWeb =
             <Row>
                 <Col xs={12}>
                     <Card.Img className="float-start me-3 card-image-size" src={course.course_url} alt="dettagli corso"/>
                     <Card.Body className="filtered-courses-info" >
                        <Row>
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
                         <Col xs={1}>
                            <Button className="detail-course-btn" onClick = {()=> alert("no page available.")}><ChevronRight/></Button>
                         </Col>
                        </Row>
                     </Card.Body>
                 </Col>
             </Row>




    const cardSmartphone =
                    <Card.Body className="smart-filtered-courses-info" >
                        <Row>
                            <Col xs={5}>
                                <Card.Text><span className="text-medium-size smart-start-hour"><b>{course.course_hour_start}</b></span><span className=" text-medium-size secondary-information">{course.course_hour_end}</span></Card.Text>
                            </Col>
                            <Col xs={6}>
                                <Card.Text className="text-end"><span className="clock"><Clock/></span>{course.course_hour_last}</Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                    <Card.Title><span className="course-name">{course.course_name}</span><span><Button className="detail-course-btn" onClick = {()=> alert("no page available.")}><ChevronRight/></Button></span></Card.Title>                                    
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <Card.Text>{course.course_still_available_spots} / {course.course_all_available_spots}</Card.Text>
                            </Col>
                            <Col xs="3">
                                <Card.Text>{course.course_people_waiting} <br/> Persone prima di te</Card.Text>
                            </Col>
                            <Col xs="6">
                                {btn}
                            </Col>
                        </Row> 
                    </Card.Body>



    return (
        <Card key={"courseKey2"+ course.id}>
                {(window.innerWidth >=576)? cardWeb : cardSmartphone }
        </Card>
    )
}


export default FilterCard;