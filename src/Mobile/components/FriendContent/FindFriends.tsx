import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { TitleFindFriends, MySearchInput, SearchIcon } from "./styles";

import Buttons from "../../elements/Buttons";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

type idSubmitForm = {
  idUser: number;
};

const FriendContent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<idSubmitForm>();
  const [erros, setErros] = React.useState("");
  const [sucesso, setSucesso] = React.useState("");

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
    <div style={{ marginTop: "40px" }}>
      <TitleFindFriends>
        <span>Encontre uma pessoa pelo seu código de amigo ;)</span>
        <Link to="/MobileSearchByName">
          <span className="SpanNameUserFindFriendsMobile">
            Ou pelo seu apelido
          </span>
        </Link>
      </TitleFindFriends>
      <div className="text-danger" style={{ fontFamily: "Poppins" }}>
        {erros}
      </div>
      <div className="text-success" style={{ fontFamily: "Poppins" }}>
        {sucesso}
      </div>
      {errors.idUser && (errors.idUser as any).type === "pattern" && (
        <div className="error">{(errors.idUser as any).message}</div>
      )}
      {errors.idUser && (errors.idUser as any).type === "required" && (
        <div className="error">{(errors.idUser as any).message}</div>
      )}
      <Form
        style={{ position: "relative", marginTop: "40px" }}
        onSubmit={handleSubmit(SubmitIdForm)}
      >
        <MySearchInput
          placeholder="Digite o código de amigo..."
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

        <SearchIcon />
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "40px" }}
        >
          <Buttons text="Encontrar" submit />
        </div>
      </Form>
    </div>
  );
};

export default FriendContent;
