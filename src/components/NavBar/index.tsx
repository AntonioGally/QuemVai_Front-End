import React, { useState } from "react";

import { MyNavBar, MyLink } from "./style";
import { NavLink } from "react-router-dom";

import { Modal, Nav } from "react-bootstrap";
import ModalLogin from "../ModalLogin";

const NavBar: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              >
                Login
              </span>
            </MyLink>
          </Nav.Item>
        </Nav>
      </MyNavBar>
      <Modal show={show} onHide={handleClose} centered size="xl">
        <ModalLogin />
      </Modal>
    </>
  );
};

export default NavBar;
