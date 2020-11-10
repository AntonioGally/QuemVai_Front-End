import React from "react";

import { Form } from "react-bootstrap";
import { TitleForm, MySearchInput, EditIcon } from "./styles";
import Buttons from "../../elements/Buttons";

const AccountContent: React.FC = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Form style={{ paddingLeft: "10px" }}>
        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Nome: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "80%" }}>
              <MySearchInput
                type="text"
                name="userName"
                id="userName"
                placeholder="ex.: Robson da Silva"
                // defaultValue={data?.PushInformations.info.name}
                // ref={register({
                //   required: {
                //     value: true,
                //     message:"Insira um nome válido"
                //   },
                // })}
              />
              {/* {errors.word && (errors.word as any).type === "maxLength" && (
                <div className="wrapperErrorGoogleMaps">
                  <div className="text-danger">
                    {(errors.word as any).message}
                  </div>
                </div>
              )} */}
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
              <EditIcon />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Apelido: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "80%" }}>
              <MySearchInput
                type="text"
                name="userNickName"
                id="userNickName"
                placeholder="ex.: RobSilva"
                //  defaultValue={data?.PushInformations.info.username}
                // ref={register({
                //   required: {
                //     value: true,
                //     message:"Insira um apelido válido"
                //   },
                // })}
              />
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
              <EditIcon />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Email: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "80%" }}>
              <MySearchInput
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="ex.: robson@gmail.com"
                // defaultValue={data?.PushInformations.info.email}
                // ref={register({
                //   required: true,
                //   pattern: {
                //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                //     message: "Insira um email válido",
                //   },
                // })}
              />
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
              <EditIcon />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Telefone: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "20%" }}>
              <MySearchInput
                type="text"
                name="userDDD"
                id="userDDD"
                placeholder="01"
                // defaultValue={data?.PushInformations.info.DDD}
                // ref={register({
                //   pattern: {
                //     value: /^[0-9]+$/i,
                //     message: "Insira um número válido",
                //   },
                //   max: {
                //     value: 3,
                //     message: "Insira no máximo 3 números",
                //   },
                //   min: {
                //     value: 2,
                //     message: "Insira no mínimo 2 números",
                //   },
                //   required: true,
                // })}
              />
            </div>
            <div style={{ width: "57%", marginLeft: "3%" }}>
              <MySearchInput
                type="text"
                name="UserNumber"
                id="UserNumber"
                placeholder="12345678"
                // defaultValue={data?.PushInformations.info.cellPhoneNumber}
                // ref={register({
                //   pattern: {
                //     value: /^[0-9]+$/i,
                //     message: "Insira um número válido",
                //   },
                //   max: {
                //     value: 10,
                //     message: "Insira no máximo 10 números",
                //   },
                //   min: {
                //     value: 8,
                //     message: "Insira no mínimo 8 números",
                //   },
                //   required: true,
                // })}
              />
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
              <EditIcon />
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
                  type="text"
                  name="userID"
                  id="userID"
                  // defaultValue={data?.PushInformations.info.email}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "95px", width: "100%", textAlign: "center" }}>
          <div style={{ width: "80%", margin: "0px 0px 15px 7%" }}>
            <Buttons text="Editar dados" submit />
          </div>
          <div style={{ width: "80%", marginLeft: "7%" }}>
            <Buttons text="Deletar conta" fill />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AccountContent;
