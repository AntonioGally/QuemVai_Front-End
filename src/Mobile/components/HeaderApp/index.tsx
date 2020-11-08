import React, { useEffect } from "react";

import { MyRow, MySearchInput, SearchIcon } from "./styles";
import { Col, Form } from "react-bootstrap";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

const HeaderApp: React.FC = () => {
  const [userPhoto, setUserPhoto] = React.useState(String);
  const [isValid, setIsValid] = React.useState(Boolean);

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
  return (
    <MyRow>
      <Col style={{ maxWidth: "70%" }}>
        <Form>
          <MySearchInput
            placeholder="Pesquisar"
            type="text"
            name="word"
            id="word"
            // ref={register({
            //   maxLength: {
            //     value: 20,
            //     message: "Insira no máximo 20 caractéres",
            //   },
            //   required: true,
            // })}
          />
          <button type="submit" style={{ border: "none", outline: 0 }}>
            <SearchIcon />
          </button>
          {/* {errors.word && (errors.word as any).type === "maxLength" && (
                <div className="wrapperErrorGoogleMaps">
                  <div className="text-danger">
                    {(errors.word as any).message}
                  </div>
                </div>
              )} */}
        </Form>
      </Col>
      <Col style={{ maxWidth: "30%", textAlign: "center" }}>
        {isValid ? (
          <img
            src={userPhoto}
            alt="User"
            style={{ borderRadius: "50%", width: "55px", height: "55px" }}
          />
        ) : (
          ""
        )}
      </Col>
    </MyRow>
  );
};

export default HeaderApp;
