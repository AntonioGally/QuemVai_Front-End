import React, { useEffect } from "react";
import { Modal, Container, Row, Col, Form, Image } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import {
  SocialContainer,
  InstaLogo,
  FacebookLogo,
  MySocialRow,
  ErroLogin,
  TittlePassword,
} from "./styles";
import "./styles.css";
import { useForm } from "react-hook-form";
import QuemVaiLogo2 from "../../img/logo/QuemVaiLogo2.png";

import api from "../../services/api";
import { login, isAuthenticated, isAuthenticatedAdmin } from "../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
  emailCadastro?: string;
}

type IFormInput = {
  email: String;
  password: String;
  error?: string;
};

const ModalLogin: React.FC<Props> = ({ show, onHide, emailCadastro }) => {
  const [redirectAdmin, SetRedirectAdmin] = React.useState(false);
  const [redirectUser, SetRedirectUser] = React.useState(false);
  const [erroLogin, SetErroLogin] = React.useState(false);
  const { register, handleSubmit, errors } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    const email = data.email;
    const password = data.password;

    var config = {
      headers: { "x-password": password },
    };

    try {
      const response = await api.post(
        "/api/login/signin/user",
        { email },
        config
      );

      login(response.data["User token"]);
    } catch (err) {
      console.log(err);
      SetErroLogin(true);
    }
    const AdminVerification = () => {
      return new Promise(() => {
        setTimeout(() => {
          if (localStorage.getItem("@QuemVaiAdmin-Token")) {
            SetRedirectAdmin(true);
          } else if (localStorage.getItem("@QuemVaiUser-Token")) {
            SetRedirectUser(true);
          }
        }, 500);
      });
    };
    AdminVerification();
  };

  useEffect(() => {
    if (isAuthenticatedAdmin()) {
      SetRedirectAdmin(true);
    } else if (isAuthenticated()) {
      SetRedirectUser(true);
    }
  }, []);

  if (redirectAdmin) {
    return <Redirect to="/Admin" />;
  }
  if (redirectUser) {
    return <Redirect to="/MainAplication" />;
  }

  return (
    <div className="MyModal">
      <Modal size="xl" centered show={show} onHide={onHide}>
        <div>
          <Modal.Body style={{ padding: 0 }}>
            <Container fluid style={{ padding: 0 }}>
              <Row style={{ margin: 0 }} className="MyRowModalLogin">
                <Col md={5} style={{ padding: 0 }} className="Desktop">
                  <SocialContainer>
                    <MySocialRow>
                      <Row
                        style={{ marginBottom: "10%", alignItems: "center" }}
                      >
                        <InstaLogo />{" "}
                        <a
                          href="https://www.instagram.com/chume_co/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="MyLinkModalLogin"
                        >
                          Chume Company
                        </a>
                      </Row>
                      <Row style={{ alignItems: "center" }}>
                        <FacebookLogo />{" "}
                        <a
                          href="https://www.facebook.com/ChumeCompany/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="MyLinkModalLogin"
                        >
                          Chume Company{" "}
                        </a>
                      </Row>
                    </MySocialRow>
                  </SocialContainer>
                </Col>
                <Col md={7} sm={12} style={{ padding: 0 }}>
                  <Row
                    style={{ margin: "2% 0" }}
                    className="justify-content-center"
                  >
                    <Image
                      src={QuemVaiLogo2}
                      alt="Logo Quem Vai"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </Row>

                  <Row
                    style={{ margin: "2% 0" }}
                    className="justify-content-center"
                  >
                    <div className="MyTextModalLogin1">
                      Entre e encontre mais{" "}
                      <div style={{ color: "#3EDAA8" }}>lazer!</div>
                    </div>
                  </Row>

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row
                      style={{ margin: "2% 0" }}
                      className="justify-content-center"
                    >
                      <Form.Group style={{ width: "65%" }}>
                        <h5 style={{ fontWeight: "bold" }}>Email</h5>
                        <Form.Control
                          type="email"
                          name="email"
                          id="email"
                          defaultValue={
                            emailCadastro !== "" ? emailCadastro : ""
                          }
                          className="MyInputModalLogin"
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
                      </Form.Group>
                    </Row>

                    <Row
                      style={{ margin: 0 }}
                      className="justify-content-center"
                    >
                      <Form.Group style={{ width: "65%" }}>
                        <TittlePassword>
                          <span>
                            Senha{" "}
                            <Link
                              to="/ForgotPassword"
                              className="ForgotPassword"
                            >
                              Esqueci :(
                            </Link>{" "}
                          </span>
                        </TittlePassword>
                        <Form.Control
                          type="password"
                          name="password"
                          id="password"
                          className="MyInputModalLogin"
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
                      </Form.Group>
                    </Row>
                    <Row
                      style={{ margin: "2% 0 0" }}
                      className="justify-content-center"
                    >
                      {erroLogin ? (
                        <ErroLogin>Email ou senha incorreto</ErroLogin>
                      ) : (
                        ""
                      )}
                    </Row>
                    <Row
                      style={{ margin: "0" }}
                      className="justify-content-center"
                    >
                      <button
                        type="submit"
                        className="btn MyButtonSubmitModalLogin"
                      >
                        Entrar
                      </button>
                    </Row>
                  </Form>
                  <Row
                    style={{ margin: "2% 0 2%" }}
                    className="justify-content-center"
                  >
                    <Link
                      to="/CadastroUser"
                      type="button"
                      className="btn MyButtonRegistertModalLogin"
                      style={{ padding: 0 }}
                    >
                      <div style={{ padding: "10px" }}>Cadastrar</div>
                    </Link>

                    {/* <button
                      type="button"
                      className="btn MyButtonRegistertModalLogin"
                      onClick={() => {
                        setModalShow(true);                        
                      }}                      
                      style={{ padding: 0 }}
                    >
                      <div style={{ padding: "10px" }}>
                        Cadastrar
                      </div>
                    </button> */}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalLogin;
