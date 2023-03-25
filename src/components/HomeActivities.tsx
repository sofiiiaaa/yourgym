import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseCard from "./CourseCard";
import { allCourses } from "../mock/info_courses";
import { CalendarWeek } from 'react-bootstrap-icons';

const HomeActivities = () => {
    let next_activities = allCourses.filter((course) => course.status == "subscribed");
    let waiting_activities = allCourses.filter((course) => course.status == "waiting_list");
    return (
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <h3>
                        <span><CalendarWeek /></span>
                        <span>LE TUE PROSSIME ATTIVITA'</span>
                    </h3>
                    {next_activities.map((course) => {
                        return (
                            <CourseCard course={course} />
                        )
                    })}
                </Col>
                <Col xs={12} sm={6}>
                    <h3> HAI N ATTIVITA' IN LISTA D'ATTESA</h3>
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