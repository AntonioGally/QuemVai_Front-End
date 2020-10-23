import React from "react";
import { Form } from "react-bootstrap";
import { MySearchInput, SearchIcon, MyRow } from "./styles";
import { useForm } from "react-hook-form";
import "./styles.css";

import ModalSearch from "../ModalSearch";

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
                required: {
                  value: true,
                  message: "Preencha o campo",
                },
              })}
            />
            <button type="submit" style={{ border: "none" }}>
              <SearchIcon />
            </button>
            {errors.word && (errors.word as any).type === "maxLength" && (
              <div className="wrapperErrorGoogleMaps">
                <div className="text-danger">
                  {(errors.word as any).message}
                </div>
              </div>
            )}
            {errors.word && (errors.word as any).type === "required" && (
              <div className="wrapperErrorGoogleMaps">
                <div className="text-danger">
                  {(errors.word as any).message}
                </div>
              </div>
            )}
          </Form>
        </MyRow>
        <div
          className="col MyColGoogleMaps"
          style={{ display: "none", padding: 0, maxWidth: "30%" }}
        >
          <img
            src=""
            alt="usuario"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              float: "right",
            }}
          />
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31336.50805414436!2d-37.05724860990675!3d-10.958575515118602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab1544635fa23%3A0xb52f1f62b9915806!2sCoroa%20do%20Meio%2C%20Aracaju%20-%20SE!5e0!3m2!1spt-BR!2sbr!4v1597966283170!5m2!1spt-BR!2sbr"
        className="MyMap"
        title={"teste"}
      ></iframe>
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
