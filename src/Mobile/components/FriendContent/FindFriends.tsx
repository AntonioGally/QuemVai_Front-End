import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { TitleFindFriends, MySearchInput, SearchIcon } from "./styles";

import Buttons from "../../elements/Buttons";

const FriendContent: React.FC = () => {
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
      <Form style={{ position: "relative", marginTop: "40px" }}>
        <MySearchInput
          placeholder="Digite o código de amigo..."
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

        <SearchIcon />
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "40px" }}
        >
          <button
            type="submit"
            style={{ border: "none", outline: 0, padding: 0, borderRadius: 8 }}
          >
            <Buttons text="Encontrar" />
          </button>
        </div>

        {/* {errors.word && (errors.word as any).type === "maxLength" && (
                <div className="wrapperErrorGoogleMaps">
                  <div className="text-danger">
                    {(errors.word as any).message}
                  </div>
                </div>
              )} */}
      </Form>
    </div>
  );
};

export default FriendContent;
