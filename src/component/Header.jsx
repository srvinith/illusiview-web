import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../assets/images/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { FaArrowRight } from "react-icons/fa6";

function NavScrollExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="header fixed-top p-0 m-0">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo" className='img-fluid logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} className="button-menu border-0">
          <label className="hamburger">
            <input type="checkbox" checked={expanded} onChange={handleToggle} />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10H13C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2s4 1.8 4 4v20c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4H7"></path>
              <path className="line" d="M7 16H27"></path>
            </svg>
          </label>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-lg-0 nav-con" navbarScroll>
            <Nav.Link href="#action1" className='nav-links' onClick={handleNavItemClick}>What we do</Nav.Link>
            <Nav.Link href="#action2" className='nav-links' onClick={handleNavItemClick}>Who we are</Nav.Link>
            <Nav.Link href="#action3" className='nav-links' onClick={handleNavItemClick}>Insights</Nav.Link>
          </Nav>
          <button className='nav-button'>Let's Talk < FaArrowRight className='arrow'/></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
