import React from "react";
import { Form } from "react-bootstrap";
import { MySearchInput, SearchIcon, MyRow } from "./styles";
import { useForm } from "react-hook-form";
import "./styles.css";

import ModalSearch from "../ModalSearch";

import key from "./GoogleKey";

type searchBox = {
  word: string;
};

const GoogleMaps: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [auxWord, setAuxWord] = React.useState("");

  const { register, handleSubmit, errors } = useForm<searchBox>();

  function onSubmit(data: searchBox) {
    setAuxWord(data.word);
    setModalShow(true);
  }
  return (
    <>
      <div
        className="row MyRowGoogleMaps"
        style={{ backgroundColor: "transparent", width: "100%" }}
      >
        <MyRow>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <MySearchInput
              placeholder="Pesquisar"
              defaultValue={auxWord}
              type="text"
              name="word"
              id="word"
              ref={register({
                maxLength: {
                  value: 20,
                  message: "Insira no máximo 20 caractéres",
                },
                required : true,
              })}
            />
            <button type="submit" style={{ border: "none", outline: 0 }}>
              <SearchIcon />
            </button>
            {errors.word && (errors.word as any).type === "maxLength" && (
              <div className="wrapperErrorGoogleMaps">
                <div className="text-danger">
                  {(errors.word as any).message}
                </div>
              </div>
            )}
          </Form>
        </MyRow>        
      </div>

     
      {modalShow ? (
        <ModalSearch
          show={modalShow}
          onHide={() => setModalShow(false)}
          wordTyped={auxWord}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default GoogleMaps;
