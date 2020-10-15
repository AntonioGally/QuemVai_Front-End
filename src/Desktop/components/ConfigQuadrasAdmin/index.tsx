import React from "react";
import { Form, Col, Button, Table } from "react-bootstrap";

import { useForm } from "react-hook-form";

import { MyContainer, ErrorMessage, MyTable } from "./styles";
import DeleteSport from "./DeleteSport";
import "./ConfigQuadrasAdmin.css";
import api from "../../../services/api";
import { getTokenAdmin } from "../../../services/auth";
import ConfigQuadraIdForm from "../IdSearchForm/ConfigQuadraIdForm";
import ConfirmDeleteSpace from "./ConfirmDeleteSpace";

export interface FormQuadraConfig {
  IdQuadraConfig: any;
  NomeQuadraConfig: any;
  EnderecoQuadraConfig: any;
  CepQuadraConfig: any;
  UfQuadraConfig: any;
  LatitudeQuadraConfig: any;
  LongitudeQuadraConfig: any;
  DescricaoQuadraConfig: any;
  StatusQuadraConfig: any;
  Sports: any;
}

const ConfigQuadrasAdmin: React.FC<FormQuadraConfig> = ({
  IdQuadraConfig,
  NomeQuadraConfig,
  EnderecoQuadraConfig,
  CepQuadraConfig,
  UfQuadraConfig,
  LatitudeQuadraConfig,
  LongitudeQuadraConfig,
  DescricaoQuadraConfig,
  StatusQuadraConfig,
  Sports,
}) => {
  const { register, handleSubmit, errors } = useForm<FormQuadraConfig>();
  const [voltar, setVoltar] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  var config = {
    headers: { "x-auth-token": getTokenAdmin() },
  };

  const onSubmitForm = async (data: FormQuadraConfig) => {
    const name = data.NomeQuadraConfig;
    const description = data.DescricaoQuadraConfig;

    try {
      const response = await api.put(
        `/api/admin/update/${IdQuadraConfig}`,
        { name, description },
        config
      );

      if (response.data.Updated) {
        alert("Quadra atualizada com sucesso!");
        window.location.reload();
      }
      if (!response.data.Updated) {
        alert("Houve algum problema!");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  var AuxStatus = "";

  if (voltar) {
    return <ConfigQuadraIdForm />;
  }
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "2% 0 5%" }}>
        <MyContainer>
          <Button onClick={() => setVoltar(true)}>Voltar</Button>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <fieldset>
              <Form.Row style={{ marginTop: "5%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="NomeQuadraConfig">Nome*</Form.Label>
                    <Form.Control
                      id="NomeQuadraConfig"
                      name="NomeQuadraConfig"
                      defaultValue={NomeQuadraConfig}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.NomeQuadraConfig &&
                      (errors.NomeQuadraConfig as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="EnderecoQuadraConfig">
                      Endereço
                    </Form.Label>
                    <Form.Control
                      readOnly
                      id="EnderecoQuadraConfig"
                      name="EnderecoQuadraConfig"
                      defaultValue={EnderecoQuadraConfig}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.EnderecoQuadraConfig &&
                      (errors.EnderecoQuadraConfig as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="CepQuadraConfig">CEP</Form.Label>
                    <Form.Control
                      readOnly
                      id="CepQuadraConfig"
                      name="CepQuadraConfig"
                      defaultValue={CepQuadraConfig}
                      ref={register({
                        required: true,
                        max: {
                          value: 8,
                          message: "insira no máximo 8 números",
                        },
                      })}
                    />
                    {errors.CepQuadraConfig &&
                      (errors.CepQuadraConfig as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}

                    {errors.CepQuadraConfig &&
                      (errors.CepQuadraConfig as any).type === "max" && (
                        <div className="error">
                          {(errors.CepQuadraConfig as any).message}
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="UfQuadraConfig">UF</Form.Label>
                    <Form.Control
                      readOnly
                      id="UfQuadraConfig"
                      name="UfQuadraConfig"
                      defaultValue={UfQuadraConfig}
                      ref={register({
                        required: true,
                        maxLength: {
                          value: 3,
                          message: "insira no máximo 3 letras",
                        },
                      })}
                    />
                    {errors.UfQuadraConfig &&
                      (errors.UfQuadraConfig as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}

                    {errors.UfQuadraConfig &&
                      (errors.UfQuadraConfig as any).type === "maxLength" && (
                        <div className="error">
                          {(errors.UfQuadraConfig as any).message}
                        </div>
                      )}
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Row style={{ marginTop: "5%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="LatitudeQuadraConfig">
                      Latitude
                    </Form.Label>
                    <Form.Control
                      readOnly
                      id="LatitudeQuadraConfig"
                      name="LatitudeQuadraConfig"
                      defaultValue={LatitudeQuadraConfig}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.LatitudeQuadraConfig &&
                      (errors.LatitudeQuadraConfig as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="LongitudeQuadraConfig">
                      Longitude
                    </Form.Label>
                    <Form.Control
                      readOnly
                      id="LongitudeQuadraConfig"
                      name="LongitudeQuadraConfig"
                      defaultValue={LongitudeQuadraConfig}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.LongitudeQuadraConfig &&
                      (errors.LongitudeQuadraConfig as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label htmlFor="DescricaoQuadraConfig">
                      Descrição*
                    </Form.Label>
                    <Form.Control
                      id="DescricaoQuadraConfig"
                      name="DescricaoQuadraConfig"
                      defaultValue={DescricaoQuadraConfig}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.DescricaoQuadraConfig &&
                      (errors.DescricaoQuadraConfig as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={1}>
                  <Form.Group>
                    <div style={{ display: "none" }}>
                      {StatusQuadraConfig && (AuxStatus = "true")}
                    </div>
                    <div style={{ display: "none" }}>
                      {!StatusQuadraConfig && (AuxStatus = "false")}
                    </div>
                    <Form.Label htmlFor="StatusQuadraConfig">Status</Form.Label>
                    <Form.Control
                      readOnly
                      id="StatusQuadraConfig"
                      name="StatusQuadraConfig"
                      defaultValue={AuxStatus}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.StatusQuadraConfig &&
                      (errors.StatusQuadraConfig as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="IdQuadraConfig">ID</Form.Label>
                    <Form.Control
                      id="IdQuadraConfig"
                      name="IdQuadraConfig"
                      defaultValue={IdQuadraConfig}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row style={{ justifyContent: "flex-end" }}>
                <Col md={3}>
                  <Button
                    variant="outline-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => setModalShow(true)}
                  >
                    Excluir
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    style={{ marginLeft: "10px" }}
                  >
                    Alterar
                  </Button>
                </Col>
              </Form.Row>
            </fieldset>
          </Form>
          <Form.Row style={{ justifyContent: "flex-start" }}>
            <Col md={9}>
              <h3>Esportes</h3>
              <MyTable>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Sports.map((information: any) => (
                      <tr key={information.id}>
                        <td>{information.id}</td>
                        <td>{information.name}</td>
                        <td className="MyColDescriptionData">
                          {information.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <DeleteSport id_quadra={IdQuadraConfig} />
              </MyTable>
            </Col>
          </Form.Row>
        </MyContainer>
        {modalShow ? (
          <ConfirmDeleteSpace
            show={modalShow}
            onHide={() => setModalShow(false)}
            id_space={IdQuadraConfig}
            name_space={NomeQuadraConfig}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ConfigQuadrasAdmin;
