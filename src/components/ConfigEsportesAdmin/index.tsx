import React from "react";

import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { MyContainer, ErrorMessage } from "./styles";

import api from "../../services/api";
import { getTokenAdmin } from "../../services/auth";
import ConfigEsportesIdForm from "../IdSearchForm/ConfigEsportesIdForm";

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
  const [erros, setErros] = React.useState("");
  const [voltar, setVoltar] = React.useState(false);

  const onSubmitForm = async (data: FormEsporteConfig) => {
    var config = {
      headers: { "x-auth-token": getTokenAdmin() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };

    try {
      var name = data.NomeEsporteConfig;
      var description = data.DescricaoEsporteConfig;
      const response = await api.put(
        `/api/admin/sport/update/${IdEsporteConfig}`,
        { name, description },
        config
      );

      if (response.data["Sport updated"] === true && response.status === 200) {
        alert("Esporte atualizado com sucesso!");
        window.location.reload();
      }
      if (response.status === 204) {
        setErros("O ID do esporte não existe");
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (voltar) {
    return <ConfigEsportesIdForm />;
  }
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "5% 0" }}>
        <MyContainer>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <fieldset>
              <Button onClick={() => setVoltar(true)}>Voltar</Button>
              <Form.Row style={{ marginTop: "5%", alignItems: "center" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="NomeEsporteConfig">Nome *</Form.Label>
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
                      Descrição *
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
                    <Form.Label htmlFor="IdEsporteConfig">Id</Form.Label>
                    <Form.Control
                      name="IdEsporteConfig"
                      id="IdEsporteConfig"
                      defaultValue={IdEsporteConfig}
                      readOnly
                    />
                  </Form.Group>
                </Col>
                <Col md={3} style={{textAlign:"center"}}>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "15px" }}
                  >
                    Alterar
                  </Button>
                </Col>
                <div className="text-danger" style={{ fontSize: "20px" }}>
                  {erros}
                </div>
              </Form.Row>
            </fieldset>
          </Form>
        </MyContainer>
      </div>
    </div>
  );
};

export default ConfigEsportesAdmin;
