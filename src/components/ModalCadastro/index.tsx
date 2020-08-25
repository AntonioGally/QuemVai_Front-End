import React from "react";
// import { useForm } from "react-hook-form";
import "./styles.css";
import {
  SocialContainer,
  MySocialRow,
  InstaLogo,
  FacebookLogo,
} from "./styles";
import { Modal, Row, Container, Col, Image, Form } from "react-bootstrap";
import QuemVaiLogo2 from "../../img/logo/QuemVaiLogo2.png";

import ModalLogin from '../ModalLogin';

export interface Props {
  show: boolean;
  onHide: any;
}

const ModalCadastro: React.FC<Props> = ({ show, onHide }) => {
  const [modalShow, setModalShow] = React.useState(false);
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
                      style={{ width: "200px", height: "200px" }}
                    />
                  </Row>

                  <Row
                    style={{ margin: "2% 0" }}
                    className="justify-content-center"
                  >
                    <div className="MyTextModalLogin1">Cadastre-se</div>
                  </Row>

                  <Form>
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
                        />
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
                          name="email"
                          id="email"
                          className="MyInputModalLogin"
                        />
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
                          name="email"
                          id="email"
                          className="MyInputModalLogin"
                        />
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
                      style={{ margin: "2% 0 0" }}
                      className="justify-content-center"
                    >
                      <button
                        className="btn MyButtonRegistertModalLogin"
                        onClick={() => {
                          setModalShow(true);
                        }}
                        style={{padding:0}}
                      >
                       <div onClick={onHide} style={{padding:'10px'}}>Voltar</div>
                      </button>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </div>
      </Modal>
      {/* <ModalLogin show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
};

export default ModalCadastro;
