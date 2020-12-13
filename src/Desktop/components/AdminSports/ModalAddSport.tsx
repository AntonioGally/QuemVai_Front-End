import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { HeaderModal, ArrowBackIcon, TitleContent, MyInput } from "./styles";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

type FormCadastroSport = {
  nameSport: string;
  descriptionSport: string;
};

export interface Props {
  show: boolean;
  onHide: any;
}

const AdminSports: React.FC<Props> = ({ show, onHide }) => {
  const { register, handleSubmit, errors } = useForm<FormCadastroSport>();
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmitForm = async (data: FormCadastroSport) => {
    const name = data.nameSport;
    const description = data.descriptionSport;
    var config = {
      headers: { "x-auth-token": Token() },
    };

    try {
      const response = await api.post(
        "/api/admin/sport/cadastrar",
        { name, description },
        config
      );

      if (response.status === 200) {
        setErros("");
        setSuccess("Esporte cadastrado com sucesso!");
      }
      if (response.status !== 200) {
        setErros("Houve algum problema");
        setSuccess("");
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
            onSubmit={handleSubmit(onSubmitForm)}
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
                          name="nameSport"
                          id="nameSport"
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

                      {errors.nameSport &&
                        (errors.nameSport as any).type === "maxLength" && (
                          <div className="error">
                            {(errors.nameSport as any).message}
                          </div>
                        )}
                      {errors.nameSport &&
                        (errors.nameSport as any).type === "required" && (
                          <div className="error">
                            {(errors.nameSport as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </Row>
                </div>
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
                          name="descriptionSport"
                          id="descriptionSport"
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

                      {errors.descriptionSport &&
                        (errors.descriptionSport as any).type ===
                          "maxLength" && (
                          <div className="error">
                            {(errors.descriptionSport as any).message}
                          </div>
                        )}
                      {errors.descriptionSport &&
                        (errors.descriptionSport as any).type ===
                          "required" && (
                          <div className="error">
                            {(errors.descriptionSport as any).message}
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

export default AdminSports;
