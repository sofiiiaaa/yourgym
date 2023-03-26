import React, { FC } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import CourseCard from "./CourseCard";
import { allCourses } from "../mock/list_all_courses";
import { CalendarWeek, Clock } from 'react-bootstrap-icons';
import { user } from "../mock/user_data";

const HomeActivities = () => {
    console.log(user) //per vedere se si aggiornano da annulla, iscriviti e metti ihn attesa.
    let next_activities = allCourses.filter((course) => user.subscibed_courses.includes(course.id));
    let waiting_activities = allCourses.filter((course) => user.waiting_list.includes(course.id));

    // per avere la possibilità di card o carousel

    let justCards =
        <Row>
            <Col xs={12} sm={6}>
                <div className="area-activities">
                    <h3 className="title-activity-size">
                        <span><CalendarWeek />  </span>
                        <span >LE TUE PROSSIME ATTIVITA'</span>
                    </h3>
                    {next_activities.map((course) => {
                        return (
                            <CourseCard course={course}  key={"homeCourseN" + course.id}/>
                        )
                    })}

                </div>
            </Col>
            <Col xs={12} sm={6}>
                <div className="area-in-waiting">
                    <h3 className="title-waiting-size"> HAI N ATTIVITA' IN LISTA D'ATTESA</h3>
                    {waiting_activities.map((course) => {
                        return (
                            <CourseCard course={course}  key={"homeCourseW" + course.id} />
                        )
                    })}

                </div>
            </Col>
        </Row>


    let carouselCards =
        // console.log("I'm into the carousel");
        <Carousel fade>
            <Carousel.Item>
                <Row>
                    <Col xs={12} sm={6}>
                        <div className="area-activities">
                            <h3 className="title-activity-size">
                                <span><CalendarWeek /></span>
                                <span >LE TUE PROSSIME ATTIVITA'</span>
                            </h3>
                            {next_activities.map((course) => {
                                return (
                                    <CourseCard course={course} key={"homeCourseN" + course.id}/>
                                )
                            })}

                        </div>
                    </Col>
                    <Col xs={12} sm={6} >
                        <div className="area-in-waiting">
                            <h3 className="title-waiting-size"> HAI N ATTIVITA' IN LISTA D'ATTESA</h3>
                            {waiting_activities.map((course) => {
                                return (
                                    <CourseCard course={course} key={"homeCourseW" + course.id}/>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>




    //
    return (
        <Container>
            <Row>
               <Col>
                    {(window.innerWidth >= 576) ? justCards : carouselCards}
                </Col>
            </Row>

        </Container>
    )
}


export default HomeActivities;