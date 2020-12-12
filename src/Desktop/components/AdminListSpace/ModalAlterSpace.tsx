import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { HeaderModal, ArrowBackIcon, TitleContent, MyInput } from "./styles";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { ConfigSpaceAdmin } from "../../../@types";

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
}

type FormCadastroAlter = {
  nameSpace: string;
  descriptionSpace: string;
};

interface Data {
  SpaceInfo: ConfigSpaceAdmin;
}

const AdminListSpace: React.FC<Props> = ({ show, onHide, id }) => {
  const { register, handleSubmit, errors } = useForm<FormCadastroAlter>();
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get(`/api/admin/find/space/${id}`, {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [SpaceInfo] = responses;
      const space = await SpaceInfo.data;
      setData({ SpaceInfo: space });
    });
  }, [id]);

  const onSubmitForm = async (data: FormCadastroAlter) => {
    const name = data.nameSpace;
    const description = data.descriptionSpace;
    var config = {
      headers: { "x-auth-token": Token() },
    };

    try {
      const response = await api.put(
        `/api/admin/update/${id}`,
        { name, description },
        config
      );

      if (response.data.Updated) {
        setErros("");
        setSuccess("Espaço atualizado com sucesso!");
      }
      if (!response.data.Updated) {
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
                          name="nameSpace"
                          id="nameSpace"
                          defaultValue={data?.SpaceInfo.name}
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
                        <Form.Control
                          style={{ width: "89%" }}
                          readOnly
                          defaultValue={data?.SpaceInfo.address}
                        />
                      </MyInput>
                    </Form.Group>
                    <Form.Group style={{ margin: 0, width: "20%" }}>
                      <MyInput>
                        <Form.Control
                          name="numberSpace"
                          id="numberSpace"
                          readOnly
                        />
                      </MyInput>
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
                          readOnly
                          defaultValue={data?.SpaceInfo.CEP}
                        />
                      </MyInput>
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
                          defaultValue={data?.SpaceInfo.description}
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
