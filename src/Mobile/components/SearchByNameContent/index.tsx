import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Row } from "react-bootstrap";
import {
  TitleFindFriends,
  MySearchInput,
  SearchIcon,
  ArrowBackIcon,
  CardContainer,
  MyCard,
  NameUser,
  AddUserIcon,
} from "./styles";

import Buttons from "../../elements/Buttons";

const SearchByNameContent: React.FC = () => {
  var aux_list = [1, 2, 3, 4, 5, 6];
  const [filter, setFilter] = React.useState(true);
  const [backIcon, setBackIcon] = React.useState(false);
  if (backIcon) {
    return <Redirect to="/MobileFriends" />;
  }
  return (
    <div style={{ height: "90vh" }}>
      <div>
        <ArrowBackIcon onClick={() => setBackIcon(true)} />
      </div>
      <div style={{ marginTop: "20px", padding: "20px" }}>
        <TitleFindFriends style={{ textAlign: "center" }}>
          <span>Encontre uma pessoa pelo seu apelido ;)</span>
        </TitleFindFriends>
        <Form style={{ position: "relative", marginTop: "40px" }}>
          <MySearchInput
            placeholder="Digite o apelido que deseja pesquisar..."
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
              style={{
                border: "none",
                outline: 0,
                padding: 0,
                borderRadius: 8,
              }}
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
      {filter ? (
        <CardContainer>
          {aux_list.map((information) => (
            <MyCard key={information}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <img
                  src="https://quemvai.blob.core.windows.net/fotos/d88a262f-df82-9aca-0dcd-e2b59e542a5a.jpg"
                  alt="User"
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                />

                <NameUser>Mário Sérgio Cortela {information}</NameUser>

                <AddUserIcon />
              </Row>
            </MyCard>
          ))}
        </CardContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchByNameContent;
