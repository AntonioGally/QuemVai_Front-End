import React from "react";
import { useForm } from "react-hook-form";

import { Form, Col, Button } from "react-bootstrap";
import { ErrorMessage, MyLableText, MyForm, MyButton } from "./styles";

type FormId = {
  id: string;
};

const RespondEmail: React.FC = () => {
  const { register, handleSubmit } = useForm<FormId>();
  const [existingId, setExistingId] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(
    !existingId ? true : false
  );
  const [erros, setErros] = React.useState(false);

  function onSubmit(data: FormId) {
    if (data.id === "123") {
      setExistingId(true);
      setIsDisabled(false);
      setErros(false);
    } else {
      setExistingId(false);
      setIsDisabled(true);
      setErros(true);
    }
  }

  if (existingId) {
    console.log("o id existe zé mané");
  }
  return (
    <div style={{ margin: "2% 0" }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row style={{ margin: "5% 0" }}>
          <Col md={3}>
            <Form.Group>
              <Form.Control
                type="text"
                name="id"
                placeholder="Insira o ID do Email"
                ref={register}
              />
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

      <Form>
        <fieldset disabled={isDisabled}>
          <Form.Row>
            <Col sm={12} md={6}>
              <MyLableText> Nome da Empresa </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="userName"
                    id="userName"
                    defaultValue="ChumeCompany"
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Group>
              </MyForm>

              <MyLableText> Email da Empresa </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    defaultValue="company.chume@gmail.com"
                    style={{ borderRadius: "10px" }}
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
                    name="userSubject"
                    id="userSubject"
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Group>
              </MyForm>
            </Col>

            <Col sm={12} md={6}>
              <MyLableText style={{ marginBottom: "2% 0" }}>
                Mensagem do Email
              </MyLableText>
              <MyForm>
                <div style={{ margin: "5%" }}>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      name="userMessage"
                      id="userMessage"
                      rows={10}
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>
                  <MyButton
                    type="submit"
                    className="btn MyButtonSubmitModalLogin float-right"
                  >
                    Enviar
                  </MyButton>
                </div>
              </MyForm>
            </Col>
          </Form.Row>
        </fieldset>
      </Form>
    </div>
  );
};

export default RespondEmail;
