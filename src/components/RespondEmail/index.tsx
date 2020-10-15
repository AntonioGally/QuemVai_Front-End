import React from "react";
import { useForm } from "react-hook-form";

import { Form, Col, Button } from "react-bootstrap";
import { MyLableText, MyForm, MyButton } from "./styles";

import api from "../../services/api";
import { getTokenAdmin } from "../../services/auth";
import EmailRespondIdForm from "../IdSearchForm/EmailRespondIdForm";

export interface IdEmailResponded {
  IdEmailResponded: any;
}
type FormEmailResponded = {
  UserNameEmailResponded: string;
  UserEmailResponded: string;
  TitleEmailResponded: string;
  MessageEmailResponded: string;
};
const RespondEmail: React.FC<IdEmailResponded> = ({ IdEmailResponded }) => {
  const { register, handleSubmit, errors } = useForm<FormEmailResponded>();
  const [voltar, setVoltar] = React.useState(false);

  const onSubmit = async (data: FormEmailResponded) => {
    const subject = data.TitleEmailResponded;
    const msg = data.MessageEmailResponded;

    var config = {
      headers: { "x-auth-token": getTokenAdmin() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };

    try {
      const response = await api.post(
        `/api/admin/response/email/${IdEmailResponded}`,
        { subject, msg },
        config
      );
      if (response.status === 200) {
        alert("Email Respondido com sucesso!");
        window.location.reload();
      }

      if (response.status === 404) {
        alert("Houve algum problema!");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (voltar) {
    return <EmailRespondIdForm />;
  }

  return (
    <div style={{ margin: "2% 0" }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <Button onClick={() => setVoltar(true)}>Voltar</Button>
          <Form.Row>
            <Col sm={12} md={6}>
              <MyLableText> Nome da Empresa </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    readOnly
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
                    readOnly
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
                <MyLableText>Assunto do Email *</MyLableText>
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

              <div className="row" style={{ margin: 0 }}>
                <MyLableText>ID</MyLableText>
              </div>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    id="IdEmailResponded"
                    name="IdEmailResponded"
                    defaultValue={IdEmailResponded}
                    style={{ borderRadius: "10px" }}
                    readOnly
                  />
                </Form.Group>
              </MyForm>
            </Col>

            <Col sm={12} md={6}>
              <MyLableText style={{ marginBottom: "2% 0" }}>
                Mensagem do Email *
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
              {/* <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
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
              </Form.Row> */}
            </Col>
          </Form.Row>
        </fieldset>
      </Form>
    </div>
  );
};

export default RespondEmail;
