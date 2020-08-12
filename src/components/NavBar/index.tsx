import React from "react";

import Nav from "react-bootstrap/Nav";
import { MyNavBar, MyLink } from "./style";

const NavBar: React.FC = () => {
  return (
    <>
      <MyNavBar>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <MyLink className="WithoutMarginL">
              <Nav.Link href="/home">Sobre</Nav.Link>{" "}
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <Nav.Link eventKey="link-1">Contato</Nav.Link>
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <Nav.Link eventKey="link-2">Documentos</Nav.Link>
            </MyLink>
          </Nav.Item>
          <Nav.Item>
            <MyLink>
              <Nav.Link eventKey="disabled">Login</Nav.Link>
            </MyLink>
          </Nav.Item>
        </Nav>
      </MyNavBar>
    </>
  );
};

export default NavBar;
