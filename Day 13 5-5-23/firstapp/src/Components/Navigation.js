import React from 'react'
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavLink } from 'react-bootstrap'

export default function Navigation() {
  return (
    <div>

        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-toggle='collapse' data-bs-target='#navabrScroll' />
            <Navbar.Collapse id="navbarScroll">
                <Nav>

                  <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                  <NavLink eventKey="2" as={Link} to="/about">About</NavLink>
                  <NavLink eventKey="3" as={Link} to="/contact">Contact</NavLink>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </div>
  )
}
