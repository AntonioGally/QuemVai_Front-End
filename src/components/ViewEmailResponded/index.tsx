import React from "react";

import { Form, Col } from "react-bootstrap";
import { MyLableText, MyForm } from "./styles";

export interface FormEmailResponded {
  Informations: any;
}

const ViewEmailResponded: React.FC<FormEmailResponded> = ({
  Informations
}) => { 
  
  return (
    <div style={{ margin: "10% 0" }}>
      <Form>
        <fieldset disabled>
          <Form.Row>
            <Col sm={12} md={6}>
              <MyLableText> Email do Usuário </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="email"
                    name="UserEmailResponded"
                    id="UserEmailResponded"
                    style={{ borderRadius: "10px" }}
                    defaultValue={Informations.map((i : any) => {
                      return i.email_user;
                    })}
                  />
                </Form.Group>
              </MyForm>

              <div className="row" style={{ margin: 0 }}>
                <MyLableText>Assunto do Email Resposta</MyLableText>
              </div>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="TitleEmailResponded"
                    id="TitleEmailResponded"
                    style={{ borderRadius: "10px" }}
                    defaultValue={Informations.map((i : any) => {
                      return i.ownerMessage.map((u:any ) => {
                        return u.subject;
                      });
                    })}
                  />
                </Form.Group>
              </MyForm>

              <MyLableText> Status do Email </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="StatusEmailResponded"
                    id="StatusEmailResponded"
                    style={{ borderRadius: "10px" }}
                    defaultValue={Informations.map((i : any) => {
                      return i.status;
                    })}
                  />
                </Form.Group>
              </MyForm>

              <MyLableText> Data de envio resposta</MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="DateEmailResponded"
                    id="DateEmailResponded"
                    style={{ borderRadius: "10px" }}
                    defaultValue={Informations.map((i : any) => {
                      return i.updatedAt;
                    })}
                  />
                </Form.Group>
              </MyForm>
            </Col>

            <Col sm={12} md={6}>
              <MyLableText style={{ marginBottom: "2% 0" }}>
                Mensagem Resposta
              </MyLableText>
              <MyForm>
                <div style={{ margin: "5%" }}>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      name="MessageEmailResponded"
                      id="MessageEmailResponded"
                      rows={10}
                      style={{ borderRadius: "10px" }}
                      defaultValue={Informations.map((i : any) => {
                        return i.ownerMessage.map((u:any ) => {
                          return u.message;
                        });
                      })}
                    />
                  </Form.Group>
                </div>
              </MyForm>
              <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="IdEmailResponded">ID</Form.Label>
                    <Form.Control
                      id="IdEmailResponded"
                      name="IdEmailResponded"
                      defaultValue={Informations.map((i : any) => {
                        return i.id;
                      })}
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

export default ViewEmailResponded;
