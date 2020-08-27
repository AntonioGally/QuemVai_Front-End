import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { MyContainer, ErrorMessage } from "./styles";
type FormId = {
  id: string;
};

const ConfigQuadrasAdmin: React.FC = () => {
  const { register, handleSubmit } = useForm<FormId>();
  const [existingId, setExistingId] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(
    !existingId ? true : false
  );
  const [erros, setErros] = React.useState(false);

  function onSubmit(data: FormId) {
    if (data.id === "123") {
      setExistingId(true);
      setIsDisabled(false);
      setErros(false);
    } else {
      setExistingId(false);
      setIsDisabled(true);
      setErros(true);
    }
  }

  if (existingId) {
    console.log("o id existe zé mané");
  }

  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{width:'70%'}}>
          <h3 style={{marginBottom:'3%'}}>Configuração das quadras</h3>
          <MyContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Row>
                <Col md={3}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="id"
                      placeholder="Insira o ID da quadra"
                      ref={register}
                    />
                  </Form.Group>
                  {erros && <ErrorMessage>Esse ID não existe :(</ErrorMessage>}
                </Col>

                <Col>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginLeft: "10px" }}
                  >
                    Pesquisar
                  </Button>
                </Col>
              </Form.Row>
            </Form>
            <Form>
              <fieldset disabled={isDisabled}>
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
                    Alterar
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

export default ConfigQuadrasAdmin;
