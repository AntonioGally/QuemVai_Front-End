import React from "react";
import { Redirect } from "react-router-dom";
import {
  Modal,
  Container,
  Row,
  Col,
  Form,
  Image,
} from "react-bootstrap";

import {
  SocialContainer,
  InstaLogo,
  FacebookLogo,
  MySocialRow,
} from "./styles";
import "./styles.css";

import { useForm } from "react-hook-form";
import QuemVaiLogo2 from "../../img/logo/QuemVaiLogo2.png";

export interface Props {
  show: boolean;
  onHide: any;
}

type IFormInput = {
  email: String;
  password: String;
};

const ModalLogin: React.FC<Props> = ({ show, onHide }) => {  
  const [redirect, setRedirect] = React.useState(false);
  const { register, handleSubmit, errors } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    if (data.email === "admin@admin.com" && data.password === "admin123") {
      setRedirect(true);
    } else {
      console.log('cara tu n é adm, tu n entra')
    }
  };
  if (redirect) {
    return <Redirect to="/MainAplication" />;
  }

  return (
    <div className="MyModal">
      <Modal size="xl" centered show={show} onHide={onHide}>
        <div>
          <Modal.Header closeButton className="CellPhone"></Modal.Header>

          <Modal.Body style={{ padding: 0 }}>
            <Container fluid style={{ padding: 0 }}>
              <Row style={{ margin: 0 }} className="MyRowModalLogin">
                <Col md={5} style={{ padding: 0 }} className="Desktop">
                  <SocialContainer>
                    <MySocialRow>
                      <Row
                        style={{ marginBottom: "10%", alignItems: "center" }}
                      >
                        <InstaLogo /> Chume Company
                      </Row>
                      <Row style={{ alignItems: "center" }}>
                        <FacebookLogo /> Chume Company
                      </Row>
                    </MySocialRow>
                  </SocialContainer>
                </Col>
                <Col md={7} sm={12} style={{ padding: 0 }}>
                  <Row style={{ margin: 0 }} className="justify-content-center">
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
                        <h5 style={{ fontWeight: "bold" }}>Senha</h5>
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
                      <button
                        type="submit"
                        className="btn MyButtonSubmitModalLogin"
                      >
                        Entrar
                      </button>
                    </Row>
                    <Row
                      style={{ margin: "5% 0 2%" }}
                      className="justify-content-center"
                    >
                      <button
                        type="button"
                        className="btn MyButtonRegistertModalLogin"
                      >
                        Cadastrar
                      </button>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer> */}
        </div>
      </Modal>
    </div>
  );
};

export default ModalLogin;
