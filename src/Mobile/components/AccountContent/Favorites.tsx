import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  MyTitleCard,
  SearchIconCard,
  MyTextCard,
  TrashIcon,
  SubtitleFavorites,
} from "./styles";

const AccountContent: React.FC = () => {
  var aux_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {aux_list.map((informations) => (
          <div
            key={informations}
            className="MyCardHistoricUser"
            style={{ marginLeft: "auto", marginRight: "auto", padding: 0 }}
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
              {/* <MyTitleCard>{information.nome}</MyTitleCard> */}
              <MyTitleCard>Lugar tal</MyTitleCard>
            </Row>
            <div style={{ padding: "15px" }}>
              <Col>
                <Row>
                  <SubtitleFavorites>Endereço</SubtitleFavorites>
                </Row>
                <Row>
                  {/* <MyTextCard>{information.address}</MyTextCard> */}
                  <MyTextCard>Rua obelisco</MyTextCard>
                </Row>
              </Col>
              <Col>
                <Row>
                  <SubtitleFavorites>CEP</SubtitleFavorites>
                </Row>
                <Row>
                  {/* <MyTextCard>{information.CEP}</MyTextCard> */}
                  <MyTextCard>123456789</MyTextCard>
                </Row>
              </Col>
              <Row
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <TrashIcon style={{ marginRight: "20px" }} />

                <SearchIconCard style={{ margin: 0, marginRight: "10px" }} />
              </Row>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountContent;
