import React, { FC, useState } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { SecPageAllCourses } from "../mock/listAllCourses";
import FilterCard from "./FilterCard";

const Courses : React.FC= () => {
    const [luogo, setLuogo]= useState<string>("Ovunque");
    const [category, setCategory]= useState<string>("Tutte le categorie");
    const [activity, setActivity]= useState<string>("Tutte le attività");

    const optionListLocation = new Set(SecPageAllCourses.map((course) => course.course_location));
    const optionListcategory = new Set(SecPageAllCourses.map((course) => course.course_category));
    const optionListAcitivity = new Set(SecPageAllCourses.map((course) => course.course_name));

    const listLocation = Array.from(optionListLocation).map((singleLocation)=>{
        return(
            <Dropdown.Item onClick={()=> setLuogo(singleLocation)}>
                {singleLocation}
            </Dropdown.Item>
        )
    })

    const listCategory = Array.from(optionListcategory).map((singleCategory)=>{
        return(
            <Dropdown.Item onClick={()=> setCategory(singleCategory)}>
                {singleCategory}
            </Dropdown.Item>
        )
    })

    const listActivities = Array.from(optionListAcitivity).map((singleActivity)=>{
        return(
            <Dropdown.Item onClick={()=> setActivity(singleActivity)}>
                {singleActivity}
            </Dropdown.Item>
        )
    })

    let filteredCourses = SecPageAllCourses.filter((e)=>{
        if(luogo !== "Ovunque" && e.course_location !== luogo ) return false
        if(category !== "Tutte le categorie" && e.course_category !== category ) return false
        if(activity !== "Tutte le attività" && e.course_name !== activity ) return false
        else return true
    })

    return (
        <Container>
            <Navbar sticky="top">
            <Row className=" text-center filters">
                <Col xs={12} md={12}>
                    <p>Filtri</p>
                </Col>
                <Col xs={12} sm={4}>
                    <Dropdown className="dropdown-filters">
                        <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                            <Dropdown.Item href="#/action-1"></Dropdown.Item>
                            <b>{luogo}</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {listLocation}
                        <Dropdown.Item onClick={()=> setLuogo("Ovunque")}>Ovunque</Dropdown.Item>

                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={4}>
                     <Dropdown className="dropdown-filters">
                        <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                            <b>{category}</b>
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                            {listCategory}
                            <Dropdown.Item onClick={()=> setCategory("Tutte le categorie")}>Tutte le categorie</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col className="text-center" xs={12} md={4}>
                     <Dropdown className="dropdown-filters">
                        <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                            <b>{activity}</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {listActivities}
                            <Dropdown.Item onClick={()=> setActivity("Tutte le attività")}>Tutte le attività</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            </Navbar>
            <Row>
                {filteredCourses.map((e)=>{
                    return(
                        <FilterCard course = {e}/>
                    )
                })}
            </Row>

        </Container>
       
    )
}




export default Courses;