import React, {FC} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Image,} from "react-bootstrap";
import { House, CalendarWeek, Alarm, ChevronDown } from 'react-bootstrap-icons';

const NavigationBar = () => {
    return (
         <Navbar bg="light" variant="light">
        <Container>
          <Nav className="ml-auto justify-content-end">
            <Nav.Link href="#home"> <House/></Nav.Link>
            <Nav.Link href="#features"><CalendarWeek/></Nav.Link>
            <Nav.Link href="#pricing"><Alarm/></Nav.Link>
            <Nav.Link href="#pricing"><ChevronDown/></Nav.Link>
            <Nav.Link href="#pricing">
              <Image fluid  className="image-size" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1679689394~exp=1679689994~hmac=aef2b4b245234e289c6788c621ce0f6cb7e320ab36fcace215ec69ca57009c90" alt="profile image"/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}


export default NavigationBar;