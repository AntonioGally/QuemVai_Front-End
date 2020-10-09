import React, { useEffect, useState } from "react";

import {
  MyTitleForm,
  MyTitleCard,
  SubtitleFavorites,
  MyTextCard,
} from "./styles";
import { Container, Row, Col } from "react-bootstrap";
import any_data from "../../img/icones/any_data.svg";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

import api from "../services/api";
import { Token } from "../services/auth";
import { FavoriteSpaceList } from "../@types";

interface Data {
  SpaceList: FavoriteSpaceList[];
}

const ModalConfigUserApp: React.FC = () => {
  const [reload, setReload] = React.useState(false);
  const [isSomething, setIsSomething] = useState(false);
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get("/api/favorites/get/place", {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushSpaceList] = responses;
      // eslint-disable-next-line
      PushSpaceList.data != "" ? setIsSomething(true) : setIsSomething(false);
      const informations = await PushSpaceList.data;
      setData({ SpaceList: informations });
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
      <MyTitleForm style={{ margin: "10% 0 2% 9%" }}>
        Lugares favoritos
      </MyTitleForm>  

      {!isSomething ? (
        <div style={{ textAlign: "center" }}>
          <img
            src={any_data}
            alt="Any Data"
            style={{ width: "60%", height: "60%" }}
          />
        </div>
      ) : (
        <Container fluid>
          <div className="WrapperCardHistoricUser">
            {data?.SpaceList.map((information) => {
              return (
                <div
                  key={information.Space_id}
                  className="MyCardHistoricUser"
                  style={{ padding: 0 }}
                >
                  <Row
                    className="justify-content-center"
                    style={{
                      margin: 0,
                      width: "100%",
                      paddingTop: "10px",
                      borderBottom: "1px solid #C4C4C4",
                    }}
                  >
                    <MyTitleCard>{information.nome}</MyTitleCard>
                  </Row>
                  <div style={{ padding: "15px" }}>
                    <Col>
                      <Row>
                        <SubtitleFavorites>Endereço</SubtitleFavorites>
                      </Row>
                      <Row>
                        <MyTextCard>{information.address}</MyTextCard>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <SubtitleFavorites>CEP</SubtitleFavorites>
                      </Row>
                      <Row>
                        <MyTextCard>{information.CEP}</MyTextCard>
                      </Row>
                    </Col>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      )}
    </div>
  );
};

export default ModalConfigUserApp;
