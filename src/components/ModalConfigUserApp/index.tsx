import React from "react";
import { Modal, Col, Row, Tab, Nav } from "react-bootstrap";
import GerenciarUser from "./GerenciarUser";
import HistoricUser from "./HistoricUser";
import "./ModalConfigStyles.css";
// import { Container } from './styles';

export interface Props {
  show: boolean;
  onHide: any;
}

const ModalConfigUserApp: React.FC<Props> = ({ show, onHide }) => {
  return (
    <div>
      <Modal size="xl" centered show={show} onHide={onHide}>
        <Modal.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="Account">
            <Row>
              <Col sm={3}>
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
                      <Nav.Link eventKey="Historic" className="MyNavLink">
                        Meu Histórico
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                  <div>
                    <Nav.Item>
                      <Nav.Link eventKey="" className="MyNavLink">
                        Sair
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="Account">
                    <GerenciarUser />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Historic">
                    <HistoricUser />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalConfigUserApp;
