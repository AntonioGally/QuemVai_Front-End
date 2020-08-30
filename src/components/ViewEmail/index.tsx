import React from "react";

import { Form, Col } from "react-bootstrap";
import { MyLableText, MyForm } from "./styles";

export interface FormEmailReceived {
  IdEmailReceived: number;
  UserNameEmailReceived: string;
  UserEmailReceived: string;
  TitleEmailReceived: string;
  MessageEmailReceived: string;
}

const ViewEmail: React.FC<FormEmailReceived> = ({
  IdEmailReceived,
  UserNameEmailReceived,
  UserEmailReceived,
  TitleEmailReceived,
  MessageEmailReceived,
}) => {

  return (
    <div style={{ margin: "10% 0" }}>
      <Form>
        <fieldset disabled>
          <Form.Row>
            <Col sm={12} md={6}>
              <MyLableText> Nome do usuário </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="UserNameEmailReceived"
                    id="UserNameEmailReceived"
                    style={{ borderRadius: "10px" }}
                    defaultValue={UserNameEmailReceived}
                  />
                </Form.Group>
              </MyForm>

              <MyLableText> Email do Usuário </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="email"
                    name="UserEmailReceived"
                    id="UserEmailReceived"
                    style={{ borderRadius: "10px" }}
                    defaultValue={UserEmailReceived}
                  />
                </Form.Group>
              </MyForm>

              <div className="row" style={{ margin: 0 }}>
                <MyLableText>Assunto do Email</MyLableText>
              </div>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="TitleEmailReceived"
                    id="TitleEmailReceived"
                    style={{ borderRadius: "10px" }}
                    defaultValue={TitleEmailReceived}
                  />
                </Form.Group>
              </MyForm>
            </Col>

            <Col sm={12} md={6}>
              <MyLableText style={{ marginBottom: "2% 0" }}>
                Mensagem do usuário
              </MyLableText>
              <MyForm>
                <div style={{ margin: "5%" }}>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      name="MessageEmailReceived"
                      id="MessageEmailReceived"
                      rows={10}
                      style={{ borderRadius: "10px" }}
                      defaultValue={MessageEmailReceived}
                    />
                  </Form.Group>
                </div>
              </MyForm>
              <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="IdEmailReceived">ID</Form.Label>
                    <Form.Control
                      id="IdEmailReceived"
                      name="IdEmailReceived"
                      defaultValue={IdEmailReceived}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Col>
          </Form.Row>
        </fieldset>
      </Form>
    </div>
  );
};

export default ViewEmail;
