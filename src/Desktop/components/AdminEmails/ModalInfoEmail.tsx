import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";
import { HeaderModal, ArrowBackIcon, TitleContent, MyInput } from "./styles";
import { Modal, Form, Button, Row, Col, Spinner } from "react-bootstrap";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
}

type EmailReceivedInfo = {
  id: number;
  email_user: string;
  subject: string;
  message: string;
  createdAt: string;
};

interface Data {
  EmailInfo: EmailReceivedInfo;
}

const AdminEmails: React.FC<Props> = ({ show, onHide, id }) => {
  const [finalDate, setFinalDate] = useState("");
  const [data, setData] = useState<Data>();
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    Promise.all([
      api.get(`/api/admin/get/email/find/${id}`, {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllEmailsReceived] = responses;
      const emails = await AllEmailsReceived.data;
      const AuxDate = parseISO(String(emails["createdAt"]));

      const formattedDate = format(
        AuxDate,
        "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
        {
          locale: pt,
        }
      );
      setFinalDate(formattedDate);
      setData({ EmailInfo: emails });
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
                  <Row style={{ margin: 0, justifyContent: "space-between" }}>
                    <TitleContent>Email do usuário</TitleContent>
                    <TitleContent>ID Email</TitleContent>
                  </Row>
                  <Row style={{ margin: 0, justifyContent: "space-between" }}>
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
                          defaultValue={finalDate}
                        />
                      </MyInput>
                    </Form.Group>
                  </Row>
                </div>
              </Col>
              <Col md={6} lg={6} style={{ padding: "20px" }}>
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
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdminEmails;
