import React from "react";

import { Modal, Col, Row, Tab, Nav } from "react-bootstrap";

import "./ModalFriendStyles.css";
import {
  SendInviteIcon,
  InvitesSendedIcon,
  InvitesReceivedIcon,
  TrustAddIcon,
  TrustReceiveIcon,
  TrustSendedIcon,
} from "./styles";

import InvitesSended from "./InvitesSended";
import InvitesReceived from "./InvitesReceived";
import SendInvite from "./SendInvite";

export interface Props {
  show: boolean;
  onHide: any;
}

const ModalFriendUserApp: React.FC<Props> = ({ show, onHide }) => {
  const [adicionarUsuarioClick, setAdicionarUsuarioClick] = React.useState(
    true
  );
  const [
    solicitacoesEnviadasClick,
    setSolicitacoesEnviadasClick,
  ] = React.useState(false);
  const [
    solicitacoesRecebidasClick,
    setSolicitacoesRecebidasClick,
  ] = React.useState(false);

  const [adicionarConfiancaClick, setAdicionarConfiancaClick] = React.useState(
    false
  );
  const [enviosConfiancaClick, setEnviosConfiancaClick] = React.useState(false);
  const [recibosConfiancaClick, setRecibosConfiancaClick] = React.useState(
    false
  );
  return (
    <div>
      <Modal size="xl" centered show={show} onHide={onHide}>
        <Modal.Body style={{ padding: 0 }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="SendInvite">
            <Row style={{ margin: 0 }}>
              <Col md={4} className="MyColTabModalFriendUserApp">
                <Nav
                  variant="pills"
                  className="flex-column"
                  style={{ height: "100%", justifyContent: "space-between" }}
                >
                  <div className="MyNavModalFriendUserApp">
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0, alignItems: "center" }}
                    >
                      <Nav.Item style={{ width: "80%" }}>
                        <Nav.Link
                          eventKey="SendInvite"
                          style={{ textAlign: "left" }}
                          className={`${
                            adicionarUsuarioClick
                              ? "activeLinkModalFriendUserApp"
                              : ""
                          } MyNavLinkModalFriendUserApp`}
                          onClick={() => {
                            setAdicionarUsuarioClick(true);
                            setSolicitacoesEnviadasClick(false);
                            setSolicitacoesRecebidasClick(false);
                            setAdicionarConfiancaClick(false);
                            setEnviosConfiancaClick(false);
                            setRecibosConfiancaClick(false);
                          }}
                        >
                          <SendInviteIcon />
                          <span>Adicionar Usuário</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Row>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0, alignItems: "center" }}
                    >
                      <Nav.Item style={{ width: "80%" }}>
                        <Nav.Link
                          eventKey="InvitesSended"
                          style={{ textAlign: "left" }}
                          className={`${
                            solicitacoesEnviadasClick
                              ? "activeLinkModalFriendUserApp"
                              : ""
                          } MyNavLinkModalFriendUserApp`}
                          onClick={() => {
                            setAdicionarUsuarioClick(false);
                            setSolicitacoesEnviadasClick(true);
                            setSolicitacoesRecebidasClick(false);
                            setAdicionarConfiancaClick(false);
                            setEnviosConfiancaClick(false);
                            setRecibosConfiancaClick(false);
                          }}
                        >
                          <InvitesSendedIcon />
                          <span>Solicitações Enviadas</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Row>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0, alignItems: "center" }}
                    >
                      <Nav.Item style={{ width: "80%" }}>
                        <Nav.Link
                          eventKey="InvitesReceived"
                          style={{ textAlign: "left" }}
                          className={`${
                            solicitacoesRecebidasClick
                              ? "activeLinkModalFriendUserApp"
                              : ""
                          } MyNavLinkModalFriendUserApp`}
                          onClick={() => {
                            setAdicionarUsuarioClick(false);
                            setSolicitacoesEnviadasClick(false);
                            setSolicitacoesRecebidasClick(true);
                            setAdicionarConfiancaClick(false);
                            setEnviosConfiancaClick(false);
                            setRecibosConfiancaClick(false);
                          }}
                        >
                          <InvitesReceivedIcon />
                          <span className="InvitesReceivedText">
                            Solicitações Recebidas
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    </Row>
                  </div>
                  <div>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0, alignItems: "center" }}
                    >
                      <Nav.Item style={{ width: "80%" }}>
                        <Nav.Link
                          eventKey="InvitesReceived"
                          style={{ textAlign: "left" }}
                          className={`${
                            adicionarConfiancaClick
                              ? "activeLinkModalFriendUserApp"
                              : ""
                          } MyNavLinkModalFriendUserApp`}
                          onClick={() => {
                            setAdicionarUsuarioClick(false);
                            setSolicitacoesEnviadasClick(false);
                            setSolicitacoesRecebidasClick(false);
                            setAdicionarConfiancaClick(true);
                            setEnviosConfiancaClick(false);
                            setRecibosConfiancaClick(false);
                          }}
                        >
                          <TrustAddIcon />
                          <span>Adicionar confiança</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Row>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0, alignItems: "center" }}
                    >
                      <Nav.Item style={{ width: "80%" }}>
                        <Nav.Link
                          eventKey="InvitesReceived"
                          style={{ textAlign: "left" }}
                          className={`${
                            enviosConfiancaClick
                              ? "activeLinkModalFriendUserApp"
                              : ""
                          } MyNavLinkModalFriendUserApp`}
                          onClick={() => {
                            setAdicionarUsuarioClick(false);
                            setSolicitacoesEnviadasClick(false);
                            setSolicitacoesRecebidasClick(false);
                            setAdicionarConfiancaClick(false);
                            setEnviosConfiancaClick(true);
                            setRecibosConfiancaClick(false);
                          }}
                        >
                          <TrustSendedIcon />
                          <span>Envios de confiança</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Row>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0, alignItems: "center" }}
                    >
                      <Nav.Item style={{ width: "80%" }}>
                        <Nav.Link
                          eventKey="InvitesReceived"
                          style={{ textAlign: "left" }}
                          className={`${
                            recibosConfiancaClick
                              ? "activeLinkModalFriendUserApp"
                              : ""
                          } MyNavLinkModalFriendUserApp`}
                          onClick={() => {
                            setAdicionarUsuarioClick(false);
                            setSolicitacoesEnviadasClick(false);
                            setSolicitacoesRecebidasClick(false);
                            setAdicionarConfiancaClick(false);
                            setEnviosConfiancaClick(false);
                            setRecibosConfiancaClick(true);
                          }}
                        >
                          <TrustReceiveIcon />
                          <span>Recibos de confiança</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Row>
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
                    <SendInvite />
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

export default ModalFriendUserApp;
