import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Row, Col, Spinner } from "react-bootstrap";
import {
  ArrowBackIcon,
  ContainerSvg,
  TitleEvent,
  CreatedContent,
  PlaceIcon,
  SubTitle,
  TextContent,
  CompassIcon,
  SportIconCard,
  CalendarIcon,
  TimeIcon,
} from "./styles";

import Confirmation from "./Confirmation";
import Buttons from "../../elements/Buttons";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { HistoricInfoById } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

interface Data {
  HistoricInfo: HistoricInfoById;
}

const EventInfoContent: React.FC = () => {
  const { id_Event }: any = useParams();
  const [arrowBack, setArrowBack] = React.useState(false);
  const [data, setData] = useState<Data>();
  const [created, setCreated] = useState("");
  const [finalizated, setFinalizated] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get(`/api/historic/get/find/${id_Event}`, {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [HistoricInfo] = responses;
      const informations = await HistoricInfo.data;
      if (HistoricInfo.status === 200) {
        setIsValid(true);
        setData({ HistoricInfo: informations[0] });
        var aux_created = parseISO(String(informations[0]["created_at"]));
        var aux_finalizated = parseISO(String(informations[0]["finished_at"]));

        const formattedDateCreated = format(
          aux_created,
          " dd'/'MM'/'yyyy', às ' HH:mm'h'",
          {
            locale: pt,
          }
        );
        const formattedDateFineshed = format(
          aux_finalizated,
          " dd'/'MM'/'yyyy', às ' HH:mm'h'",
          {
            locale: pt,
          }
        );
        setCreated(formattedDateCreated);
        setFinalizated(formattedDateFineshed);
      }
      if (HistoricInfo.status !== 200) {
        setIsValid(false);
      }
    });
  }, [id_Event]);

  if (arrowBack) {
    return <Redirect to="/MobileManegementUser" />;
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
      {!data ? (
        <Spinner animation="border" />
      ) : (
        <>
          {isValid ? (
            <>
              <div>
                <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                  <Row style={{ margin: 0, alignItems: "center" }}>
                    <TitleEvent>{data?.HistoricInfo.name_event}</TitleEvent>
                    <CreatedContent>
                      <Row style={{ margin: 0, alignItems: "center" }}>
                        <img
                          src={data?.HistoricInfo.photos}
                          alt="user creator"
                        />
                        <Col>
                          <Row>
                            <span>Criado por:</span>
                          </Row>
                          <Row style={{ alignItems: "center" }}>
                            <span className="userNameEventInfoMobile">
                              {data?.HistoricInfo.author}
                            </span>{" "}
                            <span className="idUserNameEventInfoMobile">
                              #{data?.HistoricInfo.AuthorID}
                            </span>
                          </Row>
                        </Col>
                      </Row>
                    </CreatedContent>
                  </Row>
                </div>

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
                        <TextContent>
                          {data?.HistoricInfo.SpaceDescription}
                        </TextContent>
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
                        <TextContent>{data?.HistoricInfo.address}</TextContent>
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
                        <TextContent>
                          {data?.HistoricInfo.SportsName}
                        </TextContent>
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
                        <TextContent>{created}</TextContent>
                      </Row>
                    </div>
                  </Row>
                </div>
                <div style={{ margin: "10% 0 5% 5%" }}>
                  <Row style={{ margin: 0, alignItems: "center" }}>
                    <div style={{ width: "20%" }}>
                      <TimeIcon />
                    </div>
                    <div style={{ width: "80%" }}>
                      <Row>
                        <SubTitle>Finalizado em :</SubTitle>
                      </Row>
                      <Row>
                        <TextContent>{finalizated}</TextContent>
                      </Row>
                    </div>
                  </Row>
                </div>
                <div style={{ margin: "15% 10% 5% 5%" }}>
                  <Row
                    style={{ margin: 0, justifyContent: "flex-end" }}
                    onClick={() => setModalShow(true)}
                  >
                    <Buttons text="Deletar" />
                  </Row>
                </div>
              </div>
            </>
          ) : (
            <Redirect to="/MobileManegementUser" />
          )}
        </>
      )}
      {modalShow ? (
        <Confirmation
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
          onDelete={() => {
            setModalShow(false);
            setArrowBack(true);
          }}
          id={id_Event}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default EventInfoContent;
