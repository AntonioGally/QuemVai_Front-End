import React, { useState, useEffect } from "react";

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
} from "./styles";
import "./ModalSearch.css";
import { Modal, Row, Col } from "react-bootstrap";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { SearchMain } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

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
  }, [wordTyped]);

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

          <Modal.Body style={{ padding: "30px" }} className="BodyModalSearch">
            {existPeople ? (
              <div className="WrapperCardsModalSearch">
                <TitleCardWrapper>Pessoas</TitleCardWrapper>
                {data?.SearchList[1].Users.map((information) => (
                  <MyCard key={information.id}>
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
                        <AddUserIcon />
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
                          <Row style={{ alignItems: "center" }}>
                            <SubTitle>Nome: </SubTitle>
                            <TextContent>{information.name_event}</TextContent>
                          </Row>
                          <Row style={{ alignItems: "center" }}>
                            <SubTitle>Endereço: </SubTitle>
                            <TextContent>
                              {information.EventsOwnerSpaces.address}
                            </TextContent>
                          </Row>
                          <Row style={{ alignItems: "center" }}>
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
                        <ExitIcon />
                      </Col>
                    </Row>
                  </MyCard>
                ))}
              </div>
            ) : (
              ""
            )}

            {existSpaces ? (
              <div className="WrapperCardsModalSearch">
                <TitleCardWrapper>Espaços</TitleCardWrapper>
                {data?.SearchList[3].Spaces.map((information) => (
                  <MyCard key={information.id}>
                    <Row>
                      <Col lg={3} className="MyColCardModalSearch">
                        <CompassIcon style={{ fill: "var(--fontBlack)" }} />
                      </Col>

                      <Col lg={6}>
                        <Row style={{ alignItems: "center" }}>
                          <SubTitle>Nome: </SubTitle>
                          <TextContent>{information.name}</TextContent>
                        </Row>
                        <Row style={{ alignItems: "center" }}>
                          <SubTitle>Endereço: </SubTitle>
                          <TextContent>{information.address}</TextContent>
                        </Row>
                        <Row style={{ alignItems: "center" }}>
                          <SubTitle>CEP: </SubTitle>
                          <TextContent>{information.CEP}</TextContent>
                        </Row>
                      </Col>

                      <Col lg={3} className="MyColCardModalSearch">
                        <ExitIcon />
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
