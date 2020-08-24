import React from "react";
import { useForm } from "react-hook-form";

import { Container, Col, Row, Form } from "react-bootstrap";

import {
  MyForm,
  MyContainer,
  Social,
  MyTitleForm,
  MyRow,
  MyLableText,
  MyButton,
} from "./style";
import facebook from "../../img/icones/facebook.svg";
import instagram from "../../img/icones/instagram.svg";

type IFormInput = {
  userName: string;
  userEmail: string;
  userSubject: string;
  userMessage: string;
};

const FormContato: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  return (
    <div>
      <MyContainer>
        <Container fluid>
          <Row className="d-flex justify-content-center fluid">
            <MyTitleForm>
              Dê o seu feedback para podermos melhorar cada vez mais
            </MyTitleForm>
          </Row>
          <MyRow>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="d-flex justify-content-center fluid">
                <Col sm={12} md={6}>
                  <MyLableText> Qual o seu nome? </MyLableText>
                  <MyForm className="firstColumn">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="ex.: Robson da Silva"
                        style={{ borderRadius: "10px" }}
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Insira nome válido",
                          },
                        })}
                      />
                      {errors.userName &&
                        (errors.userName as any).type === "required" && (
                          <div className="error">O nome é obrigatório</div>
                        )}
                      {errors.userName &&
                        (errors.userName as any).type === "pattern" && (
                          <div className="error">
                            {(errors.userName as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </MyForm>

                  <MyLableText> E o seu E-mail? </MyLableText>
                  <MyForm className="firstColumn">
                    <Form.Group controlId="formBasicEmail">
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
                    </Form.Group>
                  </MyForm>

                  <div className="row" style={{ margin: 0 }}>
                    <MyLableText>
                      Assunto <span>(opcional)</span>
                    </MyLableText>
                  </div>
                  <MyForm className="firstColumn">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        name="userSubject"
                        id="userSubject"
                        placeholder="ex.: Dúvida sobre as amizades"
                        style={{ borderRadius: "10px" }}
                        ref={register({
                          pattern: {
                            value: /^[A-Za-z0-9]+$/i,
                            message: "Insira um assunto válido",
                          },
                        })}
                      />
                      {errors.userSubject &&
                        (errors.userSubject as any).type === "pattern" && (
                          <div className="error">
                            {(errors.userSubject as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </MyForm>
                </Col>

                <Col sm={12} md={6}>
                  <h4 style={{ marginBottom: "2%" }}>Digite sua mensagem *</h4>
                  <MyForm>
                    <div style={{ margin: "5%" }}>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          name="userMessage"
                          id="userMessage"
                          rows={10}
                          style={{ borderRadius: "10px" }}
                          ref={register({
                            required: true,
                          })}
                        />
                        {errors.userMessage &&
                          (errors.userMessage as any).type === "required" && (
                            <div className="error">
                              A mensagem é obrigatória
                            </div>
                          )}
                      </Form.Group>

                      <MyButton
                        type="submit"
                        className="btn MyButtonSubmitModalLogin float-right"
                      >
                        Entrar
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

export default FormContato;
