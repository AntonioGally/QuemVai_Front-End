import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { MyContainer, ErrorMessage } from "./styles";
export interface FormQuadraConfig {
  IdQuadraConfig: number;
  NomeQuadraConfig: string;
  EnderecoQuadraConfig: string;
  CepQuadraConfig: number;
  UfQuadraConfig: string;
  LatitudeQuadraConfig: number;
  LongitudeQuadraConfig: number;
  DescricaoQuadraConfig: string;
  StatusQuadraConfig: boolean;
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
}) => {
  const { register, handleSubmit, errors } = useForm<FormQuadraConfig>();

  function onSubmitForm(data: FormQuadraConfig) {
    console.log(data);
  }

  var AuxStatus = "";
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "5% 0" }}>
        <MyContainer>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <fieldset>
              <Form.Row style={{ marginTop: "5%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="NomeQuadraConfig">Nome</Form.Label>
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
                      Descrição
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
              <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Excluir
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Alterar
                </Button>
              </Form.Row>
            </fieldset>
          </Form>
        </MyContainer>
      </div>
    </div>
  );
};

export default ConfigQuadrasAdmin;
