import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

import QuemVaiLogo2 from "../../img/logo/QuemVaiLogo2.png";
import any_data4 from "../../img/icones/any_data4.jpg";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

import {
  MyTitleForm,
  MyTitleCard,
  SearchIconCard,
  PlaceIcon,
  MyTextCard,
  SportIconCard,
} from "./styles";
import "./ModalConfigStyles.css";

import ModalHistoricInfo from "./ModalHistoricInfo";

const ModalConfigUserApp: React.FC = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [modalShow, setModalShow] = React.useState(false);
  const [idHistoric, setIdHistoric] = React.useState(Number);
  
  return (
    <div
      className="WrapperModalConfig HistoricWrapperModalConfig"
      style={{ width: "100%" }}
    >
      <div className="MySvgGerenciarUserModal">
        <img src={SvgModalConfigUser} alt="Art Top" />
      </div>
      <MyTitleForm style={{ marginBottom: 0 }}>Meu histórico</MyTitleForm>
      <Container fluid>
        <div className="WrapperCardHistoricUser">
          {list.map((i) => {
            return (
              <div key={i} className="MyCardHistoricUser">
                <Row className="MyRowCardHistoricUser">
                  <MyTitleCard>Futebol Foda</MyTitleCard>
                  <SearchIconCard
                    onClick={() => {
                      setModalShow(true);
                      setIdHistoric(i);
                    }}
                  />
                </Row>

                <Row className="MyRowCardHistoricUser">
                  <PlaceIcon /> <MyTextCard>Maddinson Square Garden</MyTextCard>
                </Row>
                <Row className="MyRowCardHistoricUser">
                  <SportIconCard /> <MyTextCard>Basquete</MyTextCard>
                </Row>
                <Row className="MyRowCardHistoricUser">
                  <img
                    src={QuemVaiLogo2}
                    alt="User"
                    className="MyImageCardHistoricUser"
                  />
                  <Col>
                    <Row style={{ margin: 0 }}>
                      <span className="MySpanCardHistoricUser">por:</span>
                    </Row>
                    <Row style={{ margin: 0 }}>
                      <MyTextCard>Tonhão {i}</MyTextCard>
                    </Row>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </Container>
      {modalShow ? (
        <ModalHistoricInfo
          show={modalShow}
          onHide={() => setModalShow(false)}
          idHistoric={idHistoric}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalConfigUserApp;
