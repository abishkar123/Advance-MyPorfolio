import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import favicon from "../asests/favicon.png";

import { Link } from "react-router-dom";


export const TopNav = () => {
  return (
    <div>
       

<Navbar collapseOnSelect bg="none" expand="md">
      <Container>
    
        <Link className="text-primary" to="/">
          <img src={favicon} width="50%"/>
          </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ms-auto p1 ">
          <div className='nav__list'>
            <Link className="nav-link text-black" to="/Aboutme">About Me </Link>
            <Link className="nav-link text-black" to="/skills">Skills</Link>
            <Link className="nav-link text-black" to="/projects">Projects</Link>
            <Link className="nav-link text-black" to="/contact">Contact</Link>
</div>
            
        
          </Nav>
        
        </Navbar.Collapse>

              
     </Container>
     </Navbar>
     </div>

        
    
  )
}
