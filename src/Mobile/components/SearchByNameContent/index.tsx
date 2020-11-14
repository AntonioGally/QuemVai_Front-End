import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import any_data2 from "../../../img/icones/any_data2.svg";
import {
  TitleFindFriends,
  MySearchInput,
  SearchIcon,
  ArrowBackIcon,
} from "./styles";

import Buttons from "../../elements/Buttons";
import ListPeople from "./ListPeople";

type wordSubmited = {
  nameUser: string;
};

const SearchByNameContent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<wordSubmited>();
  const [existingPeople, setExistingPeople] = React.useState(false);
  const [word, setWord] = React.useState("");
  const [backIcon, setBackIcon] = React.useState(false);

  function submitFormHandle(data: wordSubmited) {
    setExistingPeople(true);
    setWord(data.nameUser);
  }

  if (backIcon) {
    return <Redirect to="/MobileFriends" />;
  }
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <ArrowBackIcon onClick={() => setBackIcon(true)} />
      </div>
      <div style={{ marginTop: "20px", padding: "20px" }}>
        <TitleFindFriends style={{ textAlign: "center" }}>
          <span>Encontre uma pessoa pelo seu apelido ;)</span>
        </TitleFindFriends>
        <Form
          style={{ position: "relative", marginTop: "40px" }}
          onSubmit={handleSubmit(submitFormHandle)}
        >
          <MySearchInput
            placeholder="Digite o apelido que deseja pesquisar..."
            type="text"
            name="nameUser"
            id="nameUser"
            ref={register({
              required: {
                value: true,
                message: "Preencha o campo",
              },
            })}
          />
          {errors.nameUser && (errors.nameUser as any).type === "required" && (
            <div className="error">{(errors.nameUser as any).message}</div>
          )}
          <SearchIcon />
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "40px" }}
          >
            <Buttons text="Encontrar" submit />
          </div>
        </Form>
        {existingPeople ? (
          <ListPeople word={word} />
        ) : (
          <div className="text-center">
            <img
              src={any_data2}
              alt="Nothing"
              style={{ width: "90%", height: "90%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchByNameContent;
