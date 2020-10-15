import React from "react";

import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

import { Form, Col, Button } from "react-bootstrap";
import { MyLableText, MyForm } from "./styles";
import EmailViewReceivedIdForm from "../IdSearchForm/EmailViewReceivedIdForm";
 
export interface FormEmailReceived {
  IdEmailReceived: any;
  UserEmailReceived: any;
  TitleEmailReceived: any;
  StatusEmailReceived: any;
  DateEmailReceived: any;
  MessageEmailReceived: any;
}

const ViewEmail: React.FC<FormEmailReceived> = ({
  IdEmailReceived,
  UserEmailReceived,
  TitleEmailReceived,
  StatusEmailReceived,
  DateEmailReceived,
  MessageEmailReceived,
}) => {
  const [voltar, setVoltar] = React.useState(false);
  const AuxDate = parseISO(String(DateEmailReceived));

  const formattedDate = format(AuxDate, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
    locale: pt,
  });
  if (voltar) {
    return <EmailViewReceivedIdForm />
  }
  return (
    <div style={{ margin: "10% 0" }}>
      <Form>
        <Button onClick={() => setVoltar(true)}>Voltar</Button>
        <fieldset disabled>
          <Form.Row>
            <Col sm={12} md={6}>
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

              <MyLableText> Status do Email </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="StatusEmailReceived"
                    id="StatusEmailReceived"
                    style={{ borderRadius: "10px" }}
                    defaultValue={StatusEmailReceived}
                  />
                </Form.Group>
              </MyForm>

              <MyLableText> Data de envio </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="DateEmailReceived"
                    id="DateEmailReceived"
                    style={{ borderRadius: "10px" }}
                    defaultValue={formattedDate}
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
