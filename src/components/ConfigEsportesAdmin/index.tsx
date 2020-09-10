import React from "react";

import { Form, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { MyContainer, ErrorMessage } from "./styles";

export interface FormEsporteConfig {
  NomeEsporteConfig: any;
  DescricaoEsporteConfig: any;
  IdEsporteConfig: any;
}

const ConfigEsportesAdmin: React.FC<FormEsporteConfig> = ({
  NomeEsporteConfig,
  DescricaoEsporteConfig,
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
                      readOnly
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
                      readOnly
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
            </fieldset>
          </Form>
        </MyContainer>
      </div>
    </div>
  );
};

export default ConfigEsportesAdmin;
