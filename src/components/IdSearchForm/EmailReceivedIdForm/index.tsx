import React from "react";
import { useForm } from "react-hook-form";

import ViewEmail from "../../ViewEmail";

import { Form, Col, Button } from "react-bootstrap";
import { ErrorMessage } from "./styles";

type EmailReceivedIdForm = {
  IdEmailReceived: number;
};

const EmailReceivedInformation = {
  UserNameEmailReceived: "Joaquim Joca",
  UserEmailReceived: "joaquim.joca@gmail.com",
  TitleEmailReceived: "Oie",
  MessageEmailReceived: "Oie Chume Company",
};
var IdTyped: number;
const EmailReceivedIdForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<EmailReceivedIdForm>();
  const [existingId, setExistingId] = React.useState(false);
  const [erros, setErros] = React.useState(false);

  function onSubmitId(data: EmailReceivedIdForm) {
    var NewId = Number(data.IdEmailReceived);
    if (NewId === 123) {
      setExistingId(true);
      setErros(false);
      IdTyped = NewId;
    } else {
      setExistingId(false);
      setErros(true);
    }
  }

  if (existingId) {
    return (
      <ViewEmail
        IdEmailReceived={IdTyped}
        UserNameEmailReceived={EmailReceivedInformation.UserNameEmailReceived}
        UserEmailReceived={EmailReceivedInformation.UserEmailReceived}
        TitleEmailReceived={EmailReceivedInformation.TitleEmailReceived}
        MessageEmailReceived={EmailReceivedInformation.MessageEmailReceived}
      />
    );
  }
  return (
    <div style={{ margin: "2% 0" }}>
      <Form onSubmit={handleSubmit(onSubmitId)}>
        <Form.Row style={{ margin: "5% 0" }}>
          <Col md={3}>
            <Form.Group>
              <Form.Control
                type="text"
                name="IdEmailReceived"
                id="IdEmailReceived"
                placeholder="Insira o ID do Email"
                ref={register({
                  required: true,
                })}
              />
              {errors.IdEmailReceived &&
                (errors.IdEmailReceived as any).type === "required" && (
                  <div className="error">
                    <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                  </div>
                )}
            </Form.Group>
            {erros && <ErrorMessage>Esse ID não existe :(</ErrorMessage>}
          </Col>

          <Col>
            <Button
              variant="primary"
              type="submit"
              style={{ marginLeft: "10px" }}
            >
              Pesquisar
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default EmailReceivedIdForm;
