import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import any_data4 from "../../img/icones/any_data4.jpg";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

import api from "../services/api";
import { Token } from "../services/auth";
import { HistoricUserList } from "../@types";

import {
  MyTitleForm,
  MyTitleCard,
  SearchIconCard,
  PlaceIcon,
  MyTextCard,
  SportIconCard,
  TrashIcon,
} from "./styles";
import "./ModalConfigStyles.css";

import ModalHistoricInfo from "./ModalHistoricInfo";
import ModalConfirmHistoricDelete from "./confirmation/ModalConfirmHistoricDelete";
interface Data {
  HistoricList: HistoricUserList[];
}

const ModalConfigUserApp: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalConfirmShow, setModalConfirmShow] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [data, setData] = useState<Data>();
  const [isSomething, setIsSomething] = useState(false);

  const [nameEvent, setNameEvent] = React.useState(String);
  const [idUser, setIdUser] = React.useState(Number);
  const [idHistoric, setIdHistoric] = React.useState(Number);
  const [nameUser, setNameUser] = React.useState(String);
  const [nameSpace, setNameSpace] = React.useState(String);
  const [endereco, setEndereco] = React.useState(String);
  const [nameSport, setNameSport] = React.useState(String);
  const [createdAt, setCreatedAt] = React.useState(Date);
  const [finishedAt, setFineshedAt] = React.useState(Date);

  useEffect(() => {
    Promise.all([
      api.get("/api/historic/get/all", {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushHistoricList] = responses;
      // eslint-disable-next-line
      PushHistoricList.data != ""
        ? setIsSomething(true)
        : setIsSomething(false);
      const informations = await PushHistoricList.data;
      setData({ HistoricList: informations });
    });
  }, [reload]);

  return (
    <div
      className="WrapperModalConfig HistoricWrapperModalConfig"
      style={{ width: "100%" }}
    >
      <div className="MySvgGerenciarUserModal">
        <img src={SvgModalConfigUser} alt="Art Top" />
      </div>
      <MyTitleForm style={{ margin: "10% 0 2% 9%" }}>Meu histórico</MyTitleForm>
      {!isSomething ? (
        <div style={{ textAlign: "center" }}>
          <img
            src={any_data4}
            alt="Any Data"
            style={{ width: "60%", height: "60%" }}
          />
        </div>
      ) : (
        <Container fluid>
          <div className="WrapperCardHistoricUser">
            {data?.HistoricList.map((information) => {
              return (
                <div key={information.id} className="MyCardHistoricUser">
                  <Row
                    className="MyRowCardHistoricUser"
                    style={{ justifyContent: "space-between" }}
                  >
                    <MyTitleCard>{information.name_event}</MyTitleCard>
                    <SearchIconCard
                      onClick={() => {
                        setModalShow(true);
                        setNameEvent(information.name_event);
                        setIdUser(information.AuthorID);
                        setIdHistoric(information.id);
                        setNameUser(information.author);
                        setNameSpace(information.SpaceName);
                        setEndereco(information.address);
                        setNameSport(information.SportsName);
                        setCreatedAt(information.created_at);
                        setFineshedAt(information.finished_at);
                      }}
                    />
                  </Row>
                  <Row className="MyRowCardHistoricUser">
                    <PlaceIcon />{" "}
                    <MyTextCard>{information.SpaceName}</MyTextCard>
                  </Row>
                  <Row className="MyRowCardHistoricUser">
                    <SportIconCard />{" "}
                    <MyTextCard>{information.SportsName}</MyTextCard>
                  </Row>
                  <Row className="MyRowCardHistoricUser">
                    <Col md={2} style={{ padding: 0 }}>
                      <img
                        src={information.photos}
                        alt="User"
                        className="MyImageCardHistoricUser"
                      />
                    </Col>

                    <Col md={8} style={{ padding: 0 }}>
                      <Row style={{ margin: 0 }}>
                        <span className="MySpanCardHistoricUser">por:</span>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <MyTextCard>{information.author}</MyTextCard>
                      </Row>
                    </Col>
                    <Col md={2}>
                      <TrashIcon
                        onClick={() => {
                          setModalConfirmShow(true);
                          setIdHistoric(information.id);
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        </Container>
      )}

      {modalShow ? (
        <ModalHistoricInfo
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            setReload(true);
          }}
          nameEvent={nameEvent}
          nameUser={nameUser}
          idUser={idUser}
          idHistoric={idHistoric}
          nameSpace={nameSpace}
          endereco={endereco}
          nameSport={nameSport}
          createdAt={createdAt}
          finishedAt={finishedAt}
        />
      ) : (
        ""
      )}
      {modalConfirmShow ? (
        <ModalConfirmHistoricDelete
          show={modalConfirmShow}
          onHide={() => {
            setModalConfirmShow(false);
            setReload(true);
          }}
          idHistoric={idHistoric}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalConfigUserApp;
