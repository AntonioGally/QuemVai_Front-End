import React from "react";

import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { MyContainer, ErrorMessage } from "./styles";

export interface FormEsporteConfig {
  NomeEsporteConfig: string;
  DescricaoEsporteConfig: string;
  LocalizacaoEsporteConfig: number;
  IdEsporteConfig: number;
}

const ConfigEsportesAdmin: React.FC<FormEsporteConfig> = ({
  NomeEsporteConfig,
  DescricaoEsporteConfig,
  LocalizacaoEsporteConfig,
  IdEsporteConfig,
}) => {
  const { register, handleSubmit, errors } = useForm<FormEsporteConfig>();

  function onSubmitForm(data: FormEsporteConfig) {
    console.log(data);
  }

  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "5% 0" }}>
        <MyContainer>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <fieldset>
              <Form.Row style={{ marginTop: "5%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="NomeEsporteConfig">Nome</Form.Label>
                    <Form.Control
                      name="NomeEsporteConfig"
                      id="NomeEsporteConfig"
                      defaultValue={NomeEsporteConfig}
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
                      defaultValue={DescricaoEsporteConfig}
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
                      Localização
                    </Form.Label>
                    <Form.Control
                      name="LocalizacaoEsporteConfig"
                      id="LocalizacaoEsporteConfig"
                      defaultValue={LocalizacaoEsporteConfig}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.LocalizacaoEsporteConfig &&
                      (errors.LocalizacaoEsporteConfig as any).type ===
                        "required" && (
                        <div className="error">
                          <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                        </div>
                      )}
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="IdEsporteConfig">Id</Form.Label>
                    <Form.Control
                      name="IdEsporteConfig"
                      id="IdEsporteConfig"
                      defaultValue={IdEsporteConfig}
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

export default ConfigEsportesAdmin;
