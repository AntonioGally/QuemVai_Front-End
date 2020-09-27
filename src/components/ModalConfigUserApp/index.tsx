import React from "react";
import { Modal, Col, Row, Tab, Nav } from "react-bootstrap";
import GerenciarUser from "./GerenciarUser";
import HistoricUser from "./HistoricUser";
import PasswordAtualization from "./PasswordAtualization";
import PhotoAtualization from "./PhotoAtualization";
import "./ModalConfigStyles.css";
import QuemVaiLogo2 from "../../img/logo/QuemVaiLogo2.png";

import { AccountIcon, PasswordIcon, PhotoIcon, HistoricIcon } from "./styles";

export interface Props {
  show: boolean;
  onHide: any;
}

const ModalConfigUserApp: React.FC<Props> = ({ show, onHide }) => {
  const [AccountClick, setAccountClick] = React.useState(true);
  const [passwordClick, setPasswordClick] = React.useState(Boolean);
  const [photoClick, setPhotoClick] = React.useState(Boolean);
  const [historicClick, setHistoricClick] = React.useState(Boolean);

  return (
    <div>
      <Modal size="xl" animation={true} centered show={show} onHide={onHide}>
        <Modal.Body style={{ padding: 0 }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="Account">
            <Row>
              <Col sm={3} className="MyColTabModalConfigUserApp">
                <Nav
                  variant="pills"
                  className="flex-column"
                  style={{ height: "100%" }}
                >
                  <Row
                    className="justify-content-center"
                    style={{ marginTop: "10%" }}
                  >
                    <img
                      src={QuemVaiLogo2}
                      alt="Quem Vai"
                      style={{ width: "130px", height: "130px" }}
                    />
                  </Row>

                  <div style={{ marginTop: "15%" }}>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0 }}
                    >
                      <Col>
                        <Nav.Item style={{ width: "100%" }}>
                          <Nav.Link
                            eventKey="Account"
                            className={`${
                              AccountClick ? "activeLinkModalConfigUser" : ""
                            } MyNavLink`}
                            onClick={() => {
                              setAccountClick(true);
                              setPasswordClick(false);
                              setPhotoClick(false);
                              setHistoricClick(false);
                            }}
                          >
                            <AccountIcon />
                            <span>Minha Conta</span>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Row>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0 }}
                    >
                      <Col>
                        <Nav.Item style={{ width: "100%" }}>
                          <Nav.Link
                            eventKey="Password"
                            className={`${
                              passwordClick ? "activeLinkModalConfigUser" : ""
                            } MyNavLink`}
                            onClick={() => {
                              setAccountClick(false);
                              setPasswordClick(true);
                              setPhotoClick(false);
                              setHistoricClick(false);
                            }}
                          >
                            <PasswordIcon />
                            <span>Atualizar Senha</span>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Row>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0 }}
                    >
                      <Col>
                        <Nav.Item style={{ width: "100%" }}>
                          <Nav.Link
                            eventKey="Photo"
                            className={`${
                              photoClick ? "activeLinkModalConfigUser" : ""
                            } MyNavLink`}
                            onClick={() => {
                              setAccountClick(false);
                              setPasswordClick(false);
                              setPhotoClick(true);
                              setHistoricClick(false);
                            }}
                          >
                            <PhotoIcon />
                            <span>Atualizar Foto</span>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Row>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0 }}
                    >
                      <Col>
                        <Nav.Item
                          className="MyNavItem"
                          style={{ width: "100%" }}
                        >
                          <Nav.Link
                            eventKey="Historic"
                            className={`${
                              historicClick ? "activeLinkModalConfigUser" : ""
                            } MyNavLink`}
                            onClick={() => {
                              setAccountClick(false);
                              setPasswordClick(false);
                              setPhotoClick(false);
                              setHistoricClick(true);
                            }}
                          >
                            <HistoricIcon />
                            <span>Meu Histórico</span>
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Row>
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
