import React from "react";
import { useForm } from "react-hook-form";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import loadingGif from "../../img/icones/loading.gif";

import {
  MyForm,
  MyContainer,
  Social,
  MyTitleForm,
  MyRow,
  MyLableText,
  MyButton,
  Image,
} from "./styles";

import facebook from "../../img/icones/facebook.svg";
import instagram from "../../img/icones/instagram.svg";
import api from "../services/api";

type IFormInput = {
  userEmail: string;
};

const ForgotPasswordForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const [erros, setErros] = React.useState("");
  const [succes, setSucces] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (data: IFormInput) => {
    setLoading(true);

    const email = data.userEmail;
    var config = {
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };

    try {
      const response = await api.post(
        "/api/login/unlockpass",
        { email },
        config
      );

      if (response.status === 200) {
        setLoading(false);
        alert("Email Enviado com sucesso! Cheque sua caixa de Emails :D");
        setSucces(true);
      }
      if (response.status === 204) {
        setErros("Esse email não existe");
        setSucces(false);
        setLoading(false);
      }

      if (response.status === 404) {
        alert("Houve algum problema!");
        setSucces(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (succes) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <MyContainer>
        <Container fluid style={{ width: "80%" }}>
          <Row className="d-flex justify-content-center fluid">
            <MyTitleForm>
              Nós enviaremos um email de redefinição de senha :D
            </MyTitleForm>
          </Row>
          <MyRow>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="d-flex justify-content-center fluid">
                <Col sm={12} md={6}>
                  <MyLableText> Digite seu Email: </MyLableText>
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        placeholder="ex.: robson@gmail.com"
                        style={{ borderRadius: "10px" }}
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Insira um email válido",
                          },
                        })}
                      />
                      {loading ? <Image src={loadingGif} /> : ""}
                      {errors.userEmail &&
                        (errors.userEmail as any).type === "required" && (
                          <div className="error">O Email é obrigatório</div>
                        )}
                      {errors.userEmail &&
                        (errors.userEmail as any).type === "pattern" && (
                          <div className="error">
                            {(errors.userEmail as any).message}
                          </div>
                        )}
                      <div className="error">{erros}</div>
                    </Form.Group>
                  </MyForm>
                </Col>

                <Col sm={12} md={6}>
                  <MyForm>
                    <div style={{ margin: "5%" }}>
                      <MyButton
                        type="submit"
                        className="btn MyButtonSubmitModalLogin float-right"
                      >
                        Enviar
                      </MyButton>
                    </div>
                  </MyForm>
                </Col>
              </Row>
            </Form>
          </MyRow>

          <Social>
            <Row style={{ marginBottom: "3%" }}>
              <img
                src={facebook}
                alt="facebook logo"
                style={{
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                }}
              />
              <div style={{ marginLeft: "2%", cursor: "pointer" }}>
                ChumeCompany
              </div>
            </Row>
            <Row>
              <img
                src={instagram}
                alt="facebook logo"
                style={{ width: "32px", height: "32px", cursor: "pointer" }}
              />
              <div style={{ marginLeft: "2%", cursor: "pointer" }}>
                ChumeCompany
              </div>
            </Row>
          </Social>
        </Container>
      </MyContainer>
    </div>
  );
};

export default ForgotPasswordForm;
