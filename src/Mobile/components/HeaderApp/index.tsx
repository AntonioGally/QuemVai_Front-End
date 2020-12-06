import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MyRow, MySearchInput, SearchIcon } from "./styles";
import { Col, Form } from "react-bootstrap";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

type searchBox = {
  word: string;
};

const HeaderApp: React.FC = () => {
  const [userPhoto, setUserPhoto] = React.useState(String);
  const [isValid, setIsValid] = React.useState(Boolean);
  const [userClick, setUserClick] = React.useState(false);
  const [auxWord, setAuxWord] = React.useState("");

  const { register, handleSubmit, errors } = useForm<searchBox>();

  useEffect(() => {
    Promise.all([
      api.get("/api/user/bring/me", {
        validateStatus: function (status) {
          return status < 501; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushUserInformation] = responses;
      const results = await PushUserInformation.data;
      if (results["info"]) {
        setUserPhoto(results["info"]["photos"]);
        setIsValid(true);
        //to fazendo isso pq quando o token n era válido,
        //o site fazia logOut mas mesmo assim chegava a entrar no HeaderApp,
        //então eu to fazendo dupla verificação
      } else {
        setIsValid(false);
      }
    });
  }, []);

  function onSubmit(data: searchBox) {
    setAuxWord(data.word);
  }

  if (auxWord !== "") {
    return <Redirect to={`/SearchMain/${auxWord}`} />;
  }
  if (userClick) {
    return <Redirect to="/MobileManegementUser" />;
  }
  return (
    <MyRow>
      <Col style={{ maxWidth: "70%" }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <MySearchInput
            placeholder="Pesquisar"
            type="text"
            name="word"
            id="word"
            ref={register({
              maxLength: {
                value: 20,
                message: "Insira no máximo 20 caractéres",
              },
              required: true,
            })}
          />
          <button type="submit" style={{ border: "none", outline: 0 }}>
            <SearchIcon />
          </button>
          {errors.word && (errors.word as any).type === "maxLength" && (
            <div className="wrapperErrorGoogleMaps">
              <div className="text-danger">{(errors.word as any).message}</div>
            </div>
          )}
        </Form>
      </Col>
      <Col style={{ maxWidth: "30%", textAlign: "center" }}>
        {isValid ? (
          <img
            src={userPhoto}
            alt="User"
            style={{ borderRadius: "50%", width: "55px", height: "55px" }}
            onClick={() => setUserClick(true)}
          />
        ) : (
          ""
        )}
      </Col>
    </MyRow>
  );
};

export default HeaderApp;
