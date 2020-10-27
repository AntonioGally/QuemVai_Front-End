import React, { useState, useEffect } from "react";
import {
  ArrowBackIcon,
  TitleCardWrapper,
  MyCard,
  CompassIcon,
  SubTitle,
  TextContent,
  ExitIcon,
  SearchIcon,
} from "./styles";

import ModalSpaceInfo from "../ModalEventsUserApp/ModalSpaceInfo";
import ModalCreateEvents from "../ModalEventsUserApp/ModalCreateEvents";

import { Modal, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";
import { SportsFilter } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
  nameSport: String;
}

interface DataSportsInfo {
  SportsList: SportsFilter[];
}

const ModalSearch: React.FC<Props> = ({ show, onHide, nameSport }) => {
  const [auxId, setAuxId] = useState(Number);
  const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  const [modalCreateEvents, setModalCreateEvents] = React.useState(false);
  const [data, setData] = useState<DataSportsInfo>();

  useEffect(() => {
    Promise.all([
      api.get("/api/search/uf/sport/SP", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushSportsList] = responses;
      const response = await PushSportsList.data;
      var sportsFilter = [] as any;
      setData({ SportsList: sportsFilter }); //limpando o array
      if (PushSportsList.status === 200) {
        console.log(response);
        console.log(nameSport);
        var count = 0;
        while (count < response.length) {
          if (response[count]["Name_Sport"] === nameSport) {
            sportsFilter.push(response[count]);
            count += 1;
          } else {
            count += 1;
          }
        }
        setData({ SportsList: sportsFilter });
      }
    });
  }, [nameSport]);

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

  return (
    <div>
      <Modal size="lg" show={show} onHide={onHide} animation={true} centered>
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
          <Modal.Body style={{ padding: "30px" }} className="BodyModalSearch">
            <div className="WrapperCardsModalSearch">
              <TitleCardWrapper>Espaços com {nameSport}</TitleCardWrapper>
              {data?.SportsList.map((information) => (
                <MyCard key={information.Space_id}>
                  <Row>
                    <Col lg={3} className="MyColCardModalSearch">
                      <CompassIcon style={{ fill: "var(--fontBlack)" }} />
                    </Col>

                    <Col lg={6}>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>Nome: </SubTitle>
                        <TextContent>{information.Space_name}</TextContent>
                      </Row>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>Endereço: </SubTitle>
                        <TextContent>{information.Space_address}</TextContent>
                      </Row>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>CEP: </SubTitle>
                        <TextContent>{information.Space_CEP}</TextContent>
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
                            setAuxId(information.Space_id);
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
                            setAuxId(information.Space_id);
                          }}
                        />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                </MyCard>
              ))}
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSearch;
