import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { HeaderModal, ArrowBackIcon, TitleContent, MyInput } from "./styles";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
}

type FormCadastroAdd = {
  nameSpace: string;
  numberSpace: number;
  cepSpace: string;
  descriptionSpace: string;
};

const AdminListSpace: React.FC<Props> = ({ show, onHide }) => {
  const { register, handleSubmit, errors } = useForm<FormCadastroAdd>();
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (data: FormCadastroAdd) => {
    try {
      const name = data.nameSpace;
      const number = data.numberSpace;
      const CEP = data.cepSpace;
      const description = data.descriptionSpace;
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.post(
        "/api/admin/cadastrar",
        { name, number, CEP, description },
        config
      );

      if (response.data["Space created"]) {
        setSuccess("Espaço cadastrado com sucesso!");
      }
      if (
        response.status === 404 ||
        response.data["This dont exist, sorry dude"] === true
      ) {
        setErros("Esse lugar não existe");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal size="xl" animation={true} centered show={show} onHide={onHide}>
      <Modal.Body style={{ padding: 0, backgroundColor: "#DDDDDD" }}>
        <HeaderModal>
          <ArrowBackIcon onClick={onHide} />
        </HeaderModal>
        <div>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              marginTop: "5%",
              height: "500px",
              padding: "20px",
            }}
          >
            <Row style={{ margin: 0 }}>
              <Col md={6} lg={6}>
                <div style={{ marginBottom: "5%" }}>
                  <Row style={{ margin: 0 }}>
                    <TitleContent>Nome</TitleContent>
                  </Row>
                  <Row style={{ margin: 0 }}>
                    <Form.Group style={{ margin: 0, width: "100%" }}>
                      <MyInput>
                        <Form.Control
                          name="nameSpace"
                          id="nameSpace"
                          ref={register({
                            maxLength: {
                              value: 30,
                              message: "insira no máximo 30 caractéres",
                            },
                            required: {
                              value: true,
                              message: "Insira um nome",
                            },
                          })}
                        />
                      </MyInput>

                      {errors.nameSpace &&
                        (errors.nameSpace as any).type === "maxLength" && (
                          <div className="error">
                            {(errors.nameSpace as any).message}
                          </div>
                        )}
                      {errors.nameSpace &&
                        (errors.nameSpace as any).type === "required" && (
                          <div className="error">
                            {(errors.nameSpace as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </Row>
                </div>
                <div style={{ marginBottom: "5%" }}>
                  <Row style={{ margin: 0, justifyContent: "space-between" }}>
                    <TitleContent>Endereço</TitleContent>
                    <TitleContent>Número</TitleContent>
                  </Row>
                  <Row style={{ margin: 0, justifyContent: "space-between" }}>
                    <Form.Group style={{ margin: 0, width: "80%" }}>
                      <MyInput>
                        <Form.Control style={{ width: "89%" }} />
                      </MyInput>
                    </Form.Group>
                    <Form.Group style={{ margin: 0, width: "20%" }}>
                      <MyInput>
                        <Form.Control
                          name="numberSpace"
                          id="numberSpace"
                          ref={register({
                            maxLength: {
                              value: 6,
                              message: "insira no máximo 6 caractéres",
                            },
                            required: {
                              value: true,
                              message: "Insira um número",
                            },
                          })}
                        />
                      </MyInput>

                      {errors.numberSpace &&
                        (errors.numberSpace as any).type === "maxLength" && (
                          <div className="error">
                            {(errors.numberSpace as any).message}
                          </div>
                        )}
                      {errors.numberSpace &&
                        (errors.numberSpace as any).type === "required" && (
                          <div className="error">
                            {(errors.numberSpace as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </Row>
                </div>
                <div style={{ marginBottom: "5%" }}>
                  <Row style={{ margin: 0 }}>
                    <TitleContent>CEP</TitleContent>
                  </Row>
                  <Row style={{ margin: 0 }}>
                    <Form.Group style={{ margin: 0, width: "100%" }}>
                      <MyInput>
                        <Form.Control
                          name="cepSpace"
                          id="cepSpace"
                          ref={register({
                            maxLength: {
                              value: 9,
                              message: "insira no máximo 9 caractéres",
                            },
                            required: {
                              value: true,
                              message: "Insira um CEP",
                            },
                          })}
                        />
                      </MyInput>

                      {errors.cepSpace &&
                        (errors.cepSpace as any).type === "maxLength" && (
                          <div className="error">
                            {(errors.cepSpace as any).message}
                          </div>
                        )}
                      {errors.cepSpace &&
                        (errors.cepSpace as any).type === "required" && (
                          <div className="error">
                            {(errors.cepSpace as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </Row>
                </div>
              </Col>
              <Col md={6} lg={6} style={{ padding: "20px" }}>
                <div style={{ marginBottom: "5%" }}>
                  <Row style={{ margin: 0 }}>
                    <TitleContent>Descrição</TitleContent>
                  </Row>
                  <Row style={{ margin: 0 }}>
                    <Form.Group style={{ margin: 0, width: "100%" }}>
                      <MyInput>
                        <Form.Control
                          as="textarea"
                          rows={8}
                          name="descriptionSpace"
                          id="descriptionSpace"
                          ref={register({
                            maxLength: {
                              value: 50,
                              message: "insira no máximo 50 caractéres",
                            },
                            required: {
                              value: true,
                              message: "Insira uma Descrição",
                            },
                          })}
                        />
                      </MyInput>

                      {errors.descriptionSpace &&
                        (errors.descriptionSpace as any).type ===
                          "maxLength" && (
                          <div className="error">
                            {(errors.descriptionSpace as any).message}
                          </div>
                        )}
                      {errors.descriptionSpace &&
                        (errors.descriptionSpace as any).type ===
                          "required" && (
                          <div className="error">
                            {(errors.descriptionSpace as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </Row>
                </div>

                <Row style={{ margin: 0, justifyContent: "flex-end" }}>
                  <Button
                    type="button"
                    variant="outline-danger"
                    style={{ marginRight: "20px" }}
                    onClick={onHide}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" variant="primary">
                    Salvar
                  </Button>
                </Row>
                <Row>
                  <div
                    className="text-danger"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {erros}
                  </div>
                  <div
                    className="text-success"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {success}
                  </div>
                </Row>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdminListSpace;
