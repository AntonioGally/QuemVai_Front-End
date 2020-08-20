import React from "react";
import { NavLink } from "react-router-dom";
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

import QuemVaiLogo from "../../img/logo/QuemVaiLogo.png";

const ModalLogin: React.FC = () => {
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
                <Form className="MyContainerForm">
                  <div className="MyAllForm">
                    <MyForm>
                      <Form.Label>
                        <h5>Email</h5>
                      </Form.Label>
                      <FormControl type="text" className="md-4" />
                    </MyForm>
                    <MyForm>
                      <Form.Label>
                        <h5>Senha</h5>
                      </Form.Label>
                      <FormControl type="password" className="md-4" />
                    </MyForm>
                    <MyButton>
                      <NavLink
                        to="/MainAplication"
                        className="float-right btn btn-primary"
                        style={{ marginBottom: "10px" }}
                      >
                        Entrar
                      </NavLink>

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
                    <FormControl type="text" className="md-4" />
                  </MyForm>
                  <MyForm>
                    <Form.Label>
                      <h5>Senha</h5>
                    </Form.Label>
                    <FormControl type="password" className="md-4" />
                  </MyForm>
                  <MyButton>
                    <NavLink
                      to="/MainAplication"
                      className="float-right btn btn-primary"
                      style={{ marginBottom: "10px" }}
                    >
                      Entrar
                    </NavLink>

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
