import React, { useEffect, useState } from "react";

import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

import { Form, Col, Row } from "react-bootstrap";
import { MyLableText, MyForm } from "./styles";

export interface FormEmailResponded {
  Informations: any;
}

const ViewEmailResponded: React.FC<FormEmailResponded> = ({ Informations }) => {
  const [createAt, setCreateAt] = useState(String);
  const [updateAt, setUpdateAt] = useState(String);
  useEffect(() => {
    var DateInicialCreated: Date = Informations.map((i: any) => {
      return i.createdAt;
    });

    const AuxDateCreated = parseISO(String(DateInicialCreated));
    const formattedDateCreated = format(
      AuxDateCreated,
      "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
      {
        locale: pt,
      }
    );

    setCreateAt(formattedDateCreated);

    var DateInicialUpdated: Date = Informations.map((i: any) => {
      return i.updatedAt;
    });
    const AuxDate = parseISO(String(DateInicialUpdated));
    const formattedDateUpdated = format(
      AuxDate,
      "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
      {
        locale: pt,
      }
    );
    setUpdateAt(formattedDateUpdated);
  }, [Informations]);
  return (
    <div style={{ margin: "5% 0 0" }}>
      <Form>
        <fieldset disabled>
          <Row>
            <Col sm={12} md={6}>
              <MyLableText className="title">Usuário</MyLableText>
              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Email do Usuário</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="email"
                        name="UserEmailResponded"
                        id="UserEmailResponded"
                        style={{ borderRadius: "10px" }}
                        defaultValue={Informations.map((i: any) => {
                          return i.email_user;
                        })}
                      />
                    </Form.Group>
                  </MyForm>
                </Row>
              </Col>

              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Assunto do Email Enviado</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="TitleEmailResponded"
                        id="TitleEmailResponded"
                        style={{ borderRadius: "10px" }}
                        defaultValue={Informations.map((i: any) => {
                          return i.subject;
                        })}
                      />
                    </Form.Group>
                  </MyForm>
                </Row>
              </Col>

              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Status do Email</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="StatusEmailResponded"
                        id="StatusEmailResponded"
                        style={{ borderRadius: "10px" }}
                        defaultValue={Informations.map((i: any) => {
                          return i.status;
                        })}
                      />
                    </Form.Group>
                  </MyForm>
                </Row>
              </Col>

              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Data de envio do usuário</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="DateEmailResponded"
                        id="DateEmailResponded"
                        style={{ borderRadius: "10px" }}
                        defaultValue={createAt}
                      />
                    </Form.Group>
                  </MyForm>
                </Row>
              </Col>

              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Mensagem do usuário</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <div style={{ margin: "5%" }}>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          name="MessageEmailResponded"
                          id="MessageEmailResponded"
                          rows={10}
                          style={{ borderRadius: "10px" }}
                          defaultValue={Informations.map((i: any) => {
                            return i.message;
                          })}
                        />
                      </Form.Group>
                    </div>
                  </MyForm>
                </Row>
              </Col>
            </Col>
            <Col sm={12} md={6}>
              <MyLableText className="title">Empresa</MyLableText>
              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Email da Empresa</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="email"
                        name="UserEmailResponded"
                        id="UserEmailResponded"
                        style={{ borderRadius: "10px" }}
                        defaultValue={Informations.map((i: any) => {
                          return i.ownerMessage.map((u: any) => {
                            return u.email_user;
                          });
                        })}
                      />
                    </Form.Group>
                  </MyForm>
                </Row>
              </Col>

              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Assunto do Email Resposta</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="TitleEmailResponded"
                        id="TitleEmailResponded"
                        style={{ borderRadius: "10px" }}
                        defaultValue={Informations.map((i: any) => {
                          return i.ownerMessage.map((u: any) => {
                            return u.subject;
                          });
                        })}
                      />
                    </Form.Group>
                  </MyForm>
                </Row>
              </Col>

              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Status do Email</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="StatusEmailResponded"
                        id="StatusEmailResponded"
                        style={{ borderRadius: "10px" }}
                        defaultValue={Informations.map((i: any) => {
                          return i.status;
                        })}
                      />
                    </Form.Group>
                  </MyForm>
                </Row>
              </Col>

              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Data de envio resposta</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="DateEmailResponded"
                        id="DateEmailResponded"
                        style={{ borderRadius: "10px" }}
                        defaultValue={updateAt}
                      />
                    </Form.Group>
                  </MyForm>
                </Row>
              </Col>

              <Col>
                <Row className="justify-content-center">
                  <MyLableText>Mensagem Resposta</MyLableText>
                </Row>

                <Row className="justify-content-center">
                  <MyForm className="firstColumn">
                    <div style={{ margin: "5%" }}>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          name="MessageEmailResponded"
                          id="MessageEmailResponded"
                          rows={10}
                          style={{ borderRadius: "10px" }}
                          defaultValue={Informations.map((i: any) => {
                            return i.ownerMessage.map((u: any) => {
                              return u.message;
                            });
                          })}
                        />
                      </Form.Group>
                    </div>
                  </MyForm>
                </Row>
              </Col>
            </Col>
            <Row className="justify-content-center" style={{ width: "100%" }}>
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="IdEmailResponded">ID</Form.Label>
                  <Form.Control
                    id="IdEmailResponded"
                    name="IdEmailResponded"
                    defaultValue={Informations.map((i: any) => {
                      return i.id;
                    })}
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
          </Row>
        </fieldset>
      </Form>
    </div>
  );
};

export default ViewEmailResponded;
