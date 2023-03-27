import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Image,} from "react-bootstrap";
import { House, CalendarWeek, Alarm, ChevronDown } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
    <Container>
      <Navbar bg="light" variant="light">
        <Row className="w-100">
          <Col className="d-flex justify-content-end align-items-center">
            <Nav className="ml-auto">
              <NavLink className="nav-link" to="/">
                <House />
              </NavLink>
              <NavLink className="nav-link" to="/courses">
                <CalendarWeek />
              </NavLink>
              <NavLink className="nav-link" to="/courses">
                <Alarm />
              </NavLink>
              <NavLink to="/" className="nav-link d-flex align-items-center">
                <Image
                  fluid
                  className="image-size"
                  src={`${process.env.PUBLIC_URL}/img/photo_profile.jpg`}
                  alt="immagine di profilo"
                />
                <ChevronDown />
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </Container>
    )
}


export default NavigationBar;