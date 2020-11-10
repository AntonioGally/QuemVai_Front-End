import React from "react";

import { Form } from "react-bootstrap";
import { TitleForm } from "./styles";
import Buttons from "../../elements/Buttons";


const AccountContent: React.FC = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Form style={{ paddingLeft: "10px" }}>
        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Sua foto: </TitleForm>
          <div className="row" style={{ margin: 0, justifyContent: "center" }}>
            <img
              src="https://quemvai.blob.core.windows.net/fotos/d88a262f-df82-9aca-0dcd-e2b59e542a5a.jpg"
              style={{               
                width: "40%",
                height: "40%",
                borderRadius: "50%",
              }}
              alt={"Imagem do usuário"}
            />
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Nova foto: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "100%" }}>
              <Form.File custom>
                <Form.File.Label>Procurar...</Form.File.Label>
                <Form.File.Input
                  name="userPhoto"
                  id="userPhoto"                  
                  // ref={register({
                  //   required: true,
                  // })}
                />

                {/* {errors.userPhoto &&
                  (errors.userPhoto as any).type === "required" && (
                    <div className="error">A foto é obrigatória</div>
                  )} */}
              </Form.File>
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
