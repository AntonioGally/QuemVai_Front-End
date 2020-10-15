import React from "react";
import { Nav, Navbar, Form, FormControl, NavDropdown } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import './styles.css';

const HeaderApp: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar expand="lg" className="MyNavBarHeaderApp">
        <Navbar.Brand href="#home">
          <Form inline className="MyFormHeaderApp"> 
            <FormControl type="text" placeholder="Buscar por algo" className="mr-sm-2 MyInputHeaderApp" />
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto MyNavHeaderApp">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="MyNavDropdownHeaderApp"
            >
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/" className="nav-link">Sair</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderApp;
