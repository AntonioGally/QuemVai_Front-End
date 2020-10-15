import React from "react";

import { MyNavBar, MyLink } from "./styles";
import { NavLink, Link } from "react-router-dom";
import { logout } from "../../services/auth";

import { Nav } from "react-bootstrap";

const NavBarAdmin: React.FC = () => {
  return (
    <>
      <MyNavBar>
        <Nav className="justify-content-center">
          <Nav.Item>
            <MyLink className="WithoutMarginL">
              <NavLink
                exact
                to="/AdminQuadras"
                className="nav-link "
                activeClassName="active"
              >
                Quadras
              </NavLink>
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <NavLink
                to="/AdminEmail"
                className="nav-link "
                activeClassName="active"
              >
                Email
              </NavLink>
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <NavLink
                to="/AdminEsportes"
                className="nav-link "
                activeClassName="active"
              >
                Esportes
              </NavLink>
            </MyLink>
          </Nav.Item>

          <Nav.Item>
            <MyLink>
              <Link to="/" className="nav-link" onClick={() => logout()}>
                Sair
              </Link>
            </MyLink>
          </Nav.Item>
        </Nav>
      </MyNavBar>
    </>
  );
};

export default NavBarAdmin;
