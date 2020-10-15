import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import ViewEmail from "../../ViewEmailReceived";

import { Form, Col, Button } from "react-bootstrap";
import { ErrorMessage } from "./styles";

import api from "../../../../services/api";
import { ViewEmailReceivedAdmin } from "../../../../@types";
import { getTokenAdmin } from "../../../../services/auth";

type EmailReceivedIdForm = {
  IdEmailReceived: number;
};

interface Data {
  InformationEmailReceived: ViewEmailReceivedAdmin;
}

const EmailReceivedIdForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<EmailReceivedIdForm>();
  const [existingId, setExistingId] = React.useState(false);
  const [erros, setErros] = React.useState("");

  const [id, setId] = React.useState(Number);
  const [didSubmit, setDidSubmit] = React.useState(false);
  const [data, setData] = useState<Data>();

  function onSubmitId(data: EmailReceivedIdForm) {
    const NewId = Number(data.IdEmailReceived);
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
      const [ViewEmailReceived] = responses;

      if (ViewEmailReceived.status === 204 && didSubmit) {
        setErros("Esse ID não existe :(");
      }
      if (ViewEmailReceived.status === 422 && didSubmit) {
        setErros("Esse Email já foi respondido");
      }

      const emails = await ViewEmailReceived.data;
      setData({ InformationEmailReceived: emails });

      if (ViewEmailReceived.status === 200) {
        setErros("");
        setExistingId(true);
      }
    });
  }, [id, didSubmit]);

  if (existingId) {
    return (
      <ViewEmail
        IdEmailReceived={data?.InformationEmailReceived.id}
        UserEmailReceived={data?.InformationEmailReceived.email_user}
        TitleEmailReceived={data?.InformationEmailReceived.subject}
        StatusEmailReceived={data?.InformationEmailReceived.status}
        DateEmailReceived={data?.InformationEmailReceived.createdAt}
        MessageEmailReceived={data?.InformationEmailReceived.message}
      />
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
                name="IdEmailReceived"
                id="IdEmailReceived"
                placeholder="Insira o ID do Email"
                ref={register({
                  required: true,
                })}
              />
              {errors.IdEmailReceived &&
                (errors.IdEmailReceived as any).type === "required" && (
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

export default EmailReceivedIdForm;
