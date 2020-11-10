import React from "react";
import { Row } from "react-bootstrap";

import {
  MyTitleCard,
  SearchIconCard,
  PlaceIcon,
  MyTextCard,
  SportIconCard,
  TrashIcon,
} from "./styles";

const AccountContent: React.FC = () => {
  var aux_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {aux_list.map((informations) => (
          <div
            className="MyCardHistoricUser"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            key={informations}
          >
            <Row
              className="MyRowCardHistoricUser"
              style={{ justifyContent: "space-between" }}
            >
              {/* <MyTitleCard>{information.name_event}</MyTitleCard> */}
              <MyTitleCard>Evento tal</MyTitleCard>
              <SearchIconCard />
            </Row>
            <Row className="MyRowCardHistoricUser">
              {/* <PlaceIcon /> <MyTextCard>{information.SpaceName}</MyTextCard> */}
              <PlaceIcon /> <MyTextCard>Rua tal tal</MyTextCard>
            </Row>
            <Row className="MyRowCardHistoricUser">
              {/* <SportIconCard /> <MyTextCard>{information.SportsName}</MyTextCard> */}
              <SportIconCard /> <MyTextCard>Basquete</MyTextCard>
            </Row>
            <Row className="MyRowCardHistoricUser">
              <div style={{ width: "10%" }}>
                <img
                  src="https://quemvai.blob.core.windows.net/fotos/d88a262f-df82-9aca-0dcd-e2b59e542a5a.jpg"
                  alt="User"
                  className="MyImageCardHistoricUser"
                />
              </div>

              <div style={{ width: "75%", marginLeft: "5%" }}>
                <Row style={{ margin: 0 }}>
                  <span className="MySpanCardHistoricUser">por:</span>
                </Row>
                <Row style={{ margin: 0 }}>
                  {/* <MyTextCard>{information.author}</MyTextCard> */}
                  <MyTextCard>Antônio Gally</MyTextCard>
                </Row>
              </div>
              <div style={{ width: "10%" }}>
                <TrashIcon />
              </div>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountContent;
