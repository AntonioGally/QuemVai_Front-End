import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";

import { ErrorMessage } from "./styles";
import ConfigQuadrasAdmin from "../../ConfigQuadrasAdmin";

import api from "../../../../services/api";
import { ConfigSpaceAdmin } from "../../../../@types";
import { getTokenAdmin } from "../../../../services/auth";

type ConfigQuadraIdForm = {
  id: number;
};

interface Data {
  InformationQuadras: ConfigSpaceAdmin;
}

const ConfigQuadraIdForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<ConfigQuadraIdForm>();
  const [existingId, setExistingId] = React.useState(false);
  const [erros, setErros] = React.useState(false);
  
  const [id, setId] = React.useState(Number);
  const [didSubmit, setDidSubmit] = React.useState(false);
  const [data, setData] = useState<Data>();

  function onSubmitId(data: ConfigQuadraIdForm) {
    const NewId = Number(data.id);
    setId(NewId); 
    setDidSubmit(true); 
  }

  useEffect(() => {
    Promise.all([
      api.get(`/api/admin/find/space/${id}`, {
        headers: { "x-auth-token": getTokenAdmin() },
      }),
    ]).then(async (responses) => {
      const [SpaceInformation] = responses;

      if (SpaceInformation.status === 204 && didSubmit) {
        setErros(true);
      }

      const spaces = await SpaceInformation.data;
      setData({ InformationQuadras: spaces });
      
      if (SpaceInformation.status === 200){
        setErros(false);
        setExistingId(true);
      }
    });
  }, [id, didSubmit]);

  if (existingId) {   
    return (
      <ConfigQuadrasAdmin
        IdQuadraConfig={data?.InformationQuadras.id}
        NomeQuadraConfig={data?.InformationQuadras.name}
        EnderecoQuadraConfig={data?.InformationQuadras.address}
        CepQuadraConfig={data?.InformationQuadras.CEP}
        UfQuadraConfig={data?.InformationQuadras.UF}
        LatitudeQuadraConfig={data?.InformationQuadras.latitude}
        LongitudeQuadraConfig={data?.InformationQuadras.longitude}
        DescricaoQuadraConfig={data?.InformationQuadras.description}
        StatusQuadraConfig={data?.InformationQuadras.status}
        Sports = {data?.InformationQuadras.space}
      />
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitId)} style={{ margin: "2% 0" }}>
      <Form.Row>
        <Col md={3}>
          <Form.Group>
            <Form.Control
              type="text"
              id="id"
              name="id"
              placeholder="Insira o ID da quadra"
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
  );
};

export default ConfigQuadraIdForm;
