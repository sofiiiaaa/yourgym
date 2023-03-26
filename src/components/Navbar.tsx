import React, {FC} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Image,} from "react-bootstrap";
import { House, CalendarWeek, Alarm, ChevronDown } from 'react-bootstrap-icons';

const NavigationBar = () => {
    return (
    <Container>
      <Navbar bg="light" variant="light">
        <Row className="w-100">
          <Col className="d-flex justify-content-end align-items-center">
            <Nav className="ml-auto">
              <Nav.Link href="/">
                <House />
              </Nav.Link>
              <Nav.Link href="/courses">
                <CalendarWeek />
              </Nav.Link>
              <Nav.Link href="/courses">
                <Alarm />
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center">
                <Image
                  fluid
                  className="image-size"
                  src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1679689394~exp=1679689994~hmac=aef2b4b245234e289c6788c621ce0f6cb7e320ab36fcace215ec69ca57009c90"
                  alt="profile image"
                />
                <ChevronDown />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </Container>
    )
}


export default NavigationBar;