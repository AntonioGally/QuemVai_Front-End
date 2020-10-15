import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import ViewEmailResponded from "../../ViewEmailResponded";

import { Form, Col, Button } from "react-bootstrap";
import { ErrorMessage } from "./styles";

import api from "../../../../services/api";
import { ViewEmailRespondedAdmin } from "../../../../@types";
import { getTokenAdmin } from "../../../../services/auth";

type EmailRespondedIdForm = {
  IdEmailResponded: number;
};

interface Data {
  InformationEmailResponded: ViewEmailRespondedAdmin;
}

const EmailViewRespondedIdForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<EmailRespondedIdForm>();
  const [existingId, setExistingId] = React.useState(false);
  const [erros, setErros] = React.useState("");

  const [id, setId] = React.useState(Number);
  const [didSubmit, setDidSubmit] = React.useState(false);
  const [data, setData] = useState<Data>();


  function onSubmitId(data: EmailRespondedIdForm) {
    const NewId = Number(data.IdEmailResponded);
    setId(NewId);
    setDidSubmit(true);
  }

  useEffect(() => {
    Promise.all([
      api.get(`/api/admin/get/responded/email/find/${id}`, {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": getTokenAdmin() },
      }),
    ]).then(async (responses) => {
      const [ViewEmailResponded] = responses;

      if (ViewEmailResponded.status === 204 && didSubmit) {
        setErros("Esse ID não existe :(");
      }
      if (ViewEmailResponded.status === 422 && didSubmit) {
        setErros("Esse Email já foi respondido");
      }

      const emails = await ViewEmailResponded.data;
      setData({ InformationEmailResponded: emails });  

      if (ViewEmailResponded.status === 200 && didSubmit) {
        setErros("");
        setExistingId(true);
      }
    });
  }, [id, didSubmit]);

  if (existingId) {
    return (
      <ViewEmailResponded Informations={data?.InformationEmailResponded} />
    );
  }

  return (
    <div style={{ margin: "2% 0" }}>
      <Form onSubmit={handleSubmit(onSubmitId)}>
        <Form.Row style={{ margin: "5% 0" }}>
          <Col md={3}>
            <Form.Group>
              <Form.Control
                type="text"
                name="IdEmailResponded"
                id="IdEmailResponded"
                placeholder="Insira o ID do Email"
                ref={register({
                  required: true,
                })}
              />
              {errors.IdEmailResponded &&
                (errors.IdEmailResponded as any).type === "required" && (
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
    </div>
  );
};

export default EmailViewRespondedIdForm;
