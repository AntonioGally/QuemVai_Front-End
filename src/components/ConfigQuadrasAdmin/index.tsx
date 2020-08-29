import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { MyContainer, ErrorMessage } from "./styles";
export interface FormConfigQuadras {
  id: number;
  nomeQuadra: string;
  enderecoQuadra: string;
  CepQuadra: number;
  UfQuadra: string;
  LatitudeQuadra: number;
  LongitudeQuadra: number;
  DescricaoQuadra: string;
  StatusQuadra: boolean;
}
const ConfigQuadrasAdmin: React.FC<FormConfigQuadras> = ({
  id,
  nomeQuadra,
  enderecoQuadra,
  CepQuadra,
  UfQuadra,
  LatitudeQuadra,
  LongitudeQuadra,
  DescricaoQuadra,
  StatusQuadra,
}) => {
  const { register, handleSubmit, errors } = useForm<FormConfigQuadras>();

  function onSubmitForm(data: FormConfigQuadras) {
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
                    <Form.Label htmlFor="NomeQuadra">Nome</Form.Label>
                    <Form.Control
                      id="NomeQuadra"
                      name="NomeQuadra"
                      defaultValue={nomeQuadra}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.nomeQuadra &&
                      (errors.nomeQuadra as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="EnderecoQuadra">Endereço</Form.Label>
                    <Form.Control
                      id="EnderecoQuadra"
                      name="EnderecoQuadra"
                      defaultValue={enderecoQuadra}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.enderecoQuadra &&
                      (errors.enderecoQuadra as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="CepQuadra">CEP</Form.Label>
                    <Form.Control
                      id="CepQuadra"
                      name="CepQuadra"
                      defaultValue={CepQuadra}
                      ref={register({
                        required: true,
                        max: {
                          value: 8,
                          message: "insira no máximo 8 números",
                        },
                      })}
                    />
                    {errors.CepQuadra &&
                      (errors.CepQuadra as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}

                    {errors.CepQuadra &&
                      (errors.CepQuadra as any).type === "max" && (
                        <div className="error">
                          {(errors.CepQuadra as any).message}
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="UfQuadra">UF</Form.Label>
                    <Form.Control
                      id="UfQuadra"
                      name="UfQuadra"
                      defaultValue={UfQuadra}
                      ref={register({
                        required: true,
                        maxLength: {
                          value: 3,
                          message: "insira no máximo 3 letras",
                        },
                      })}
                    />
                    {errors.UfQuadra &&
                      (errors.UfQuadra as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}

                    {errors.UfQuadra &&
                      (errors.UfQuadra as any).type === "maxLength" && (
                        <div className="error">
                          {(errors.UfQuadra as any).message}
                        </div>
                      )}
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Row style={{ marginTop: "5%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="LatitudeQuadra">Latitude</Form.Label>
                    <Form.Control
                      id="LatitudeQuadra"
                      name="LatitudeQuadra"
                      defaultValue={LatitudeQuadra}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.LatitudeQuadra &&
                      (errors.LatitudeQuadra as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="LongitudeQuadra">Longitude</Form.Label>
                    <Form.Control
                      id="LongitudeQuadra"
                      name="LongitudeQuadra"
                      defaultValue={LongitudeQuadra}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.LongitudeQuadra &&
                      (errors.LongitudeQuadra as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="DescricaoQuadra">Descrição</Form.Label>
                    <Form.Control
                      id="DescricaoQuadra"
                      name="DescricaoQuadra"
                      defaultValue={DescricaoQuadra}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.DescricaoQuadra &&
                      (errors.DescricaoQuadra as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <div style={{display:'none'}}>{StatusQuadra && (AuxStatus = "true")}</div>
                    <div style={{display:'none'}}>{!StatusQuadra && (AuxStatus = "false")}</div>
                    <Form.Label htmlFor="StatusQuadra">Status</Form.Label>
                    <Form.Control
                      id="StatusQuadra"
                      name="StatusQuadra"
                      defaultValue={AuxStatus}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.StatusQuadra &&
                      (errors.StatusQuadra as any).type === "required" && (
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
                    <Form.Label htmlFor="StatusQuadra">ID</Form.Label>
                    <Form.Control
                      id="IdQuadra"
                      name="IdQuadra"
                      defaultValue={id}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
                {/* <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Excluir
                </Button> */}
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
