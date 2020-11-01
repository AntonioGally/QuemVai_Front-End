import React, { useState, useEffect } from "react";

import ModalSpaceInfo from "../ModalEventsUserApp/ModalSpaceInfo";
import ModalCreateEvents from "../ModalEventsUserApp/ModalCreateEvents";

import {
  MyTitle,
  TitleCardWrapper,
  MyCard,
  NameUser,
  AddUserIcon,
  SubTitle,
  TextContent,
  WhistleIcon,
  VolleyIcon,
  ExitIcon,
  CompassIcon,
  ArrowBackIcon,
  SearchIcon,
} from "./styles";
import "./ModalSearch.css";
import { Modal, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { SearchMain } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

import FilteringSports from "./FilteringSports";

interface Data {
  SearchList: SearchMain[];
}

export interface Props {
  show: boolean;
  onHide: any;
  wordTyped: any;
}

const ModalSearch: React.FC<Props> = ({ show, onHide, wordTyped }) => {
  const [data, setData] = useState<Data>();
  const [existPeople, setExistPeople] = React.useState(false);
  const [existEvents, setExistEvents] = React.useState(false);
  const [existSports, setExistSports] = React.useState(false);
  const [existSpaces, setExistSpaces] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [erros, setErros] = React.useState("");
  const [reload, setReload] = React.useState(Number);

  const [modalSportsShow, setModalSportsShow] = useState(false);
  const [auxNameSport, setAuxNmaeSport] = useState("");

  const [auxId, setAuxId] = useState(Number);
  const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  const [modalCreateEvents, setModalCreateEvents] = React.useState(false);

  useEffect(() => {
    Promise.all([
      api.post(
        "/api/search/main",
        { word: wordTyped },
        {
          headers: { "x-auth-token": Token() },
        }
      ),
    ]).then(async (responses) => {
      const [PushSearchList] = responses;
      const response = await PushSearchList.data;

      if (Array(response[0]["Sports"])[0].length > 0) {
        setExistSports(true);
      }
      if (Array(response[1]["Users"])[0].length > 0) {
        setExistPeople(true);
      }
      if (Array(response[2]["Events"])[0].length > 0) {
        setExistEvents(true);
      }
      if (Array(response[3]["Spaces"])[0].length > 0) {
        setExistSpaces(true);
      }

      setData({ SearchList: response });
    });
  }, [wordTyped, reload]);

  const addClickHandle = async (idUser: number) => {
    var config = {
      headers: { "x-auth-token": Token() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };
    try {
      const response = await api.post(`/api/user/invite/${idUser}`, {}, config);
      if (response.status === 200 && response.data["Request sent"]) {
        setSuccess("Solicitação enviada com sucesso!");
        setReload(reload + 1);
        setErros("");
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
      if (response.status === 406 && response.data["Request already sended"]) {
        setErros("Parece que a solicitação já foi enviada");
      }
      if (response.status === 422 && response.data["Equals id's"]) {
        setErros("Este é o seu ID");
      }
      if (response.status === 204) {
        setErros("Esse usuário não existe");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderTooltipAdd = (props: any) => (
    <Tooltip id="filter-icon" {...props}>
      Adicionar usuário
    </Tooltip>
  );
  const renderTooltipSearch = (props: any) => (
    <Tooltip id="search-icon" {...props}>
      Informações do espaço
    </Tooltip>
  );
  const renderTooltipExitSpace = (props: any) => (
    <Tooltip id="Exit-icon" {...props}>
      Criar evento nesse espaço
    </Tooltip>
  );
  const renderTooltipExitSport = (props: any) => (
    <Tooltip id="search-icon" {...props}>
      Filtrar por esse esporte
    </Tooltip>
  );

  if (modalSportsShow) {
    return (
      <FilteringSports
        show={modalSportsShow}
        onHide={() => setModalSportsShow(false)}
        nameSport={auxNameSport}
      />
    );
  }

  if (modalSpaceInfo) {
    return (
      <ModalSpaceInfo
        show={modalSpaceInfo}
        onHide={() => setModalSpaceInfo(false)}
        id={auxId}
      />
    );
  }
  if (modalCreateEvents) {
    return (
      <ModalCreateEvents
        show={modalCreateEvents}
        onHide={() => setModalCreateEvents(false)}
        onCreateEvent={() => {
          setModalCreateEvents(false);
          onHide();
        }}
        id={auxId}
      />
    );
  }

  return (
    <div>
      <Modal size="lg" centered animation={true} show={show} onHide={onHide}>
        <div className="WrapperModalSearch">
          <div className="SvgModalSearch">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              style={{ borderTopRightRadius: "30px" }}
            />
          </div>
          <div>
            <ArrowBackIcon onClick={onHide} />
          </div>
          <MyTitle>Pesquisa</MyTitle>
          <div
            className="text-success"
            style={{
              fontFamily: "Poppins",
              fontSize: "25px",
              marginLeft: "9%",
            }}
          >
            {success}
          </div>
          <div
            className="text-danger"
            style={{
              fontFamily: "Poppins",
              fontSize: "25px",
              marginLeft: "9%",
            }}
          >
            {erros}
          </div>

          <Modal.Body style={{ padding: "30px" }} className="BodyModalSearch">
            {existPeople ? (
              <div className="WrapperCardsModalSearch MyScroll">
                <TitleCardWrapper>Pessoas</TitleCardWrapper>

                {data?.SearchList[1].Users.map((information) => (
                  <MyCard
                    key={information.id}
                    style={{
                      display: `${
                        Number(
                          information.idFriendUser.map((i) => {
                            return i.id_Friend;
                          })
                        ) === information.id &&
                        String(
                          information.idFriendUser.map((i) => {
                            return i.status_friendships;
                          })
                        ) !== ""
                          ? "none"
                          : "block"
                      }`,
                    }}
                  >
                    <Row>
                      <Col lg={3} className="MyColCardModalSearch">
                        <img
                          src={information.photos}
                          alt="User"
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                          }}
                        />
                      </Col>
                      <Col
                        lg={6}
                        className="MyColCardModalSearch"
                        style={{ justifyContent: "flex-start" }}
                      >
                        <NameUser>{information.username}</NameUser>
                      </Col>
                      <Col lg={3} className="MyColCardModalSearch">
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltipAdd}
                        >
                          <AddUserIcon
                            onClick={() => addClickHandle(information.id)}
                          />
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </MyCard>
                ))}
              </div>
            ) : (
              ""
            )}
            {existEvents ? (
              <div className="WrapperCardsModalSearch">
                <TitleCardWrapper>Eventos</TitleCardWrapper>
                {data?.SearchList[2].Events.map((information) => (
                  <MyCard key={information.id}>
                    <Row>
                      <Col lg={3} className="MyColCardModalSearch">
                        <WhistleIcon style={{ fill: "var(--fontBlack)" }} />
                      </Col>
                      <Col
                        lg={9}
                        className="MyColCardModalSearch"
                        style={{ justifyContent: "flex-start" }}
                      >
                        <div>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>Nome: </SubTitle>
                            <TextContent>{information.name_event}</TextContent>
                          </Row>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>Endereço: </SubTitle>
                            <TextContent>
                              {information.EventsOwnerSpaces.address}
                            </TextContent>
                          </Row>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>CEP: </SubTitle>
                            <TextContent>
                              {information.EventsOwnerSpaces.CEP}
                            </TextContent>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </MyCard>
                ))}
              </div>
            ) : (
              ""
            )}

            {existSports ? (
              <div className="WrapperCardsModalSearch">
                <TitleCardWrapper>Esportes</TitleCardWrapper>
                {data?.SearchList[0].Sports.map((information) => (
                  <MyCard key={information.id}>
                    <Row>
                      <Col lg={3} className="MyColCardModalSearch">
                        <VolleyIcon style={{ fill: "var(--fontBlack)" }} />
                      </Col>

                      <Col
                        lg={6}
                        className="MyColCardModalSearch"
                        style={{ justifyContent: "flex-start" }}
                      >
                        <NameUser>{information.name}</NameUser>
                      </Col>

                      <Col lg={3} className="MyColCardModalSearch">
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltipExitSport}
                        >
                          <ExitIcon
                            onClick={() => {
                              setModalSportsShow(true);
                              setAuxNmaeSport(information.name);
                            }}
                          />
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </MyCard>
                ))}
              </div>
            ) : (
              ""
            )}

            {existSpaces ? (
              <div className="WrapperCardsModalSearch MyScroll">
                <TitleCardWrapper>Espaços</TitleCardWrapper>
                {data?.SearchList[3].Spaces.map((information) => (
                  <MyCard
                    key={information.id}
                    style={{
                      display: `${!information.status ? "block" : "none"}`,
                    }}
                  >
                    <Row>
                      <Col lg={3} className="MyColCardModalSearch">
                        <CompassIcon style={{ fill: "var(--fontBlack)" }} />
                      </Col>

                      <Col lg={6}>
                        <Row style={{ alignItems: "center", margin: 0 }}>
                          <SubTitle>Nome: </SubTitle>
                          <TextContent>{information.name}</TextContent>
                        </Row>
                        <Row style={{ alignItems: "center", margin: 0 }}>
                          <SubTitle>Endereço: </SubTitle>
                          <TextContent>{information.address}</TextContent>
                        </Row>
                        <Row style={{ alignItems: "center", margin: 0 }}>
                          <SubTitle>CEP: </SubTitle>
                          <TextContent>{information.CEP}</TextContent>
                        </Row>
                      </Col>

                      <Col lg={3} className="MyColCardModalSearch">
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltipExitSpace}
                        >
                          <ExitIcon
                            style={{ width: "48%", height: "48%" }}
                            onClick={() => {
                              setModalCreateEvents(true);
                              setAuxId(information.id);
                            }}
                          />
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltipSearch}
                        >
                          <SearchIcon
                            style={{ width: "48%", height: "48%" }}
                            onClick={() => {
                              setModalSpaceInfo(true);
                              setAuxId(information.id);
                            }}
                          />
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </MyCard>
                ))}
              </div>
            ) : (
              ""
            )}
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSearch;
