import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { MySearchInput, SearchIcon, MyRow } from "./styles";
import { useForm } from "react-hook-form";
import "./styles.css";
import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

import markerSpace from "../../../img/icones/markerSpace.png";
import markerEvent from "../../../img/icones/markerEvent.png";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// import usePlacesAutoComplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

import { greenMap } from "./MapStyle";
import keyMap from "./KeyFolder/GoogleKey";

import ModalSearch from "../ModalSearch";
import ModalCreateEvents from "../ModalEventsUserApp/ModalCreateEvents";
import ModalViewEvents from "../ModalEventsUserApp/ModalViewEvents";

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
  const [auxIdEvent, setAuxIdEvent] = React.useState(0);
  const [modalViewEvents, setModalViewEvents] = React.useState(false);
  const [finalDate, setFinalDate] = React.useState("");

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
  }
  const HandleEvent = async (marker: any) => {
    var id_space = marker.id;

    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.get("/api/event/get/all", config);

      // eslint-disable-next-line
      if (response.status === 200) {
        for (let count in response.data) {
          if (response.data[count]["id_space"] === id_space) {
            setAuxIdEvent(response.data[count]["Id_Event"]);
            const AuxDate = parseISO(
              String(response.data[count]["created_at"])
            );

            const formattedDate = format(
              AuxDate,
              "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
              {
                locale: pt,
              }
            );
            setFinalDate(formattedDate);
            setModalViewEvents(true);
          }
        }
      }
      if (response.status === 400) {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="row MyRowGoogleMaps"
        style={{ backgroundColor: "transparent", width: "100%", zIndex: 10 }}
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
                    onClick={() => {
                      HandleEvent(marker);
                    }}
                    icon={{
                      url: markerEvent,
                      origin: new google.maps.Point(0, 0),
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
      {modalCreateEvent && teste ? (
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
      ) : (
        ""
      )}
      {modalViewEvents ? (
        <ModalViewEvents
          show={modalViewEvents}
          onHide={() => setModalViewEvents(false)}
          idEvent={auxIdEvent}
          createdAt={finalDate}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default GoogleMaps;
