import React from "react";
import { Redirect } from "react-router-dom";
import {
  Modal,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import {
  MyForm,
  MyButton,
  SocialContainer,
  InstaLogo,
  FacebookLogo,
  MySocialRow,
} from "./styles";
import "./styles.css";

import { useForm } from "react-hook-form";
import QuemVaiLogo from "../../img/logo/QuemVaiLogo.png";

type IFormInput = {
  email: String;
  password: String;
};
let validationRedirect = false;

const ModalLogin: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log(data);
    validationRedirect = true;
  };
  if (validationRedirect) {
    validationRedirect = false;
    return <Redirect to="/MainAplication" />;
  }
  return (
    <div className="MyModal">
      <div className="CellPhone">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
      </div>
      <Modal.Body className="show-grid withOutPadding">
        <Container>
          <div className="Desktop">
            <Row>
              <Col
                xs={12}
                md={4}
                style={{ backgroundColor: "#6FCF97", padding: "5% 4%" }}
                className="d-flex align-items-center"
              >
                <SocialContainer>
                  <MySocialRow>
                    <Row style={{ marginBottom: "10%" }}>
                      <InstaLogo /> Chume Company
                    </Row>
                    <Row>
                      <FacebookLogo /> Chume Company
                    </Row>
                  </MySocialRow>
                </SocialContainer>
              </Col>
              <Col xs={12} md={8}>
                <div className="text-center">
                  <Image
                    src={QuemVaiLogo}
                    fluid
                    style={{
                      marginBottom: "5%",
                      width: "250px",
                      height: "250px",
                    }}
                  />
                </div>
                <Form
                  className="MyContainerForm"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="MyAllForm">
                    <MyForm>
                      <Form.Label>
                        <h5>Email</h5>
                      </Form.Label>
                      <FormControl
                        type="email"
                        className="md-4"
                        name="email"
                        id="email"
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Insira um email válido",
                          },
                        })}
                      />

                      {errors.email &&
                        (errors.email as any).type === "required" && (
                          <div className="error">Insira um email</div>
                        )}
                      {errors.email &&
                        (errors.email as any).type === "pattern" && (
                          <div className="error">
                            {(errors.email as any).message}
                          </div>
                        )}
                    </MyForm>
                    <MyForm>
                      <Form.Label>
                        <h5>Senha</h5>
                      </Form.Label>
                      <FormControl
                        type="password"
                        className="md-4"
                        name="password"
                        id="password"
                        ref={register({
                          minLength: {
                            value: 8,
                            message: "Insira no mínimo 8 caractéres",
                          },
                          required: true,
                        })}
                      />

                      {errors.password &&
                        (errors.password as any).type === "required" && (
                          <div className="error">Insira uma senha</div>
                        )}

                      {errors.password &&
                        (errors.password as any).type === "minLength" && (
                          <div className="error">
                            {(errors.password as any).message}
                          </div>
                        )}
                    </MyForm>
                    <MyButton>
                      <Button
                        className="float-right btn btn-primary"
                        style={{ marginBottom: "10px" }}
                        type="submit"
                      >
                        Entrar
                      </Button>

                      <Button variant="outline-success" className="float-right">
                        Cadastrar
                      </Button>
                    </MyButton>
                  </div>
                </Form>
              </Col>
            </Row>{" "}
          </div>

          <div className="CellPhone">
            <Row className="d-flex justify-content-center">
              <Col xs={12} md={8}>
                <div className="text-center">
                  <Image
                    src={QuemVaiLogo}
                    fluid
                    style={{
                      marginBottom: "5%",
                      width: "250px",
                      height: "250px",
                    }}
                  />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <Form>
                  <MyForm>
                    <Form.Label>
                      <h5>Email</h5>
                    </Form.Label>
                    <FormControl
                      type="email"
                      className="md-4"
                      name="email"
                      id="email"
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Insira um email válido",
                        },
                      })}
                    />

                    {errors.email &&
                      (errors.email as any).type === "required" && (
                        <div className="error">Insira um email</div>
                      )}
                    {errors.email &&
                      (errors.email as any).type === "pattern" && (
                        <div className="error">
                          {(errors.email as any).message}
                        </div>
                      )}
                  </MyForm>
                  <MyForm>
                    <Form.Label>
                      <h5>Senha</h5>
                    </Form.Label>
                    <FormControl
                      type="password"
                      className="md-4"
                      name="password"
                      id="password"
                      ref={register({
                        minLength: {
                          value: 8,
                          message: "Insira no mínimo 8 caractéres",
                        },
                        required: true,
                      })}
                    />

                    {errors.password &&
                      (errors.password as any).type === "required" && (
                        <div className="error">Insira uma senha</div>
                      )}

                    {errors.password &&
                      (errors.password as any).type === "minLength" && (
                        <div className="error">
                          {(errors.password as any).message}
                        </div>
                      )}
                  </MyForm>
                  <MyButton>
                    <Button
                      className="float-right btn btn-primary"
                      style={{ marginBottom: "10px" }}
                      type="submit"
                    >
                      Entrar
                    </Button>

                    <Button variant="outline-success" className="float-right">
                      Cadastrar
                    </Button>
                  </MyButton>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </Modal.Body>
    </div>
  );
};

export default ModalLogin;
