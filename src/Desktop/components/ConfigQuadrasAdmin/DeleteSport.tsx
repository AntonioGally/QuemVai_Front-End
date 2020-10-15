import React from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button } from "react-bootstrap";

import { ErrorMessage } from "./styles";

import api from "../../../services/api";
import { getTokenAdmin } from "../../../services/auth";

type IdFormInput = {
  IdDeleteEsporte: string;
};
export interface IdFormDeleteSport {
  id_quadra: any;
}
const ConfigQuadrasAdmin: React.FC<IdFormDeleteSport> = ({ id_quadra }) => {
  const { register, handleSubmit, errors } = useForm<IdFormInput>();
  const [erros, setErros] = React.useState("");

  var config = {
    headers: { "x-auth-token": getTokenAdmin() },
  };

  const SubmitForm = async (data: IdFormInput) => {
    const idSport = data.IdDeleteEsporte;

    try {
      const response = await api.delete(
        `/api/admin/delete/sport/${idSport}/in/space/${id_quadra}`,
        config
      );
      console.log("entrou no try")
      if (response.data === "Not found") {
        setErros("Não foi possível localizar");
      }
      if (response.status === 200) {
        alert("Quadra deletada com sucesso");
        window.location.reload();
      }
      if (response.status === 404) {
        alert("Houve algum problema");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ margin: "5% 0 0 0" }}>
      <Form onSubmit={handleSubmit(SubmitForm)}>
        <Row style={{ alignItems: "center", width: "100%" }}>
          <Col md={3}>
            <Form.Group style={{ marginBottom: 0 }}>
              <Form.Control
                id="IdDeleteEsporte"
                name="IdDeleteEsporte"
                placeholder="Id do Esporte"
                ref={register({
                  required: true,
                })}
              />
              {errors.IdDeleteEsporte &&
                (errors.IdDeleteEsporte as any).type === "required" && (
                  <div className="error">
                    <ErrorMessage>Esse campo é Obrigatório</ErrorMessage>
                  </div>
                )}
            </Form.Group>
            <ErrorMessage> {erros} </ErrorMessage>
          </Col>

          <Col md={3}>
            <Button
              variant="outline-danger"
              type="submit"
              style={{ marginLeft: "10px" }}
            >
              Deletar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ConfigQuadrasAdmin;
