import React from "react";

import { Container, Col, Row, Form, Button } from "react-bootstrap";

import { MyForm, MyContainer, MyCol, Social } from "./style";

import facebook from "../../img/icones/facebook.svg";
import instagram from "../../img/icones/instagram.svg";

const FormContato: React.FC = () => {
  return (
    <div>
      <MyContainer>
        <Container fluid>
          <Row className="d-flex justify-content-center fluid">
            <MyCol>
              <Col className="lg-6 ">
                <h4 style={{ marginBottom: "2%" }}>Qual é o seu nome? *</h4>
                <MyForm className="firstColumn">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="ex.: Robson da Silva"
                        style={{ borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Form>
                </MyForm>

                <h4 style={{ marginBottom: "2%" }}>E o seu Email? *</h4>
                <MyForm className="firstColumn">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="ex.: robson@gmail.com"
                        style={{ borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Form>
                </MyForm>

                <h4 style={{ marginBottom: "2%" }}>Celular</h4>
                <MyForm className="firstColumn">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="ex.: (11) 99999-9999"
                        style={{ borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Form>
                </MyForm>
              </Col>
            </MyCol>

            <MyCol>
              <Col className="lg-6">
                <h4 style={{ marginBottom: "2%" }}>Digite sua mensagem *</h4>
                <MyForm>
                  <Form style={{ marginTop: "5%", marginLeft: "5%" }}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows={10} />
                    </Form.Group>
                  </Form>
                  <Button size="lg" variant="primary float-right" type="submit">
                    Enviar
                  </Button>
                </MyForm>
              </Col>
            </MyCol>
          </Row>

          <Social>
            <Row>
              <img
                src={facebook}
                alt="facebook logo"
                style={{
                  width: "32px",
                  height: "32px",
                  marginBottom: "3%",
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
