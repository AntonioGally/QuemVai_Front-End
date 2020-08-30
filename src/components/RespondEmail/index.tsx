import React from "react";
import { useForm } from "react-hook-form";

import { Form, Col } from "react-bootstrap";
import { MyLableText, MyForm, MyButton } from "./styles";

export interface IdEmailResponded {
  IdEmailResponded: number;
}
type FormEmailResponded = {
  UserNameEmailResponded: string;
  UserEmailResponded: string;
  TitleEmailResponded: string;
  MessageEmailResponded: string;
};
const RespondEmail: React.FC<IdEmailResponded> = ({ IdEmailResponded }) => {
  const { register, handleSubmit, errors } = useForm<FormEmailResponded>();

  function onSubmit(data: FormEmailResponded) {
    console.log(data);
  }
  return (
    <div style={{ margin: "2% 0" }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <Form.Row>
            <Col sm={12} md={6}>
              <MyLableText> Nome da Empresa </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="UserNameEmailResponded"
                    id="UserNameEmailResponded"
                    defaultValue="ChumeCompany"
                    style={{ borderRadius: "10px" }}
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.UserNameEmailResponded &&
                    (errors.UserNameEmailResponded as any).type ===
                      "required" && (
                      <div className="error">O nome é obrigatório</div>
                    )}
                </Form.Group>
              </MyForm>

              <MyLableText> Email da Empresa </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="email"
                    name="UserEmailResponded"
                    id="UserEmailResponded"
                    defaultValue="company.chume@gmail.com"
                    style={{ borderRadius: "10px" }}
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Insira um email válido",
                      },
                    })}
                  />
                  {errors.UserEmailResponded &&
                    (errors.UserEmailResponded as any).type === "required" && (
                      <div className="error">O Email é obrigatório</div>
                    )}
                  {errors.UserEmailResponded &&
                    (errors.UserEmailResponded as any).type === "pattern" && (
                      <div className="error">
                        {(errors.UserEmailResponded as any).message}
                      </div>
                    )}
                </Form.Group>
              </MyForm>

              <div className="row" style={{ margin: 0 }}>
                <MyLableText>Assunto do Email</MyLableText>
              </div>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="TitleEmailResponded"
                    id="TitleEmailResponded"
                    style={{ borderRadius: "10px" }}
                    ref={register({
                      required: true,                     
                    })}
                  />
                  {errors.TitleEmailResponded &&
                    (errors.TitleEmailResponded as any).type === "required" && (
                      <div className="error">O Assunto é obrigatório</div>
                    )}                 
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
                      name="MessageEmailResponded"
                      id="MessageEmailResponded"
                      rows={10}
                      style={{ borderRadius: "10px" }}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.MessageEmailResponded &&
                      (errors.MessageEmailResponded as any).type ===
                        "required" && (
                        <div className="error">A mensagem é obrigatória</div>
                      )}
                  </Form.Group>
                  <MyButton
                    type="submit"
                    className="btn MyButtonSubmitModalLogin float-right"
                  >
                    Enviar
                  </MyButton>
                </div>
              </MyForm>
              <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="IdEmailResponded">ID</Form.Label>
                    <Form.Control
                      id="IdEmailResponded"
                      name="IdEmailResponded"
                      defaultValue={IdEmailResponded}
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

export default RespondEmail;
