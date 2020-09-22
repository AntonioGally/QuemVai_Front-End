import React from "react";

import { Modal, Col, Row, Tab, Nav } from "react-bootstrap";
import "./ModalFriendStyles.css";

import InvitesSended from "./InvitesSended";
import InvitesReceived from "./InvitesReceived";

// import SideBarPeopleOnline from "../SideBarPeopleOnline";

export interface Props {
  show: boolean;
  onHide: any;
}

// import { Container } from './styles';

const ModalFriendUserApp: React.FC<Props> = ({ show, onHide }) => {
  return (
    <div>
      <Modal dialogClassName="modal-90w" centered show={show} onHide={onHide}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="InvitesSended"
          >
            <Row>
              <Col md={3}>
                <Nav
                  variant="pills"
                  className="flex-column"
                  style={{ height: "100%", justifyContent: "space-between" }}
                >
                  <div>
                    <Nav.Item className="MyNavItem">
                      <Nav.Link eventKey="InvitesSended" className="MyNavLink">
                        Solicitações Enviadas
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="MyNavItem">
                      <Nav.Link
                        eventKey="InvitesReceived"
                        className="MyNavLink"
                      >
                        Solicitações Recebidas
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="MyNavItem">
                      <Nav.Link eventKey="SendInvite" className="MyNavLink">
                        Enviar Solicitação
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
              </Col>
              <Col md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="InvitesSended">
                    <InvitesSended />
                  </Tab.Pane>
                  <Tab.Pane eventKey="InvitesReceived">
                    <InvitesReceived />
                  </Tab.Pane>
                  <Tab.Pane eventKey="SendInvite">
                    <h1>Teste</h1>
                  </Tab.Pane>                  
                </Tab.Content>
              </Col>
              <Col md={1}>{/* <SideBarPeopleOnline /> */}</Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalFriendUserApp;
