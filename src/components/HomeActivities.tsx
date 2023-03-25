import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCard";
import { allCourses } from "../mock/list_all_courses";
import { CalendarWeek } from 'react-bootstrap-icons';
import { user } from "../mock/user_data";

const HomeActivities = () => {
    console.log(user) //per vedere se si aggiornano da annulla, iscriviti e metti ihn attesa.
    let next_activities = allCourses.filter((course) => user.subscibed_courses.includes(course.id));
    let waiting_activities = allCourses.filter((course) =>user.waiting_list.includes(course.id));
    return (
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <h3 className="title-activity-size">
                        <span><CalendarWeek /></span>
                        <span >LE TUE PROSSIME ATTIVITA'</span>
                    </h3>
                    {next_activities.map((course) => {
                        return (
                            <CourseCard course={course} />
                        )
                    })}
                </Col>
                <Col xs={12} sm={6}>
                    <h3 className="title-waiting-size"> HAI N ATTIVITA' IN LISTA D'ATTESA</h3>
                    {waiting_activities.map((course) => {
                        return (
                            <CourseCard course={course} />
                        )
                    })}
                </Col>
            </Row>

        </Container>
    )
}


export default HomeActivities;