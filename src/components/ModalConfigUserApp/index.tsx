import React from "react";
import { Modal, Col, Row, Tab, Nav } from "react-bootstrap";
import GerenciarUser from "./GerenciarUser";
import HistoricUser from "./HistoricUser";
import PasswordAtualization from "./PasswordAtualization";
import PhotoAtualization from "./PhotoAtualization";
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
                      <Nav.Link eventKey="Historic" className="MyNavLink">
                        Meu Histórico
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
                  <Tab.Pane eventKey="Password">
                    <PasswordAtualization />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Photo">
                    <PhotoAtualization />
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
