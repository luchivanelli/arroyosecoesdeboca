import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logoPeña.jpeg'
import './styles/header.css'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
    <Container className='nav-container'>
      <Navbar.Brand href="#home" className='logo'><img src={logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='button-menu'/>
      <Navbar.Collapse id="basic-navbar-nav" className='container-collapse'>
        <Nav className="me-auto links-collapse">
          <Nav.Link href="#home">La peña</Nav.Link>
          <Nav.Link href="#link">Proyecto sede</Nav.Link>
          <Nav.Link href="#link">Viajá con nosotros</Nav.Link>
          <Nav.Link href="#link">Jornadas solidarias</Nav.Link>
          <Nav.Link href="#link">Hacete socio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
