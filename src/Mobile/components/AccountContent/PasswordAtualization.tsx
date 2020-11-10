import React from "react";

import { Form } from "react-bootstrap";
import { TitleForm, MySearchInput, EditIcon } from "./styles";
import Buttons from "../../elements/Buttons";

const AccountContent: React.FC = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Form style={{ paddingLeft: "10px" }}>
        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Nova senha: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "80%" }}>
              <MySearchInput
                type="password"
                name="userPassword"
                id="userPassword"
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
          <TitleForm> Confirme a nova senha: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "80%" }}>
              <MySearchInput
                type="password"
                name="userPasswordConfirm"
                id="userPasswordConfirm"
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

        <div style={{ marginTop: "95px", width: "100%", textAlign: "center" }}>
          <div style={{ width: "80%", margin: "0px 0px 15px 7%" }}>
            <Buttons text="Alterar" submit />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AccountContent;
