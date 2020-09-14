import React from "react";

import { MyNavBar, MyLink } from "./style";
import { NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";
import ModalLogin from "../ModalLogin";
// import { transitions, positions, Provider as AlertProvider } from "react-alert";

const NavBar: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <MyNavBar>
        <Nav className="justify-content-center">
          <Nav.Item>
            <MyLink className="WithoutMarginL">
              <NavLink
                exact
                to="/"
                className="nav-link "
                activeClassName="active"
              >
                Sobre
              </NavLink>
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <NavLink
                to="/Contato"
                className="nav-link "
                activeClassName="active"
              >
                Contato
              </NavLink>
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <NavLink
                to="/Documentos"
                className="nav-link "
                activeClassName="active"
              >
                Documentos
              </NavLink>
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <NavLink
                to="/CadastroUser"
                className="nav-link "
                activeClassName="active"
              >
                Cadastro
              </NavLink>
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setModalShow(true)}
              >
                Login
              </span>
            </MyLink>
          </Nav.Item>
        </Nav>
      </MyNavBar>
      {modalShow ? (
        <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
