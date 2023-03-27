import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { GeoAlt, Fire, BinocularsFill, Filter } from "react-bootstrap-icons";
import { Dropdown } from 'react-bootstrap';
import { allCourses } from "../mock/list_all_courses";
import FilterCard from "./FilterCard";
import { user } from "../mock/user_data";

const Courses: React.FC = () => {
    const [luogo, setLuogo] = useState<string>("Ovunque");
    const [category, setCategory] = useState<string>("Tutte le categorie");
    const [activity, setActivity] = useState<string>("Tutte le attività");
    const [userSubStatus, setUserSubStatus] = useState(user);
    const [allCards, setallCards] = useState(allCourses); //iniziato per mopdificare conto posti liberi, segue il filterCard

    const optionListLocation = new Set(allCourses.map((course) => course.course_location));
    const optionListcategory = new Set(allCourses.map((course) => course.course_category));
    const optionListAcitivity = new Set(allCourses.map((course) => course.course_name));





    const listLocation = Array.from(optionListLocation).map((singleLocation) => {
        return (
            <Dropdown.Item onClick={() => setLuogo(singleLocation)} key={singleLocation}>
                {singleLocation}
            </Dropdown.Item>
        )
    })

    const listCategory = Array.from(optionListcategory).map((singleCategory) => {
        return (
            <Dropdown.Item onClick={() => setCategory(singleCategory)} key={singleCategory}>
                {singleCategory}
            </Dropdown.Item>
        )
    })

    const listActivities = Array.from(optionListAcitivity).map((singleActivity) => {
        return (
            <Dropdown.Item onClick={() => setActivity(singleActivity)} key={singleActivity}>
                {singleActivity}
            </Dropdown.Item>
        )
    })

    let filteredCourses = allCourses.filter((e) => {
        if (luogo !== "Ovunque" && e.course_location !== luogo) return false
        if (category !== "Tutte le categorie" && e.course_category !== category) return false
        if (activity !== "Tutte le attività" && e.course_name !== activity) return false
        else return true
    })

    return (
        <Container>
            <Navbar sticky="top" className="filter-navbar" expand="sm">
                <Col className="text-center course-filter">
                    <Navbar.Toggle className="smart-filter-btn">
                        <span className="smart-filter-text"><Filter/> Filtri</span>
                    </Navbar.Toggle>
                </Col>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Col xs="12">
                        <Nav className="smart-filter-body">
                            <Row className=" text-center filters">
                                <Col xs={12} sm={4}>
                                    <Dropdown className="dropdown-filters">
                                        <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                                            <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                            <GeoAlt />
                                            <b>{luogo}</b>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {listLocation}
                                            <Dropdown.Item onClick={() => setLuogo("Ovunque")}>Ovunque</Dropdown.Item>


                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Dropdown className="dropdown-filters">
                                        <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                                            <Fire />
                                            <b>{category}</b>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {listCategory}
                                            <Dropdown.Item onClick={() => setCategory("Tutte le categorie")}>Tutte le categorie</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col className="text-center" xs={12} md={4}>
                                    <Dropdown className="dropdown-filters">
                                        <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                                            <BinocularsFill />
                                            <b>{activity}</b>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {listActivities}
                                            <Dropdown.Item onClick={() => setActivity("Tutte le attività")}>Tutte le attività</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Nav>
                    </Col>
                </Navbar.Collapse>
            </Navbar>

            <Row>
                {filteredCourses.map((e) => {
                    return (
                        <FilterCard key={"courseFilter" + e.id} setCourse={setallCards} course={e} user={userSubStatus} setUser={setUserSubStatus} />
                    )
                })}
            </Row>

        </Container>

    )
}




export default Courses;