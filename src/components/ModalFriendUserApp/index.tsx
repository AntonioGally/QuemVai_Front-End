import React from "react";

import { Modal, Col, Row, Tab, Nav } from "react-bootstrap";
import "./ModalFriendStyles.css";

import SideBarPeopleOnline from "../SideBarPeopleOnline";

export interface Props {
  show: boolean;
  onHide: any;
}

// import { Container } from './styles';

const ModalFriendUserApp: React.FC<Props> = ({ show, onHide }) => {
  return (
    <div>
      <Modal dialogClassName="modal-90w" centered show={show} onHide={onHide}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="Account">
            <Row>
              <Col md={2}>
                <Nav
                  variant="pills"
                  className="flex-column"
                  style={{ height: "100%", justifyContent: "space-between" }}
                >
                  <div>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="Account"
                        className="MyNavLink"
                        style={{ marginBottom: "7%" }}
                      >
                        Minha Conta
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="Password"
                        className="MyNavLink"
                        style={{ marginBottom: "7%" }}
                      >
                        Atualizar Senha
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="Photo"
                        className="MyNavLink"
                        style={{ marginBottom: "7%" }}
                      >
                        Atualizar Foto
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="Historic"
                        className="MyNavLink"
                        style={{ marginBottom: "7%" }}
                      >
                        Meu Histórico
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
              </Col>
              <Col md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="Account">
                    <h1>Teste</h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Password">
                    <h1>Teste</h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Photo">
                    <h1>Teste</h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Historic">
                    <h1>Teste</h1>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col md={2}>
                <SideBarPeopleOnline />
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalFriendUserApp;
