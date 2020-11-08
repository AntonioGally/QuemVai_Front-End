import React from "react";
import { Form } from "react-bootstrap";
import { TitleFindFriends, MySearchInput, SearchIcon } from "./styles";

import ButtonOrange from "../../elements/ButtonOrange";

const FriendContent: React.FC = () => {
  return (
    <div>
      <TitleFindFriends>
        <span>Encontre uma pessoa pelo seu código de amigo ;)</span>
        <span className="SpanNameUserFindFriendsMobile">
          {" "}
          Ou pelo seu apelido
        </span>
      </TitleFindFriends>
      <Form style={{ position: "relative", marginTop: "40px" }}>
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

        <SearchIcon />
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "40px" }}
        >
          <button
            type="submit"
            style={{ border: "none", outline: 0, padding: 0, borderRadius: 8 }}
          >
            <ButtonOrange text="Encontrar" />
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
