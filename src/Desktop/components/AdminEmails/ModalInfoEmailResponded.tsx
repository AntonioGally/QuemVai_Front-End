import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";
import { HeaderModal, ArrowBackIcon, TitleContent, MyInput } from "./styles";
import { Modal, Form, Row, Col, Spinner } from "react-bootstrap";

import api from "../../../services/api";
import { ViewEmailRespondedAdmin } from "../../../@types";
import { Token } from "../../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
}

interface Data {
  EmailInfo: ViewEmailRespondedAdmin;
}

const AdminEmails: React.FC<Props> = ({ show, onHide, id }) => {
  const [finalDateCreate, setFinalDateCreate] = useState("");
  const [finalDateUpdate, setFinalDateUpdate] = useState("");
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get(`/api/admin/get/responded/email/find/${id}`, {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllEmailsResponded] = responses;
      const emails = await AllEmailsResponded.data;
      console.log(emails[0]);
      const AuxDateCreated = parseISO(String(emails[0]["createdAt"]));
      const formattedDate1 = format(
        AuxDateCreated,
        "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
        {
          locale: pt,
        }
      );
      setFinalDateCreate(formattedDate1);

      const AuxDateUpdated = parseISO(String(emails[0]["updatedAt"]));
      const formattedDate2 = format(
        AuxDateUpdated,
        "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
        {
          locale: pt,
        }
      );
      setFinalDateUpdate(formattedDate2);

      setData({ EmailInfo: emails[0] });
    });
  }, [id]);

  return (
    <Modal size="xl" animation={true} centered show={show} onHide={onHide}>
      <Modal.Body
        style={{ padding: 0, backgroundColor: "#DDDDDD", overflowY: "auto" }}
      >
        <HeaderModal>
          <ArrowBackIcon onClick={onHide} />
        </HeaderModal>

        {!data ? (
          <>
            <Spinner animation="border" />
          </>
        ) : (
          <>
            <div>
              <Form
                style={{
                  marginTop: "5%",
                  height: "500px",
                  padding: "20px",
                }}
              >
                <Row>
                  <Col md={6} lg={6}>
                    <div style={{ marginBottom: "5%" }}>
                      <Row
                        style={{ margin: 0, justifyContent: "space-between" }}
                      >
                        <TitleContent>Email do usuário</TitleContent>
                        <TitleContent>ID Email</TitleContent>
                      </Row>
                      <Row
                        style={{ margin: 0, justifyContent: "space-between" }}
                      >
                        <Form.Group style={{ margin: 0, width: "80%" }}>
                          <MyInput>
                            <Form.Control
                              style={{ width: "89%" }}
                              readOnly
                              defaultValue={data?.EmailInfo.email_user}
                              name="emailUser"
                              id="emailUser"
                            />
                          </MyInput>
                        </Form.Group>
                        <Form.Group style={{ margin: 0, width: "20%" }}>
                          <MyInput>
                            <Form.Control
                              readOnly
                              defaultValue={data?.EmailInfo.id}
                              name="idUser"
                              id="idUser"
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Assunto do usuário</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="subjectUser"
                              id="subjectUser"
                              defaultValue={data?.EmailInfo.subject}
                              readOnly
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Data de envio</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="dateUser"
                              id="dateUser"
                              readOnly
                              defaultValue={finalDateCreate}
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Mensagem do usuário</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              as="textarea"
                              rows={8}
                              name="messageUser"
                              id="messageUser"
                              readOnly
                              defaultValue={data?.EmailInfo.message}
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                  </Col>
                  <Col md={6} lg={6} >
                  <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Email da empresa</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="emailResponse"
                              id="emailResponse"
                              readOnly
                              defaultValue={data?.EmailInfo.ownerMessage.map(
                                (i) => {
                                  return i.email_user;
                                }
                              )}
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Assunto da resposta</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="subjectResponse"
                              id="subjectResponse"
                              readOnly
                              defaultValue={data?.EmailInfo.ownerMessage.map(
                                (i) => {
                                  return i.subject;
                                }
                              )}
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Data de envio da resposta</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="updateResponse"
                              id="updateResponse"
                              readOnly
                              defaultValue={finalDateUpdate}
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Mensagem da resposta</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              as="textarea"
                              rows={8}
                              name="messageResponse"
                              id="messageResponse"
                              readOnly
                              defaultValue={data?.EmailInfo.ownerMessage.map(
                                (i) => {
                                  return i.message;
                                }
                              )}
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AdminEmails;
