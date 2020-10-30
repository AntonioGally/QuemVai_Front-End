import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./ModalFriendStyles.css";

import {
  MyTitleForm,
  MyLableText,
  MyButton,
  InviteIcon,
  MyCard,
  SearchIcon
} from "./styles";
import { Container, Form, Row, Col } from "react-bootstrap";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

type idSubmitForm = {
  idUser: number;
};
interface Data {
  Photo: any;
}

const ModalFriendUserApp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<idSubmitForm>();
  const [data, setData] = useState<Data>();
  const [erros, setErros] = React.useState("");
  const [sucesso, setSucesso] = React.useState("");

  useEffect(() => {
    Promise.all([
      api.get("/api/user/bring/me", {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushUserInformation] = responses;

      const informations = await PushUserInformation.data;
      setData({ Photo: informations["info"]["photos"] });
    });
  }, []);

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
        setErros("Parece que a solicitação já foi enviada");
      }
      if (response.status === 422 && response.data["Equals id's"]) {
        setErros("Este é o seu ID");
      }
      if (response.status === 204) {
        setErros("Esse usuário não existe");
      }
      if (response.status === 200 && response.data["Request sent"]) {
        setSucesso("Solicitação enviada com sucesso!");
        setErros("");
        var inputIdUser = document.getElementById("idUser") as HTMLInputElement;
        inputIdUser.value = "";
        setTimeout(() => {
          setSucesso("");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="WrapperModalFriends">
      <Container fluid>
        <Row
          style={{
            margin: "5% 0",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchIcon />
          <MyTitleForm style={{ marginBottom: "4%" }}>
            Enviar solicitações
          </MyTitleForm>
          <img
            src={data?.Photo}
            alt="User"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </Row>

        <MyCard>
          <Form
            onSubmit={handleSubmit(SubmitIdForm)}
            style={{ height: "100%" }}
          >
            <Row style={{ height: "100%", alignItems: "center" }}>
              <Col lg={10} md={12}>
                <Row style={{ margin: 0 }}>
                  <Col className="text-center" lg={6} md={12}>
                    <MyLableText>Id do usuário:</MyLableText>
                  </Col>
                  <Col lg={6} md={12}>
                    <Form.Group>
                      <Row style={{ margin: 0, justifyContent: "center" }}>
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
                        <div
                          className="text-danger"
                          style={{ fontFamily: "Poppins", fontSize: "20px" }}
                        >
                          {erros}
                        </div>
                        <div
                          className="text-success"
                          style={{ fontFamily: "Poppins", fontSize: "20px" }}
                        >
                          {sucesso}
                        </div>
                      </Row>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} md={12} className="ColSendInviteModalFriend">
                <MyButton type="submit">
                  <InviteIcon />
                </MyButton>
              </Col>
            </Row>
          </Form>
        </MyCard>
      </Container>
    </div>
  );
};

export default ModalFriendUserApp;
