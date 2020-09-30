import React from "react";

import { Modal, Col, Row, Tab, Nav } from "react-bootstrap";

import "./ModalFriendStyles.css";
import {
  SendInviteIcon,
  InvitesSendedIcon,
  InvitesReceivedIcon,
  TrustReceiveIcon,
  TrustSendedIcon,
} from "./styles";

import InvitesSended from "./InvitesSended";
import InvitesReceived from "./InvitesReceived";
import SendInvite from "./SendInvite";

import InvitesSendedTrust from "./InvitesSendedTrust";
import InvitesReceivedTrust from "./InvitesReceivedTrust";

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
                  style={{ height: "100%" }}
                >
                  <div style={{ marginBottom: "10%" }}>
                    <Row
                      className="justify-content-center"
                      style={{ margin: 0, alignItems: "center" }}
                    >
                      <Nav.Item style={{ width: "90%" }}>
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
                      <Nav.Item style={{ width: "90%" }}>
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
                      <Nav.Item style={{ width: "90%" }}>
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
                      <Nav.Item style={{ width: "90%" }}>
                        <Nav.Link
                          eventKey="InvitesSendedTrust"
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
                      <Nav.Item style={{ width: "90%" }}>
                        <Nav.Link
                          eventKey="InvitesReceivedTrust"
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
                  <Tab.Pane eventKey="InvitesSendedTrust">
                    <InvitesSendedTrust />
                  </Tab.Pane>
                  <Tab.Pane eventKey="InvitesReceivedTrust">
                    <InvitesReceivedTrust />
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
