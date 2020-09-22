import React from "react";
import { useForm } from "react-hook-form";
import "./ModalFriendStyles.css";

import { MyTitleForm, MyLableText, MyButton } from "./styles";
import { Container, Form, Row, Col } from "react-bootstrap";

import api from "../services/api";
import { Token } from "../services/auth";

type idSubmitForm = {
  idUser: number;
};

const ModalFriendUserApp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<idSubmitForm>();
  const [erros, setErros] = React.useState("");

  const SubmitIdForm = async (data: idSubmitForm) => {
    const id = Number(data.idUser);
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.post(`/api/user/invite/${id}`, {}, config);
      if (response.status === 406 && response.data["Request already sended"]) {
        setErros(
          "Parece que a solicitação já foi enviada, cheque se o usuário já lhe enviou uma solicitação, ou se vocês já são amigos :D"
        );
      }
      if (response.status === 422 && response.data["Equals id's"]) {
        setErros("Este é o seu ID");
      }
      if (response.status === 204) {
        setErros("Esse usuário não existe");
      }
      if (response.status === 200 && response.data["Request sent"]){
          alert("A solicitação foi enviada")
          window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="WrapperModalFriends">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Enviar uma solicitação
        </MyTitleForm>
        <Form onSubmit={handleSubmit(SubmitIdForm)}>
          <Row style={{ alignItems: "center", margin: "7% 0 0" }}>
            <Col md={6}>
              <MyLableText> Id do usuário: </MyLableText>
              <Form.Group>
                <Row className="MyRowForm">
                  <Form.Control
                    className="MyInputForm"
                    type="text"
                    name="idUser"
                    id="idUser"
                    ref={register({
                      pattern: {
                        value: /^[0-9]+$/i,
                        message: "Insira um id válido",
                      },
                      required: {
                        value: true,
                        message: "Preencha o campo de ID",
                      },
                    })}
                  />
                  {errors.idUser &&
                    (errors.idUser as any).type === "pattern" && (
                      <div className="error">
                        {(errors.idUser as any).message}
                      </div>
                    )}
                  {errors.idUser &&
                    (errors.idUser as any).type === "required" && (
                      <div className="error">
                        {(errors.idUser as any).message}
                      </div>
                    )}
                </Row>
              </Form.Group>
            </Col>
            <Col md={4} style={{ marginTop: "4%" }}>
              <MyButton type="submit" className="btn" style={{ width: "100%" }}>
                Procurar e Enviar
              </MyButton>
            </Col>
          </Row>
          <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
        </Form>
      </Container>
    </div>
  );
};

export default ModalFriendUserApp;
