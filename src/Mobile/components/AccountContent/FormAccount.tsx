import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Spinner } from "react-bootstrap";
import { TitleForm, MySearchInput, EditIcon } from "./styles";
import Buttons from "../../elements/Buttons";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { FormConfigUser, FormConfigUserAltered } from "../../../@types";

import DeletAccount from "./Confirmation/DeletAccount";

interface Data {
  PushInformations: FormConfigUser;
}

const AccountContent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormConfigUserAltered>();
  const [data, setData] = useState<Data>();
  const [erros, setErros] = React.useState("");
  const [sucesso, setSucesso] = React.useState("");
  const [auxEmail, setAuxEmail] = React.useState("");

  const [editName, setEditName] = React.useState(true);
  const [editUsername, setEditUsername] = React.useState(true);
  const [editEmail, setEditEmail] = React.useState(true);
  const [editNumber, setEditNumber] = React.useState(true);

  const [modalShow, setModalShow] = React.useState(false);

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

  const FormSubmitConfigUser = async (data: FormConfigUserAltered) => {
    const name = data.userName;
    const username = data.userNickName;
    const email = data.userEmail;
    const cellPhoneNumber = data.UserNumber;
    const DDD = data.userDDD;

    try {
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
        setErros("");
        setEditName(true);
        setEditUsername(true);
        setEditNumber(true);

        setTimeout(function () {
          setSucesso("");
        }, 4000);
      }
      if (response.status === 406) {
        setErros("Este Email já existe");
      }
    } catch (err) {}
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {!data ? (
        <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Form
            onSubmit={handleSubmit(FormSubmitConfigUser)}
            style={{ paddingLeft: "10px" }}
          >
            <div style={{ marginBottom: "30px" }}>
              <TitleForm> Nome: </TitleForm>
              <div className="row" style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "80%" }}>
                  <MySearchInput
                    readOnly={editName}
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="ex.: Robson da Silva"
                    defaultValue={data?.PushInformations.info.name}
                    ref={register({
                      required: {
                        value: true,
                        message: "Insira um nome",
                      },
                    })}
                  />
                  {errors.userName &&
                    (errors.userName as any).type === "required" && (
                      <div className="error">
                        {(errors.userName as any).message}
                      </div>
                    )}
                </div>
                <div style={{ width: "20%", textAlign: "center" }}>
                  <EditIcon onClick={() => setEditName(!editName)} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <TitleForm> Apelido: </TitleForm>
              <div className="row" style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "80%" }}>
                  <MySearchInput
                    readOnly={editUsername}
                    type="text"
                    name="userNickName"
                    id="userNickName"
                    placeholder="ex.: RobSilva"
                    defaultValue={data?.PushInformations.info.username}
                    ref={register({
                      required: {
                        value: true,
                        message: "Insira um apelido válido",
                      },
                    })}
                  />
                  {errors.userNickName &&
                    (errors.userNickName as any).type === "required" && (
                      <div className="error">
                        {(errors.userNickName as any).message}
                      </div>
                    )}
                </div>
                <div style={{ width: "20%", textAlign: "center" }}>
                  <EditIcon onClick={() => setEditUsername(!editUsername)} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <TitleForm> Email: </TitleForm>
              <div className="row" style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "80%" }}>
                  <MySearchInput
                    readOnly={editEmail}
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    placeholder="ex.: robson@gmail.com"
                    defaultValue={data?.PushInformations.info.email}
                    ref={register({
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Insira um email válido",
                      },
                      required: {
                        value: true,
                        message: "Insira um email",
                      },
                    })}
                  />
                  {errors.userEmail &&
                    (errors.userEmail as any).type === "pattern" && (
                      <div className="error">
                        {(errors.userEmail as any).message}
                      </div>
                    )}
                  {errors.userEmail &&
                    (errors.userEmail as any).type === "required" && (
                      <div className="error">
                        {(errors.userEmail as any).message}
                      </div>
                    )}
                </div>
                <div style={{ width: "20%", textAlign: "center" }}>
                  <EditIcon onClick={() => setEditEmail(!editEmail)} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <TitleForm> Telefone: </TitleForm>
              <div className="row" style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <MySearchInput
                    readOnly={editNumber}
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
                      required: {
                        value: true,
                        message: "Insira um DDD",
                      },
                    })}
                  />
                  {errors.userDDD &&
                    (errors.userDDD as any).type === "pattern" && (
                      <div className="error">
                        {(errors.userDDD as any).message}
                      </div>
                    )}
                  {errors.userDDD && (errors.userDDD as any).type === "max" && (
                    <div className="error">
                      {(errors.userDDD as any).message}
                    </div>
                  )}
                  {errors.userDDD && (errors.userDDD as any).type === "min" && (
                    <div className="error">
                      {(errors.userDDD as any).message}
                    </div>
                  )}
                  {errors.userDDD &&
                    (errors.userDDD as any).type === "required" && (
                      <div className="error">
                        {(errors.userDDD as any).message}
                      </div>
                    )}
                </div>
                <div style={{ width: "57%", marginLeft: "3%" }}>
                  <MySearchInput
                    readOnly={editNumber}
                    type="text"
                    name="UserNumber"
                    id="UserNumber"
                    placeholder="12345678"
                    defaultValue={data?.PushInformations.info.cellPhoneNumber}
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
                      required: {
                        value: true,
                        message: "Insira um número",
                      },
                    })}
                  />
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
                      <div className="error">
                        {(errors.UserNumber as any).message}
                      </div>
                    )}
                </div>
                <div style={{ width: "20%", textAlign: "center" }}>
                  <EditIcon onClick={() => setEditNumber(!editNumber)} />
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <div className="col">
                <div
                  className="row"
                  style={{ justifyContent: "flex-end", marginRight: "13%" }}
                >
                  <TitleForm> ID: </TitleForm>
                </div>
                <div
                  className="row"
                  style={{
                    margin: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    <MySearchInput
                      defaultValue={data?.PushInformations.info.id}
                      readOnly
                      type="text"
                      name="userID"
                      id="userID"
                    />
                  </div>
                </div>
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
              </div>
            </div>

            <div
              style={{ marginTop: "95px", width: "100%", textAlign: "center" }}
            >
              <div style={{ width: "80%", margin: "0px 0px 15px 7%" }}>
                <Buttons text="Editar dados" submit />
              </div>
              <div
                style={{ width: "80%", marginLeft: "7%" }}
                onClick={() => setModalShow(true)}
              >
                <Buttons text="Deletar conta" fill />
              </div>
            </div>
          </Form>
        </>
      )}
      {modalShow ? (
        <DeletAccount show={modalShow} onHide={() => setModalShow(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default AccountContent;
