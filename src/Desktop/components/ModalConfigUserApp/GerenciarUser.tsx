import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSideBarContext } from "../../../Context/ReloadSideBar";
import "./ModalConfigStyles.css";
import {
  Row,
  Col,
  Form,
  Container,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { MyTitleForm, MyLableText, MyForm, MyButton, EditIcon } from "./styles";
import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { FormConfigUser, FormConfigUserAltered } from "../../../@types";

import ModalConfirmDeleteAcc from "./confirmation/ModalConfirmDeleteAcc";

interface Data {
  PushInformations: FormConfigUser;
}

const ModalConfigUserApp: React.FC = () => {
  const { reload, setReload } = useSideBarContext();

  const { register, handleSubmit, errors } = useForm<FormConfigUserAltered>();
  const [data, setData] = useState<Data>();
  const [erros, setErros] = React.useState("");
  const [sucesso, setSucesso] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [auxEmail, setAuxEmail] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const [editName, setEditName] = React.useState(true);
  const [editUsername, setEditUsername] = React.useState(true);
  const [editEmail, setEditEmail] = React.useState(true);
  const [editNumber, setEditNumber] = React.useState(true);

  const FormSubmitConfigUser = async (data: FormConfigUserAltered) => {
    const name = data.userName;
    const username = data.userNickName;
    const email = data.userEmail;
    const cellPhoneNumber = data.UserNumber;
    const DDD = data.userDDD;

    try {
      setLoading(true);
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      var user_email_confirm = auxEmail;

      const response = await api.put(
        "/api/user/update/me",
        { cellPhoneNumber, email, user_email_confirm, DDD, name, username },
        config
      );
      if (response.status === 200) {
        setSucesso("Dados atualizados com sucesso!");
        setLoading(false);
        setEditName(true);
        setEditUsername(true);
        setEditNumber(true);

        setTimeout(function () {
          setSucesso("");
        }, 5000);
        setReload(reload + 1);
      }
      if (response.status === 406) {
        setErros("Este Email já existe");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);     
    }
  };

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
      setData({ PushInformations: informations });
      setAuxEmail(informations["info"]["email"]);
    });
  }, []);

  return (
    <div className="WrapperModalConfig">
      <div className="MySvgGerenciarUserModal">
        <img src={SvgModalConfigUser} alt="Art Top" />
      </div>
      <Container fluid style={{ marginTop: "10%" }}>
        <MyTitleForm>Suas informações</MyTitleForm>
        <Form onSubmit={handleSubmit(FormSubmitConfigUser)}>
          <Row style={{ marginBottom: "4%" }}>
            <Col md={12} lg={6}>
              <MyLableText> Nome </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Row className="MyRowForm">
                    <Form.Control
                      readOnly={editName}
                      className="MyInputForm"
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="ex.: Robson da Silva"
                      defaultValue={data?.PushInformations.info.name}
                      ref={register({
                        required: true,
                      })}
                    />
                    {errors.userName &&
                      (errors.userName as any).type === "required" && (
                        <div className="error">O Nome é obrigatório</div>
                      )}
                    <EditIcon onClick={() => setEditName(!editName)} />
                  </Row>
                </Form.Group>
              </MyForm>
            </Col>
            <Col md={12} lg={6}>
              <MyLableText> Apelido </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Row className="MyRowForm">
                    <Form.Control
                      readOnly={editUsername}
                      className="MyInputForm"
                      type="text"
                      name="userNickName"
                      id="userNickName"
                      placeholder="ex.: RobSilva"
                      defaultValue={data?.PushInformations.info.username}
                      ref={register({
                        required: true,
                      })}
                    />
                    <EditIcon onClick={() => setEditUsername(!editUsername)} />
                  </Row>
                  {errors.userNickName &&
                    (errors.userNickName as any).type === "required" && (
                      <div className="error">O NickName é obrigatório</div>
                    )}
                </Form.Group>
              </MyForm>
            </Col>
          </Row>
          <Row style={{ marginBottom: "4%" }}>
            <Col md={12} lg={6}>
              <MyLableText> Email </MyLableText>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Row className="MyRowForm">
                    <Form.Control
                      readOnly={editEmail}
                      className="MyInputForm"
                      type="email"
                      name="userEmail"
                      id="userEmail"
                      placeholder="ex.: robson@gmail.com"
                      defaultValue={data?.PushInformations.info.email}
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Insira um email válido",
                        },
                      })}
                    />
                    <EditIcon onClick={() => setEditEmail(!editEmail)} />
                  </Row>
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
            <Col md={12} lg={6}>
              <div className="row" style={{ margin: 0 }}>
                <MyLableText>Telefone</MyLableText>
              </div>
              <MyForm className="firstColumn">
                <Form.Group>
                  <InputGroup>
                    <Col md={2} style={{ padding: 0 }}>
                      <Form.Control
                        readOnly={editNumber}
                        className="MyInputForm"
                        type="text"
                        name="userDDD"
                        id="userDDD"
                        placeholder="01"
                        defaultValue={data?.PushInformations.info.DDD}
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
                    <Col style={{ padding: 0 }} md={10}>
                      <Row className="MyRowForm">
                        <Form.Control
                          readOnly={editNumber}
                          className="MyInputForm"
                          type="text"
                          name="UserNumber"
                          id="UserNumber"
                          placeholder="12345678"
                          style={{ width: "76%" }}
                          defaultValue={
                            data?.PushInformations.info.cellPhoneNumber
                          }
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
                        <EditIcon onClick={() => setEditNumber(!editNumber)} />
                      </Row>
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
              <Row>
                {loading ? <Spinner animation="border" /> : ""}

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
            </Col>
          </Row>
          <Row
            style={{
              justifyContent: "flex-end",
              marginTop: "7%",
              alignItems: "center",
            }}
          >
            <Col md={6} lg={4}>
              <MyForm className="firstColumn">
                <Form.Group>
                  <Row className="MyRowForm">
                    <MyLableText style={{ marginRight: "8%" }}>
                      {" "}
                      ID{" "}
                    </MyLableText>
                    <Form.Control
                      className="MyInputFormID"
                      type="text"
                      id="userId"
                      defaultValue={data?.PushInformations.info.id}
                      readOnly
                    />
                  </Row>
                </Form.Group>
              </MyForm>
            </Col>
            <Col md={6} lg={4}>
              <MyForm>
                <div style={{ margin: "5%" }}>
                  <button
                    type="button"
                    className="btn MyButtonDeleteAccount"
                    onClick={() => setModalShow(true)}
                    style={{ width: "100%" }}
                  >
                    Deletar Conta
                  </button>
                </div>
              </MyForm>
            </Col>
            <Col md={6} lg={4}>
              <MyForm>
                <div style={{ margin: "5%" }}>
                  <MyButton
                    type="submit"
                    className="btn"
                    style={{ width: "100%" }}
                  >
                    Editar dados
                  </MyButton>
                </div>
              </MyForm>
            </Col>
          </Row>
        </Form>
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
