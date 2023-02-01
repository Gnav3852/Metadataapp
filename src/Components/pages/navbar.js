import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { Navbar, Nav, Container } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand href='/'>Metapp</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/dbinfo'>DBinfo</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
