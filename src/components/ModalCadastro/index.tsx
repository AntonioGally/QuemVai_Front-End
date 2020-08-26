import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import {
  SocialContainer,
  MySocialRow,
  InstaLogo,
  FacebookLogo,
} from "./styles";
import { Modal, Row, Container, Col, Image, Form } from "react-bootstrap";
import QuemVaiLogo2 from "../../img/logo/QuemVaiLogo2.png";

import ModalLogin from "../ModalLogin";

export interface Props {
  show: boolean;
  onHide: any;
}

type CadastroFormInput = {
  email: string;
  name: string;
  cellphone: number;
};

const ModalCadastro: React.FC<Props> = ({ show, onHide }) => {
  const { register, handleSubmit, errors } = useForm<CadastroFormInput>();
  const [modalShow, setModalShow] = React.useState(false);

  const onSubmit = (data: CadastroFormInput) => {
    console.log(data);
  };

  if (modalShow) {
    return <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />;
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
                  <Row
                    style={{ margin: "2% 0" }}
                    className="justify-content-center"
                  >
                    <Image
                      src={QuemVaiLogo2}
                      alt="Logo Quem Vai"
                      style={{ width: "125px", height: "125px" }}
                    />
                  </Row>
                  <Row
                    style={{ margin: "2% 0" }}
                    className="justify-content-center"
                  >
                    <button                      
                      className="btn MyButtonSubmitModalLogin"
                    >
                      Entrar com Facebook
                      <FacebookLogo style={{ marginLeft: "2%" }} />
                    </button>
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
                      style={{ margin: "2% 0" }}
                      className="justify-content-center"
                    >
                      <Form.Group style={{ width: "65%" }}>
                        <h5 style={{ fontWeight: "bold" }}>Nome</h5>
                        <Form.Control
                          type="text"
                          name="name"
                          id="name"
                          className="MyInputModalLogin"
                          ref={register({
                            required: true,
                          })}
                        />
                        {errors.name &&
                          (errors.name as any).type === "required" && (
                            <div className="error">Insira um nome</div>
                          )}
                      </Form.Group>
                    </Row>

                    <Row
                      style={{ margin: "2% 0" }}
                      className="justify-content-center"
                    >
                      <Form.Group style={{ width: "65%" }}>
                        <h5 style={{ fontWeight: "bold" }}>Celular</h5>
                        <Form.Control
                          type="text"
                          name="cellphone"
                          id="cellphone"
                          placeholder="Ex.: 11948704288"
                          className="MyInputModalLogin"
                          ref={register({
                            minLength: {
                              value: 11,
                              message: "Insira no mínimo 11 números",
                            },
                            required: true,
                          })}
                        />
                        {errors.cellphone &&
                          (errors.cellphone as any).type === "required" && (
                            <div className="error">
                              Insira um número de celular
                            </div>
                          )}
                        {errors.cellphone &&
                          (errors.cellphone as any).type === "minLength" && (
                            <div className="error">
                              {(errors.cellphone as any).message}
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
                        Prosseguir
                      </button>
                    </Row>                    
                  </Form>
                  <Row
                      style={{ margin: "2% 0 0" }}
                      className="justify-content-center"
                    >
                      <button
                        className="btn MyButtonRegistertModalLogin"
                        onClick={() => {
                          setModalShow(true);
                        }}
                        style={{ padding: 0 }}
                      >
                        <div onClick={onHide} style={{ padding: "10px" }}>
                          Voltar
                        </div>
                      </button>
                    </Row>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </div>
      </Modal>
      {/* */}
    </div>
  );
};

export default ModalCadastro;
