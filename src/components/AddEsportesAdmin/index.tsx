import React from "react";

import { Form, Col, Button } from "react-bootstrap";
import { MyContainer, ErrorMessage } from "./styles";
import { useForm } from "react-hook-form";

type FormEsporteCadastro = {
  NomeEsporteConfig: string;
  DescricaoEsporteConfig: string;
  LocalizacaoEsporteConfig: number;
};

const AddEsportesAdmin: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormEsporteCadastro>();

  function onSubmitForm(data: FormEsporteCadastro) {
    console.log(data);
  }
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "1% 0" }}>
        <MyContainer>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <Form.Row style={{ marginTop: "5%" }}>
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="NomeEsporteConfig">Nome</Form.Label>
                  <Form.Control
                    name="NomeEsporteConfig"
                    id="NomeEsporteConfig"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.NomeEsporteConfig &&
                    (errors.NomeEsporteConfig as any).type === "required" && (
                      <div className="error">
                        <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                      </div>
                    )}
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="DescricaoEsporteConfig">
                    Descrição
                  </Form.Label>
                  <Form.Control
                    name="DescricaoEsporteConfig"
                    id="DescricaoEsporteConfig"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.DescricaoEsporteConfig &&
                    (errors.DescricaoEsporteConfig as any).type ===
                      "required" && (
                      <div className="error">
                        <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                      </div>
                    )}
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="LocalizacaoEsporteConfig">
                    ID da Localização
                  </Form.Label>
                  <Form.Control
                    name="LocalizacaoEsporteConfig"
                    id="LocalizacaoEsporteConfig"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.DescricaoEsporteConfig &&
                    (errors.DescricaoEsporteConfig as any).type ===
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
          </Form>
        </MyContainer>
      </div>
    </div>
  );
};

export default AddEsportesAdmin;
