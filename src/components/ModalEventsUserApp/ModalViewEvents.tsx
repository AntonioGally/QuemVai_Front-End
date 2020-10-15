import React, { useEffect, useState } from "react";

import { Modal, Row, Col } from "react-bootstrap";
import {
  MyTitleViewEvents,
  PlaceIcon,
  MySpanModalViewEvent,
  TextInfoModalViewEvents,
  CompassIconViewEvents,
  SportIconCard,
  CalendarIcon,
  MyButtonFinishEvent,
} from "./styles";

import { EventsInfoByUf } from "../../@types";
import api from "../../services/api";
import { Token } from "../../services/auth";

import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

export interface Props {
  show: boolean;
  onHide: any;
  idEvent: Number;
  createdAt: string;
}

interface Data {
  EventsInfo: EventsInfoByUf[];
}

const ModalEventsUserApp: React.FC<Props> = ({
  show,
  onHide,
  idEvent,
  createdAt,
}) => {
  const [data, setData] = useState<Data>();
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");
  const [auxPhotos, setAuxPhotos] = useState("");
  useEffect(() => {
    Promise.all([
      api.get(`/api/event/get/find/${idEvent}`, {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushEventsInfo] = responses;

      const informations = await PushEventsInfo.data;

      setData({ EventsInfo: informations });
      var photos = PushEventsInfo.data.map((i: any) => {
        return i.photos;
      });
      setAuxPhotos(photos);
    });
  }, [idEvent]);

  const handleDelete = async () => {
    var idSpace = data?.EventsInfo.map((i) => {
      return i.id_space;
    });
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.put(
        `/api/event/finish/${idSpace}`,
        {},
        config
      );
      // eslint-disable-next-line
      if (response.status === 200 && response.data != "") {
        setSuccess("Evento finalizado com sucesso!");
        setErros("");
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao finalizar o evento");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal size="lg" centered show={show} animation={true} onHide={onHide}>
        <div className="WrapperModalHistoricInfo">
          <div className="MySvgGerenciarUserModal">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              style={{ borderTopRightRadius: "30px" }}
            />
          </div>

          <Modal.Body style={{ padding: "40px" }}>
            <Row
              style={{
                justifyContent: "space-between",
                margin: "0 0 5% ",
                alignItems: "center",
              }}
            >
              <MyTitleViewEvents>
                {data?.EventsInfo.map((i) => {
                  return i.name_event;
                })}
              </MyTitleViewEvents>
            </Row>
            <Row className="MyRowModalHistoricInfo">
              <PlaceIcon className="IconModalHistoricInfo" />
              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalViewEvent>Nome da quadra</MySpanModalViewEvent>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoModalViewEvents>
                    {data?.EventsInfo.map((i) => {
                      return i.SpaceName;
                    })}
                  </TextInfoModalViewEvents>
                </Row>
              </Col>
            </Row>

            <Row className="MyRowModalHistoricInfo">
              <CompassIconViewEvents className="IconModalHistoricInfo" />

              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalViewEvent>Endereço</MySpanModalViewEvent>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoModalViewEvents>
                    {data?.EventsInfo.map((i) => {
                      return i.address;
                    })}
                  </TextInfoModalViewEvents>
                </Row>
              </Col>
            </Row>

            <Row className="MyRowModalHistoricInfo">
              <SportIconCard className="IconModalHistoricInfo" />

              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalViewEvent>Esporte</MySpanModalViewEvent>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoModalViewEvents>
                    {data?.EventsInfo.map((i) => {
                      return i.SportsName;
                    })}
                  </TextInfoModalViewEvents>
                </Row>
              </Col>
            </Row>

            <Row className="MyRowModalHistoricInfo">
              <CalendarIcon className="IconModalHistoricInfo" />

              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalViewEvent>Criado em</MySpanModalViewEvent>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoModalViewEvents>{createdAt}</TextInfoModalViewEvents>
                </Row>
              </Col>
            </Row>

            <Row className="MyRowModalHistoricInfo">
              <img
                src={auxPhotos}
                alt="User"
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />

              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalViewEvent>Por:</MySpanModalViewEvent>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoModalViewEvents>
                    {data?.EventsInfo.map((i) => {
                      return i.author;
                    })}
                  </TextInfoModalViewEvents>
                </Row>
              </Col>
            </Row>
            <div
              className="text-danger"
              style={{
                padding: "10px",
                fontFamily: "Poppins",
                fontSize: "18xp",
              }}
            >
              {erros}
            </div>
            <div
              className="text-success"
              style={{
                padding: "10px",
                fontFamily: "Poppins",
                fontSize: "18xp",
              }}
            >
              {success}
            </div>
            {success === "Evento finalizado com sucesso!" ? (
              <MyButtonFinishEvent
                style={{ marginTop: "20px" }}
                onClick={onHide}
              >
                Fechar
              </MyButtonFinishEvent>
            ) : (
              ""
            )}

            <Row
              style={{ margin: "10% 0 0 0", justifyContent: "space-between" }}
            >
              <div>Participantes</div>
              <div>
                <MyButtonFinishEvent onClick={handleDelete}>
                  Finalizar evento
                </MyButtonFinishEvent>
              </div>
            </Row>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEventsUserApp;
