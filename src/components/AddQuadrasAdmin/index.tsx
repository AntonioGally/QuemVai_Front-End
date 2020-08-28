import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MyContainer } from "./styles";

// import { Container } from './styles';

type FormCadastro = {
  NomeQuadra: string;
  EnderecoQuadra: string;
  CepQuadra: number;
  UfQuadra: string;
  LatitudeQuadra: number;
  LongitudeQuadra: number;
  DescricaoQuadra: string;
  StatusQuadra: string;
};

const AddQuadrasAdmin: React.FC = () => {
  const { register, handleSubmit } = useForm<FormCadastro>();

  function onSubmit(data: FormCadastro) {
    console.log(data);
  }

  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>Adicionar uma Quadra</h3>
          <MyContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <Form.Row style={{ marginTop: "5%" }}>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label htmlFor="NomeQuadra">Nome</Form.Label>
                      <Form.Control id="NomeQuadra" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label htmlFor="EnderecoQuadra">Endereço</Form.Label>
                      <Form.Control id="EnderecoQuadra" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label htmlFor="CepQuadra">CEP</Form.Label>
                      <Form.Control id="CepQuadra" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label htmlFor="UfQuadra">UF</Form.Label>
                      <Form.Control id="UfQuadra" />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Form.Row style={{ marginTop: "5%" }}>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label htmlFor="LatitudeQuadra">Latitude</Form.Label>
                      <Form.Control id="LatitudeQuadra" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label htmlFor="LongitudeQuadra">
                        Longitude
                      </Form.Label>
                      <Form.Control id="LongitudeQuadra" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label htmlFor="DescricaoQuadra">
                        Descrição
                      </Form.Label>
                      <Form.Control id="DescricaoQuadra" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label htmlFor="StatusQuadra">Status</Form.Label>
                      <Form.Control id="StatusQuadra" />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row
                  style={{ justifyContent: "flex-end", marginTop: "2%" }}
                >
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
    </div>
  );
};

export default AddQuadrasAdmin;
