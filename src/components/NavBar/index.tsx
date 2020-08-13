import React from 'react';

import Nav from "react-bootstrap/Nav";
import { MyNavBar, MyLink } from "./style";
import { NavLink } from "react-router-dom";



const NavBar: React.FC = () => {
  return (
    <MyNavBar>
    <Nav className="justify-content-center">
      <Nav.Item>
        <MyLink className="WithoutMarginL active">
          <NavLink exact to="/" className="nav-link ">
            Sobre
          </NavLink>
        </MyLink>
      </Nav.Item>
      <Nav.Item>
        <MyLink >
          <NavLink
            to="/Contato"
            className="nav-link"                
          >
            Contato
          </NavLink>
        </MyLink>
      </Nav.Item>
      <Nav.Item>
        <MyLink>
          <NavLink to="/Documentos" className="nav-link">
            Documentos
          </NavLink>
        </MyLink>
      </Nav.Item>
      <Nav.Item>
        <MyLink>
          <NavLink to="/Login" className="nav-link">
            Login
          </NavLink>
        </MyLink>
      </Nav.Item>
    </Nav>
  </MyNavBar>
  );
}

export default NavBar;