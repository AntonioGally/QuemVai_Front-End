import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./ModalConfigStyles.css";
import { Row, Col, Form, Container, InputGroup } from "react-bootstrap";
import { MyTitleForm, MyLableText, MyForm, MyButton } from "./styles";

import api from "../services/api";
import { getToken } from "../services/auth";
import { FormConfigUser, FormConfigUserAltered } from "../@types";

import ModalConfirmDeleteAcc from "./confirmation/ModalConfirmDeleteAcc";

interface Data {
  PushInformations: FormConfigUser;
}

const ModalConfigUserApp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormConfigUserAltered>();
  const [data, setData] = useState<Data>();
  const [erros, setErros] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const FormSubmitConfigUser = async (data: FormConfigUserAltered) => {
    const name = data.userName;
    const username = data.userNickName;
    const email = data.userEmail;
    const cellPhoneNumber = data.UserNumber;
    const DDD = data.userDDD;

    try {
      var config = {
        headers: { "x-auth-token": getToken() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.put(
        "/api/user/update/me",
        { cellPhoneNumber, email, DDD, name, username },
        config
      );
      if (response.data["Updated"]) {
        alert("Dados atualizados com sucesso!");
        window.location.reload();
      }
      if (!response.data["Updated"]) {
        setErros("Houve algum problema na atualização de dados");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Promise.all([
      api.get("/api/user/bring/me", {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": getToken() },
      }),
    ]).then(async (responses) => {
      const [PushUserInformation] = responses;

      const informations = await PushUserInformation.data;
      setData({ PushInformations: informations });
    });
  }, []);

  return (
    <div className="WrapperModalConfig">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Suas informações:
        </MyTitleForm>
        <Form onSubmit={handleSubmit(FormSubmitConfigUser)}>
          <Row style={{ marginBottom: "4%" }}>
            <Col md={6}>
              <MyLableText> Nome: </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="ex.: Robson da Silva"
                    defaultValue={data?.PushInformations.info.name}
                    style={{ borderRadius: "10px" }}
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.userName &&
                    (errors.userName as any).type === "required" && (
                      <div className="error">O Nome é obrigatório</div>
                    )}
                </Form.Group>
              </MyForm>
            </Col>
            <Col md={6}>
              <MyLableText> Apelido: </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="userNickName"
                    id="userNickName"
                    placeholder="ex.: RobSilva"
                    defaultValue={data?.PushInformations.info.username}
                    style={{ borderRadius: "10px" }}
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.userNickName &&
                    (errors.userNickName as any).type === "required" && (
                      <div className="error">O NickName é obrigatório</div>
                    )}
                </Form.Group>
              </MyForm>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <MyLableText> Email: </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    placeholder="ex.: robson@gmail.com"
                    defaultValue={data?.PushInformations.info.email}
                    style={{ borderRadius: "10px" }}
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Insira um email válido",
                      },
                    })}
                  />
                  {errors.userEmail &&
                    (errors.userEmail as any).type === "required" && (
                      <div className="error">O Email é obrigatório</div>
                    )}
                  {errors.userEmail &&
                    (errors.userEmail as any).type === "pattern" && (
                      <div className="error">
                        {(errors.userEmail as any).message}
                      </div>
                    )}
                </Form.Group>
              </MyForm>
            </Col>
            <Col md={6}>
              <div className="row" style={{ margin: 0 }}>
                <MyLableText>Telefone:</MyLableText>
              </div>
              <MyForm className="firstColumn">
                <Form.Group>
                  <InputGroup>
                    <Col md={2} style={{ padding: 0, marginRight: "1%" }}>
                      <Form.Control
                        type="text"
                        name="userDDD"
                        id="userDDD"
                        placeholder="01"
                        defaultValue={data?.PushInformations.info.DDD}
                        style={{ borderRadius: "10px" }}
                        ref={register({
                          pattern: {
                            value: /^[0-9]+$/i,
                            message: "Insira um número válido",
                          },
                          max: {
                            value: 3,
                            message: "Insira no máximo 3 números",
                          },
                          min: {
                            value: 2,
                            message: "Insira no mínimo 2 números",
                          },
                          required: true,
                        })}
                      />
                      {errors.userDDD &&
                        (errors.userDDD as any).type === "pattern" && (
                          <div className="error">
                            {(errors.userDDD as any).message}
                          </div>
                        )}
                      {errors.userDDD &&
                        (errors.userDDD as any).type === "max" && (
                          <div className="error">
                            {(errors.userDDD as any).message}
                          </div>
                        )}
                      {errors.userDDD &&
                        (errors.userDDD as any).type === "min" && (
                          <div className="error">
                            {(errors.userDDD as any).message}
                          </div>
                        )}
                      {errors.userDDD &&
                        (errors.userDDD as any).type === "required" && (
                          <div className="error">O DDD é obrigatório</div>
                        )}
                    </Col>
                    <Col style={{ padding: 0 }}>
                      <Form.Control
                        type="text"
                        name="UserNumber"
                        id="UserNumber"
                        placeholder="12345678"
                        defaultValue={
                          data?.PushInformations.info.cellPhoneNumber
                        }
                        style={{ borderRadius: "10px" }}
                        ref={register({
                          pattern: {
                            value: /^[0-9]+$/i,
                            message: "Insira um número válido",
                          },
                          max: {
                            value: 10,
                            message: "Insira no máximo 10 números",
                          },
                          min: {
                            value: 8,
                            message: "Insira no mínimo 8 números",
                          },
                          required: true,
                        })}
                      />
                    </Col>
                    {errors.UserNumber &&
                      (errors.UserNumber as any).type === "pattern" && (
                        <div className="error">
                          {(errors.UserNumber as any).message}
                        </div>
                      )}
                    {errors.UserNumber &&
                      (errors.UserNumber as any).type === "max" && (
                        <div className="error">
                          {(errors.UserNumber as any).message}
                        </div>
                      )}
                    {errors.UserNumber &&
                      (errors.UserNumber as any).type === "min" && (
                        <div className="error">
                          {(errors.UserNumber as any).message}
                        </div>
                      )}
                    {errors.UserNumber &&
                      (errors.UserNumber as any).type === "required" && (
                        <div className="error">O número é obrigatório</div>
                      )}
                  </InputGroup>
                </Form.Group>
              </MyForm>
              <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
            </Col>
          </Row>
          <Row style={{ justifyContent: "flex-end" }}>
            <Col md={6}>
              <MyForm>
                <div style={{ margin: "5%" }}>
                  <div className="row" style={{ justifyContent: "flex-end" }}>
                    <MyButton
                      type="submit"
                      className="btn"
                      style={{ width: "40%" }}
                    >
                      Alterar dados
                    </MyButton>
                  </div>
                </div>
              </MyForm>
            </Col>
          </Row>
        </Form>
        <Row style={{ marginTop: "5%", justifyContent: "flex-end" }}>
          <Col md={6}>
            <MyForm>
              <div style={{ margin: "5%" }}>
                <div className="row" style={{ justifyContent: "flex-end" }}>
                  <MyButton
                    className="btn"
                    onClick={() => setModalShow(true)}
                    style={{ width: "40%" }}
                  >
                    Deletar conta
                  </MyButton>
                </div>
              </div>
            </MyForm>
          </Col>
        </Row>
      </Container>
      {modalShow ? (
        <ModalConfirmDeleteAcc
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalConfigUserApp;
