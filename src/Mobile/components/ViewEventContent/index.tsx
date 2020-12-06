import React, { useEffect, useState } from "react";

import { Redirect } from "react-router-dom";
import { Row, Spinner, Col } from "react-bootstrap";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { EventsInfoByUf } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

import Buttons from "../../elements/Buttons";

import {
  ArrowBackIcon,
  ContainerSvg,
  Title,
  PlaceIcon,
  SubTitle,
  TextContent,
  CompassIcon,
  SportIconCard,
  CalendarIcon,
  CreatedContent,
} from "./styles";

export interface Props {
  idEvent: Number;
}

interface Data {
  EventsInfo: EventsInfoByUf;
}

const ViewEventContent: React.FC<Props> = ({ idEvent }) => {
  const [arrowBack, setArrowBack] = React.useState(false);
  const [data, setData] = useState<Data>();
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");
  const [createdAt, setCreatedAt] = useState("");

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

      var auxCreated = informations[0]["created_at"];
      const AuxDateCreated = parseISO(String(auxCreated));
      const formattedDate = format(
        AuxDateCreated,
        " dd'/'MM'/'yyyy', às ' HH:mm'h'",
        {
          locale: pt,
        }
      );
      setCreatedAt(formattedDate);
      setData({ EventsInfo: informations[0] });
    });
  }, [idEvent]);

  const handleDelete = async () => {
    var idSpace = data?.EventsInfo.id_space;
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

  if (arrowBack) {
    return <Redirect to="/MainAplication" />;
  }

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <div>
        <ArrowBackIcon onClick={() => setArrowBack(true)} />
      </div>
      <ContainerSvg>
        <img
          src={SvgModalConfigUser}
          alt="svg"
          style={{ width: "222px", height: "166px" }}
        />
      </ContainerSvg>
      <div
        className="row"
        style={{
          margin: "20px 0",
          alignItems: "center",
          padding: "10px",
          justifyContent: "flex-start",
        }}
      >
        <Title>{data?.EventsInfo.name_event}</Title>
      </div>
      {!data ? (
        <div className="text-center" style={{ marginTop: "5%" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div>
            <div style={{ margin: "15% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <PlaceIcon />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>Nome do espaço :</SubTitle>
                  </Row>
                  <Row>
                    <TextContent>{data?.EventsInfo.SpaceName}</TextContent>
                  </Row>
                </div>
              </Row>
            </div>

            <div style={{ margin: "10% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <CompassIcon />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>Endereço :</SubTitle>
                  </Row>
                  <Row>
                    <TextContent>{data?.EventsInfo.address}</TextContent>
                  </Row>
                </div>
              </Row>
            </div>

            <div style={{ margin: "10% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <SportIconCard />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>Esporte :</SubTitle>
                  </Row>
                  <Row>
                    <TextContent>{data?.EventsInfo.SportsName}</TextContent>
                  </Row>
                </div>
              </Row>
            </div>

            <div style={{ margin: "10% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <CalendarIcon />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>Criado em :</SubTitle>
                  </Row>
                  <Row>
                    <TextContent>{createdAt}</TextContent>
                  </Row>
                </div>
              </Row>
            </div>

            <div style={{ margin: "10% 0 5% 5%" }}>
              <CreatedContent>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <img src={data?.EventsInfo.photos} alt="user creator" />
                  <Col>
                    <Row>
                      <span>Criado por:</span>
                    </Row>
                    <Row style={{ alignItems: "center" }}>
                      <span className="userNameEventInfoMobile">
                        {data?.EventsInfo.author}
                      </span>{" "}
                      <span className="idUserNameEventInfoMobile">
                        {data?.EventsInfo.AuthorID}
                      </span>
                    </Row>
                  </Col>
                </Row>
              </CreatedContent>
            </div>

            <div
              className="text-danger"
              style={{
                padding: "10px",
                fontFamily: "Poppins",
              }}
            >
              {erros}
            </div>
            <div
              className="text-success"
              style={{
                padding: "10px",
                fontFamily: "Poppins",
              }}
            >
              {success}
            </div>
          </div>
          <Row
            style={{ margin: "0 5% 5% 0", justifyContent: "flex-end" }}
            onClick={handleDelete}
          >
            <Buttons text="Finalizar evento" fill />
          </Row>
        </>
      )}
    </div>
  );
};

export default ViewEventContent;
