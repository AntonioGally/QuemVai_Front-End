import React from "react";
import { Form } from "react-bootstrap";
import { MySearchInput, SearchIcon, MyRow } from "./styles";
import { useForm } from "react-hook-form";
import "./styles.css";

// import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
// import { useLoadScript } from "@react-google-maps/api";

// import { greenMap } from "./MapStyle";
// import key from "./GoogleKey";

import ModalSearch from "../ModalSearch";

type searchBox = {
  word: string;
};

// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

// const center = {
//   lat: -23.5656334,
//   lng: -46.5585131,
// };
// const options = {
//   styles: greenMap,
//   disableDefaultUI: true,
//   zoomControl: true,
// };

const GoogleMaps: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [auxWord, setAuxWord] = React.useState("");

  const { register, handleSubmit, errors } = useForm<searchBox>();

  function onSubmit(data: searchBox) {
    setAuxWord(data.word);
    setModalShow(true);
  }

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: key, //Adicionando a minha key da api do google
  //   libraries: ["places"], // usando uma biblioteca a mais
  // });

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
                required: true,
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
      {/* 
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
        options={options}
      ></GoogleMap> */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.053074668!2d-46.876169012259254!3d-23.681530274331745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1605588640433!5m2!1spt-BR!2sbr"
        width="100%"
        style={{ border: 0, height: "100%" }}
        aria-hidden="false"
        title="MyMap"
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
