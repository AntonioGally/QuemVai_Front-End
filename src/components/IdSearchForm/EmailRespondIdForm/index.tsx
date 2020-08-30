import React from "react";
import { useForm } from "react-hook-form";

import { Form, Col, Button } from "react-bootstrap";
import { ErrorMessage } from "./styles";

import RespondEmail from "../../RespondEmail";

type EmailRespondedIdForm = {
  IdEmail: number;
};

var IdTyped: number;
const EmailRespondIdForm: React.FC = () => {
  const { register, handleSubmit, errors} = useForm<EmailRespondedIdForm>();
  const [existingId, setExistingId] = React.useState(false);
  const [erros, setErros] = React.useState(false);

  function onSubmit(data: EmailRespondedIdForm) {
    var NewId = Number(data.IdEmail);
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
    return <RespondEmail IdEmailResponded={IdTyped} />;
  }
  return (
    <div style={{ margin: "2% 0" }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row style={{ margin: "5% 0" }}>
          <Col md={3}>
            <Form.Group>
              <Form.Control
                type="text"
                name="IdEmail"
                placeholder="Insira o ID do Email"
                ref={register({
                  required: true,
                })}
              />
              {errors.IdEmail &&
                (errors.IdEmail as any).type === "required" && (
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

export default EmailRespondIdForm;
