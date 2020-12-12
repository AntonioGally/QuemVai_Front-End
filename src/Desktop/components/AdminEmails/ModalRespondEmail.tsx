import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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

type FormEmailResponded = {
  TitleEmailResponded: string;
  MessageEmailResponded: string;
};

type EmailReceivedInfo = {
  email_user: string;
  subject: string;
  message: string;
  createdAt: string;
};

interface Data {
  EmailInfo: EmailReceivedInfo;
}

const AdminEmails: React.FC<Props> = ({ show, onHide, id }) => {
  const { register, handleSubmit, errors } = useForm<FormEmailResponded>();
  const [finalDate, setFinalDate] = useState("");
  const [data, setData] = useState<Data>();
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

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

  const onSubmit = async (data: FormEmailResponded) => {
    setLoading(true);
    const subject = data.TitleEmailResponded;
    const msg = data.MessageEmailResponded;

    var config = {
      headers: { "x-auth-token": Token() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };

    try {
      const response = await api.post(
        `/api/admin/response/email/${id}`,
        { subject, msg },
        config
      );
      if (response.status === 200) {
        setLoading(false);
        setErros("");
        setSuccess("Email Respondido com sucesso!");
      }

      if (response.status === 404) {
        setErros("Houve algum problema!");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
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
            onSubmit={handleSubmit(onSubmit)}
            style={{
              marginTop: "5%",
              height: "500px",
              padding: "20px",
            }}
          >
            <Row>
              <Col md={6} lg={6}>
                <div style={{ marginBottom: "5%" }}>
                  <Row style={{ margin: 0 }}>
                    <TitleContent>Email do Usuário</TitleContent>
                  </Row>
                  <Row style={{ margin: 0 }}>
                    <Form.Group style={{ margin: 0, width: "100%" }}>
                      <MyInput>
                        <Form.Control
                          name="emailUser"
                          id="emailUser"
                          readOnly
                          defaultValue={data?.EmailInfo.email_user}
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

              <Col md={6} lg={6} style={{ padding: "20px" }}>
                <div style={{ marginBottom: "5%" }}>
                  <Row style={{ margin: 0 }}>
                    <TitleContent>Assunto da resposta</TitleContent>
                  </Row>
                  <Row style={{ margin: 0 }}>
                    <Form.Group style={{ margin: 0, width: "100%" }}>
                      <MyInput>
                        <Form.Control
                          name="TitleEmailResponded"
                          id="TitleEmailResponded"
                          ref={register({
                            maxLength: {
                              value: 30,
                              message: "Insira no máximo 30 caractéres",
                            },
                            required: {
                              value: true,
                              message: "Insira um assunto de resposta",
                            },
                          })}
                        />
                        {errors.TitleEmailResponded &&
                          (errors.TitleEmailResponded as any).type ===
                            "required" && (
                            <div className="error">
                              {(errors.TitleEmailResponded as any).message}
                            </div>
                          )}
                        {errors.TitleEmailResponded &&
                          (errors.TitleEmailResponded as any).type ===
                            "maxLenght" && (
                            <div className="error">
                              {(errors.TitleEmailResponded as any).message}
                            </div>
                          )}
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
                          name="MessageEmailResponded"
                          id="MessageEmailResponded"
                          ref={register({
                            maxLength: {
                              value: 50,
                              message: "Insira no máximo 50 caractéres",
                            },
                            required: {
                              value: true,
                              message: "Insira uma mensagem de resposta",
                            },
                          })}
                        />
                        {errors.MessageEmailResponded &&
                          (errors.MessageEmailResponded as any).type ===
                            "required" && (
                            <div className="error">
                              {(errors.MessageEmailResponded as any).message}
                            </div>
                          )}
                        {errors.MessageEmailResponded &&
                          (errors.MessageEmailResponded as any).type ===
                            "maxLenght" && (
                            <div className="error">
                              {(errors.MessageEmailResponded as any).message}
                            </div>
                          )}
                      </MyInput>
                    </Form.Group>
                  </Row>
                </div>
                <Row style={{ margin: 0, justifyContent: "flex-end" }}>
                  <Button
                    type="button"
                    variant="outline-danger"
                    style={{ marginRight: "20px" }}
                    onClick={onHide}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" variant="primary">
                    Enviar
                  </Button>
                </Row>
                <Row>
                  {loading ? <Spinner animation="border" /> : ""}
                  <div
                    className="text-danger"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {erros}
                  </div>
                  <div
                    className="text-success"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {success}
                  </div>
                </Row>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdminEmails;
