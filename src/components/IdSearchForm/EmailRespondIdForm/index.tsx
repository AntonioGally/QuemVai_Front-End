import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Form, Col, Button } from "react-bootstrap";
import { ErrorMessage } from "./styles";

import RespondEmail from "../../RespondEmail";

import api from "../../services/api";
import { ViewEmailRespondedAdmin } from "../../@types";
import { getTokenAdmin } from "../../services/auth";

type EmailRespondedIdForm = {
  IdEmail: number;
};

interface Data {
  InformationEmailResponded: ViewEmailRespondedAdmin;
}

const EmailRespondIdForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<EmailRespondedIdForm>();
  const [existingId, setExistingId] = React.useState(false);
  const [erros, setErros] = React.useState("");

  const [id, setId] = React.useState(Number);
  const [didSubmit, setDidSubmit] = React.useState(false);
  const [data, setData] = useState<Data>();

  function onSubmit(data: EmailRespondedIdForm) {
    const NewId = Number(data.IdEmail);
    setId(NewId);
    setDidSubmit(true);
  }

  useEffect(() => {
    Promise.all([
      api.get(`/api/admin/get/email/find/${id}`, {
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

      if (ViewEmailResponded.status === 200) {
        setErros("");
        setExistingId(true);
      }
    });
  }, [id, didSubmit]);

  if (existingId) {
    return (
      <RespondEmail IdEmailResponded={data?.InformationEmailResponded.id} />
    );
  }
  return (
    <div style={{ margin: "2% 0" }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row style={{ margin: "5% 0" }}>
          <Col md={3}>
            <Form.Group>
              <Form.Control
                type="text"
                name="IdEmail"
                placeholder="Insira o ID do Email"
                ref={register({
                  required: true,
                })}
              />
              {errors.IdEmail && (errors.IdEmail as any).type === "required" && (
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
    </div>
  );
};

export default EmailRespondIdForm;
