import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";

import { ErrorMessage, MyContainer } from "./styles";
import ConfigEsportesAdmin from "../../ConfigEsportesAdmin";

import api from "../../services/api";
import { ConfigSportsAdmin } from "../../@types";
import { getTokenAdmin } from "../../services/auth";

type ConfigEsporteIdForm = {
  IdSport: number;
};

interface Data {
  InformationEsportes: ConfigSportsAdmin;
}

const ConfigEsportesIdForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<ConfigEsporteIdForm>();
  const [existingId, setExistingId] = React.useState(false);
  const [erros, setErros] = React.useState("");

  const [id, setId] = React.useState(Number);
  const [didSubmit, setDidSubmit] = React.useState(false);
  const [data, setData] = useState<Data>();

  function onSubmitId(data: ConfigEsporteIdForm) {
    const NewId = Number(data.IdSport);
    setId(NewId);
    setDidSubmit(true);
  }

  useEffect(() => {
    Promise.all([
      api.get(`/api/admin/sport/find/${id}`, {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": getTokenAdmin() },
      }),
    ]).then(async (responses) => {
      const [SportInformation] = responses;

      if (SportInformation.status === 400 && didSubmit) {
        setErros("Esse ID não existe :(");
      }

      const sports = await SportInformation.data;
      setData({ InformationEsportes: sports });

      if (SportInformation.status === 200) {
        setErros("");
        setExistingId(true);
      }
    });
  }, [id, didSubmit]);

  if (existingId) {
    return (
      <ConfigEsportesAdmin
        NomeEsporteConfig={data?.InformationEsportes.Criado.name}
        DescricaoEsporteConfig={data?.InformationEsportes.Criado.description}
        IdEsporteConfig={data?.InformationEsportes.Criado.id}
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
                  name="IdSport"
                  id="IdSport"
                  placeholder="Insira o ID do Esporte"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.IdSport && (errors.IdSport as any).type === "required" && (
                  <div className="error">
                    <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                  </div>
                )}
              </Form.Group>
              <ErrorMessage>{erros}</ErrorMessage>
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
