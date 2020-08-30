import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MyContainer, ErrorMessage } from "./styles";

// import { Container } from './styles';

type FormCadastroAdd = {
  IdQuadraAdd: number;
  NomeQuadraAdd: string;
  EnderecoQuadraAdd: string;
  CepQuadraAdd: number;
  UfQuadraAdd: string;
  LatitudeQuadraAdd: number;
  LongitudeQuadraAdd: number;
  DescricaoQuadraAdd: string;
  StatusQuadraAdd: string;
};

const AddQuadrasAdmin: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormCadastroAdd>();

  function onSubmit(data: FormCadastroAdd) {
    console.log(data);
  }

  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "5% 0" }}>
        <MyContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <Form.Row style={{ marginTop: "5%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="NomeQuadraAdd">Nome</Form.Label>
                    <Form.Control
                      name="NomeQuadraAdd"
                      id="NomeQuadraAdd"
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.NomeQuadraAdd &&
                      (errors.NomeQuadraAdd as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="EnderecoQuadraAdd">
                      Endereço
                    </Form.Label>
                    <Form.Control
                      name="EnderecoQuadraAdd"
                      id="EnderecoQuadraAdd"
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.EnderecoQuadraAdd &&
                      (errors.EnderecoQuadraAdd as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="CepQuadraAdd">CEP</Form.Label>
                    <Form.Control
                      name="CepQuadraAdd"
                      id="CepQuadraAdd"
                      ref={register({
                        required: true,
                        max: {
                          value: 8,
                          message: "insira no máximo 8 números",
                        },
                      })}
                    />
                    {errors.CepQuadraAdd &&
                      (errors.CepQuadraAdd as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}

                    {errors.CepQuadraAdd &&
                      (errors.CepQuadraAdd as any).type === "max" && (
                        <div className="error">
                          {(errors.CepQuadraAdd as any).message}
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="UfQuadraAdd">UF</Form.Label>
                    <Form.Control
                      name="UfQuadraAdd"
                      id="UfQuadraAdd"
                      ref={register({
                        required: true,
                        maxLength: {
                          value: 3,
                          message: "insira no máximo 3 letras",
                        },
                      })}
                    />
                    {errors.UfQuadraAdd &&
                      (errors.UfQuadraAdd as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}

                    {errors.UfQuadraAdd &&
                      (errors.UfQuadraAdd as any).type === "maxLength" && (
                        <div className="error">
                          {(errors.UfQuadraAdd as any).message}
                        </div>
                      )}
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Row style={{ marginTop: "5%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="LatitudeQuadraAdd">
                      Latitude
                    </Form.Label>
                    <Form.Control
                      name="LatitudeQuadraAdd"
                      id="LatitudeQuadraAdd"
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.LatitudeQuadraAdd &&
                      (errors.LatitudeQuadraAdd as any).type === "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="LongitudeQuadraAdd">
                      Longitude
                    </Form.Label>
                    <Form.Control
                      name="LongitudeQuadraAdd"
                      id="LongitudeQuadraAdd"
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.LongitudeQuadraAdd &&
                      (errors.LongitudeQuadraAdd as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="DescricaoQuadraAdd">
                      Descrição
                    </Form.Label>
                    <Form.Control
                      name="DescricaoQuadraAdd"
                      id="DescricaoQuadraAdd"
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.DescricaoQuadraAdd &&
                      (errors.DescricaoQuadraAdd as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="StatusQuadraAdd">Status</Form.Label>
                    <Form.Control
                      name="StatusQuadraAdd"
                      id="StatusQuadraAdd"
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.StatusQuadraAdd &&
                      (errors.StatusQuadraAdd as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Adicionar
                </Button>
              </Form.Row>
            </fieldset>
          </Form>
        </MyContainer>
      </div>
    </div>
  );
};

export default AddQuadrasAdmin;
