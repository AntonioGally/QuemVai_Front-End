import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MyContainer, ErrorMessage, SportsList } from "./styles";
import EsportesExistentesData from "../DataList/EsportesExistentesData";

import api from "../services/api";
import { getTokenAdmin } from "../services/auth";
import { ListSportsAdmin } from "../@types";

type FormAddEsporte = {
  id_quadra: number;
  id_esporte: number;
};
interface Data {
  Esportes: ListSportsAdmin[];
}

const AddEsportesQuadrasAdmin: React.FC = () => {
  const [erros, setErros] = React.useState("");
  const { register, handleSubmit, errors } = useForm<FormAddEsporte>();
  const [data, setData] = useState<Data>();

  const OnSubmitId = async (data: FormAddEsporte) => {
    var config = {
      headers: { "x-auth-token": getTokenAdmin() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };

    try {
      const id_quadra = Number(data.id_quadra);
      const id_esporte = Number(data.id_esporte);

      const response = await api.post(
        `/api/admin/add/sport/${id_esporte}/to/space/${id_quadra}`,
        "",
        config
      );

      if (response.data === "Space not found") {
        setErros("O ID da quadra não existe!");
      }
      if (response.data === "Sport not found") {
        setErros("O ID do esporte não existe!");
      } 


      if (response.status === 200) {
        alert("Esporte adicionado com sucesso!");
        window.location.reload();
      }
      if(response.status === 400) {
        setErros("Esse esporte já está cadastrado na quadra")
      }
      if (response.status === 404) {
        alert("Houve algum problema!");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
    
  };

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/get/sport/cadastrar", {
        headers: { "x-auth-token": getTokenAdmin() },
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      }),
    ]).then(async (responses) => {
      const [AllSports] = responses;
      const esportes = await AllSports.data;
      setData({ Esportes: esportes });

      if (AllSports.status === 404) {
        alert("Houve algum problema com a listagem das quadras");
      }
    });
  }, []);

  return (
    <MyContainer>
      <Row className="justify-content-center" style={{ margin: "5% 0" }}>
        <Col md={6}>
          <Form onSubmit={handleSubmit(OnSubmitId)}>
            <fieldset>
              <Form.Row>
                <Form.Group style={{ width: "75%" }}>
                  <Form.Label htmlFor="id_quadra">ID da Quadra</Form.Label>
                  <Form.Control
                    name="id_quadra"
                    id="id_quadra"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.id_quadra &&
                    (errors.id_quadra as any).type === "required" && (
                      <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                    )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group style={{ width: "75%" }}>
                  <Form.Label htmlFor="id_esporte">Id do Esporte</Form.Label>
                  <Form.Control
                    name="id_esporte"
                    id="id_esporte"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.id_esporte &&
                    (errors.id_esporte as any).type === "required" && (
                      <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                    )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Adicionar
                </Button>
              </Form.Row>
              <ErrorMessage>{erros}</ErrorMessage>
            </fieldset>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Esportes Existentes</h3>
          <SportsList>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {data?.Esportes.map((information) => (
                  <EsportesExistentesData
                    key={information.id}
                    IdEsporte={information.id}
                    NomeEsporte={information.name}
                    DescricaoEsporte={information.description}
                  />
                ))}
              </tbody>
            </Table>
          </SportsList>
        </Col>
      </Row>
    </MyContainer>
  );
};

export default AddEsportesQuadrasAdmin;
