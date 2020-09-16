import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./ModalConfigStyles.css";
import { Row, Col, Form, Container, InputGroup, Image } from "react-bootstrap";
import { MyTitleForm, MyLableText, MyForm, MyButton } from "./styles";

import api from "../services/api";
import { getTokenAdmin, getToken } from "../services/auth";
import { FormConfigUser, FormConfigUserAltered } from "../@types";

interface Data {
  PushInformations: FormConfigUser;
}

const ModalConfigUserApp: React.FC = () => {
  const { register, errors } = useForm<FormConfigUserAltered>();
  const [token, setToken] = useState();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    if (getToken()) {
      setToken(getToken() as any);
    } else if (getTokenAdmin()) {
      setToken(getTokenAdmin() as any);
    }
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
  }, [token]);
  console.log(data);
  return (
    <div className="WrapperModalConfig">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Suas informações:
        </MyTitleForm>
        <Form>
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
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <MyLableText> Foto de perfil: </MyLableText>
              <MyForm className="firstColumn">
                <Image
                  src={data?.PushInformations.info.photos}
                  width="120px"
                  height="120px"
                  roundedCircle
                />
              </MyForm>
            </Col>
            <Col md={6}>
              <MyLableText style={{ marginBottom: "2% 0" }}>
                Altere sua foto:
              </MyLableText>
              <MyForm>
                <div style={{ margin: "5%" }}>
                  <div className="mb-3">
                    <Form.File custom>
                      <Form.File.Label>Procurar...</Form.File.Label>
                      <Form.File.Input
                        name="userPhoto"
                        id="userPhoto"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.userPhoto &&
                        (errors.userPhoto as any).type === "required" && (
                          <div className="error">A foto é obrigatória</div>
                        )}
                    </Form.File>
                  </div>

                  <div className="row" style={{ justifyContent: "flex-end" }}>
                    <MyButton type="submit" className="btn" style={{width:"40%"}}>
                      Alterar dados
                    </MyButton>
                  </div>
                </div>
              </MyForm>
            </Col>
          </Row>
        </Form>

        <Form>
          <Row style={{ alignItems: "center" }}>
            <Col md={6}>
              <MyLableText> Alterar sua senha: </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Form.Control
                    type="password"
                    name="userPassword"
                    id="userPassword"
                    placeholder="ex.: *******"
                    style={{ borderRadius: "10px" }}
                    ref={register({
                      required: true,
                      minLength: {
                        value: 8,
                        message: "Insira uma senha com no mínimo 8 caractéres",
                      },
                    })}
                  />
                  {errors.userPassword &&
                    (errors.userPassword as any).type === "required" && (
                      <div className="error">A senha é obrigatória</div>
                    )}
                  {errors.userPassword &&
                    (errors.userPassword as any).type === "minLenght" && (
                      <div className="error">
                        {(errors.userPassword as any).message}
                      </div>
                    )}
                </Form.Group>
              </MyForm>
            </Col>
            <Col md={6}>
              <MyButton
                type="submit"
                className="btn"
                style={{ marginTop: "13px", width: "40%" }}
              >
                Alterar senha
              </MyButton>
            </Col>
          </Row>
        </Form>

        <Row style={{ marginTop: "5%" }}>
          <Col md={6}>
            <MyButton type="submit" className="btn" style={{ width: "40%" }}>
              Deletar conta
            </MyButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ModalConfigUserApp;
