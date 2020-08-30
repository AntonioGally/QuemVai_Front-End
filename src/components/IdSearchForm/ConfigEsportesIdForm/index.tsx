import React from "react";

import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";

import { ErrorMessage, MyContainer } from "./styles";
import ConfigEsportesAdmin from "../../ConfigEsportesAdmin";

type ConfigEsportesIdForm = {
  id: number;
};

const EsportesInformation = {
  NomeEsporteConfig: "Futebol",
  DescricaoEsporteConfig: "Jogo de time",
  LocalizacaoEsporteConfig: 123,
};
var IdTyped: number;

const ConfigEsportesIdForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<ConfigEsportesIdForm>();
  const [existingId, setExistingId] = React.useState(false);
  const [erros, setErros] = React.useState(false);

  function onSubmitId(data: ConfigEsportesIdForm) {
    var NewId = Number(data.id);
    if (NewId === 123) {
      setExistingId(true);
      setErros(false);
      IdTyped = NewId;
    } else {
      setExistingId(false);
      setErros(true);
    }
  }
  if (existingId) {
    return (
      <ConfigEsportesAdmin
        NomeEsporteConfig={EsportesInformation.NomeEsporteConfig}
        DescricaoEsporteConfig={EsportesInformation.DescricaoEsporteConfig}
        LocalizacaoEsporteConfig={EsportesInformation.LocalizacaoEsporteConfig}
        IdEsporteConfig={IdTyped}
      />
    );
  }
  return (
    <div className="row justify-content-center" style={{ margin: "5% 0" }}>
      <MyContainer>
        <Form onSubmit={handleSubmit(onSubmitId)}>
          <Form.Row>
            <Col md={3}>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="Insira o ID do Esporte"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.id && (errors.id as any).type === "required" && (
                  <div className="error">
                    <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                  </div>
                )}
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
      </MyContainer>
    </div>
  );
};

export default ConfigEsportesIdForm;
