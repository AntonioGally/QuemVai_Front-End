import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { MySearchInput, SearchIcon, MyRow } from "./styles";
import { useForm } from "react-hook-form";
import "./styles.css";

import markerSpace from "../../../img/icones/markerSpace.png";
import markerEvent from "../../../img/icones/markerEvent.png";

import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";

// import usePlacesAutoComplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

import { greenMap } from "./MapStyle";
import keyMap from "./GoogleKey";

import ModalSearch from "../ModalSearch";
import ModalCreateEvents from "../ModalEventsUserApp/ModalCreateEvents";

import { ListSpaceByUFAux } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

interface Data {
  SpaceList: ListSpaceByUFAux[];
}
declare const google: any;

type searchBox = {
  word: string;
};

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -23.5656334,
  lng: -46.5585131,
};
const options = {
  styles: greenMap,
  disableDefaultUI: true,
  zoomControl: true,
};

const GoogleMaps: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [auxWord, setAuxWord] = React.useState("");
  const { register, handleSubmit, errors } = useForm<searchBox>();
  const [modalCreateEvent, setModalCreateEvent] = React.useState(false);
  const [teste, setTeste] = React.useState(Number);
  const [data, setData] = React.useState<Data>();
  const [reload, setReload] = React.useState(Number);

  var markersData = [
    {
      lat: -23.589115,
      lng: -46.6595545,
      id: 1,
    },
    {
      lat: -20.913974,
      lng: -47.577481,
      id: 2,
    },
    {
      lat: -23.51503,
      lng: -46.594878,
      id: 3,
    },
    {
      lat: -23.54536,
      lng: -46.71803,
      id: 4,
    },
    {
      lat: -23.4567,
      lng: -46.5319,
      id: 5,
    },
    {
      lat: -20.354531,
      lng: -40.317622,
      id: 6,
    },
    {
      lat: -23.5036,
      lng: -46.5399,
      id: 7,
    },
    {
      lat: -23.567539,
      lng: -46.591118,
      id: 8,
    },
    {
      lat: -23.721662,
      lng: -46.538983,
      id: 9,
    },
    {
      lat: -23.568505,
      lng: -46.626549,
      id: 10,
    },
  ];

  useEffect(() => {
    Promise.all([
      api.get("/api/search/uf/space/SP", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllSpaces] = responses;
      const spaces = await AllSpaces.data;
      setData({ SpaceList: spaces });
    });
  }, [reload]);

  function onSubmit(data: searchBox) {
    setAuxWord(data.word);
    setModalShow(true);
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: keyMap, //Adicionando a minha key da api do google
  });

  if (loadError) {
    return <h1>Error Loading Maps</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading Maps</h1>;
  }
  function MarkerSelected(marker: any) {
    setModalCreateEvent(true);
    var auxId = marker.id;
    setTeste(auxId);
    console.log(teste);
  }
  if (modalCreateEvent && teste) {
    return (
      <ModalCreateEvents
        show={modalCreateEvent}
        onHide={() => {
          setModalCreateEvent(false);
          setReload(reload + 1);
        }}
        id={teste}
        onCreateEvent={() => {
          setModalCreateEvent(false);
          setReload(reload + 1);
        }}
      />
    );
  }
  return (
    <>
      <div
        className="row MyRowGoogleMaps"
        style={{ backgroundColor: "transparent", width: "100%", zIndex:10 }}
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

      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={center}
          options={options}
        >
          {data?.SpaceList.map((marker) => (
            <>
              {marker.status ? (
                <>
                  <Marker
                    key={marker.id}
                    position={{
                      lat: Number(marker.latitude),
                      lng: Number(marker.longitude),
                    }}
                    // onClick={() => {
                    //   MarkerSelected(marker);
                    // }}
                    icon={{
                      url: markerEvent,
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(15, 15),
                      scaledSize: new google.maps.Size(50, 50),
                    }}
                  />
                </>
              ) : (
                <>
                  <Marker
                    key={marker.id}
                    position={{
                      lat: Number(marker.latitude),
                      lng: Number(marker.longitude),
                    }}
                    onClick={() => {
                      MarkerSelected(marker);
                    }}
                    icon={{
                      url: markerSpace,
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(15, 15),
                      scaledSize: new google.maps.Size(50, 50),
                    }}
                  />{" "}
                </>
              )}
            </>
          ))}
        </GoogleMap>
      </div>

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.053074668!2d-46.876169012259254!3d-23.681530274331745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1605588640433!5m2!1spt-BR!2sbr"
        width="100%"
        style={{ border: 0, height: "100%" }}
        aria-hidden="false"
        title="MyMap"
      ></iframe> */}

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
