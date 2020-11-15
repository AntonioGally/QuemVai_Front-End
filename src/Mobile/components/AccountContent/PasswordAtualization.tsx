import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { TitleForm, MySearchInput, EditIcon } from "./styles";
import Buttons from "../../elements/Buttons";

import api from "../../../services/api";
import { Token, logout, login } from "../../../services/auth";

type Passwords = {
  userPassword: string;
  userPasswordConfirm: string;
};

const AccountContent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Passwords>();
  const [erros, setErros] = React.useState("");
  const [sucesso, setSucesso] = React.useState("");

  const [editPassword, setEditPassword] = React.useState(true);
  const [editConfirmPassword, setEditConfirmPassword] = React.useState(true);

  const SubmitForm = async (data: Passwords) => {
    const userPassword = data.userPassword;
    const userPasswordConfirm = data.userPasswordConfirm;

    if (userPassword === userPasswordConfirm) {
      try {
        var config = {
          headers: {
            "x-new-password": userPassword,
            "x-auth-token": Token(),
          },
          validateStatus: function (status: any) {
            return status < 500; // Resolve only if the status code is less than 500
          },
        };
        const response = await api.put("/api/user/unlockpass/me", {}, config);
        if (response.data["Updated"] && response.status === 200) {
          logout();
          var newToken = response.data[" New token"];
          login(newToken);
          setSucesso("Senha atualizada com sucesso!");
          setErros("");

          var userPasswordInput = document.getElementById(
            "userPassword"
          ) as HTMLInputElement;
          userPasswordInput.value = "";

          var userPasswordConfirmInput = document.getElementById(
            "userPasswordConfirm"
          ) as HTMLInputElement;
          userPasswordConfirmInput.value = "";

          setEditPassword(true);
          setEditConfirmPassword(true);

          setTimeout(function () {
            setSucesso("");
          }, 5000);
        }
        if (!response.data["Updated"]) {
          setErros("Houve algum problema na atualização de dados");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setErros("As senhas não são iguais");
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Form onSubmit={handleSubmit(SubmitForm)} style={{ paddingLeft: "10px" }}>
        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Nova senha: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "80%" }}>
              <MySearchInput
                readOnly={editPassword}
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder="ex.: *******"
                ref={register({
                  required: {
                    value: true,
                    message: "Insira uma senha",
                  },
                  minLength: {
                    value: 8,
                    message: "Insira no mínimo 8 caractéres",
                  },
                })}
              />
              {errors.userPassword &&
                (errors.userPassword as any).type === "required" && (
                  <div className="error">
                    {(errors.userPassword as any).message}
                  </div>
                )}
              {errors.userPassword &&
                (errors.userPassword as any).type === "minLength" && (
                  <div className="error">
                    {(errors.userPassword as any).message}
                  </div>
                )}
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
              <EditIcon onClick={() => setEditPassword(!editPassword)} />
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <TitleForm> Confirme a nova senha: </TitleForm>
          <div className="row" style={{ margin: 0, alignItems: "center" }}>
            <div style={{ width: "80%" }}>
              <MySearchInput
                readOnly={editConfirmPassword}
                type="password"
                name="userPasswordConfirm"
                id="userPasswordConfirm"
                placeholder="ex.: *******"
                ref={register({
                  required: {
                    value: true,
                    message: "Insira uma senha",
                  },
                  minLength: {
                    value: 8,
                    message: "Insira no mínimo 8 caractéres",
                  },
                })}
              />
              {errors.userPasswordConfirm &&
                (errors.userPasswordConfirm as any).type === "required" && (
                  <div className="error">
                    {(errors.userPasswordConfirm as any).message}
                  </div>
                )}
              {errors.userPasswordConfirm &&
                (errors.userPasswordConfirm as any).type === "minLength" && (
                  <div className="error">
                    {(errors.userPasswordConfirm as any).message}
                  </div>
                )}
            </div>
            <div style={{ width: "20%", textAlign: "center" }}>
              <EditIcon
                onClick={() => setEditConfirmPassword(!editConfirmPassword)}
              />
            </div>
          </div>
          <div className="text-danger" style={{ fontFamily: "Poppins" }}>
            {erros}
          </div>
          <div className="text-success" style={{ fontFamily: "Poppins" }}>
            {sucesso}
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
