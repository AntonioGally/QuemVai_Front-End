import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Spinner } from "react-bootstrap";

import any_data4 from "../../../img/icones/any_data4.jpg";

import {
  MyTitleCard,
  SearchIconCard,
  PlaceIcon,
  MyTextCard,
  SportIconCard,
  TrashIcon,
} from "./styles";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { HistoricUserList } from "../../../@types";

interface Data {
  HistoricList: HistoricUserList[];
}

const AccountContent: React.FC = () => {
  const [reload, setReload] = React.useState(0);
  const [data, setData] = useState<Data>();
  const [isSomething, setIsSomething] = useState(false);

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
    <div style={{ marginTop: "30px" }}>
      {!data ? (
        <Spinner animation="border" />
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {!isSomething ? (
              <div style={{ textAlign: "center" }}>
                <img
                  src={any_data4}
                  alt="Any Data"
                  style={{ width: "60%", height: "60%" }}
                />
              </div>
            ) : (
              <>
                {data?.HistoricList.map((information) => (
                  <div
                    className="MyCardHistoricUser"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    key={information.id}
                  >
                    <Row
                      className="MyRowCardHistoricUser"
                      style={{ justifyContent: "space-between" }}
                    >
                      <MyTitleCard>{information.name_event}</MyTitleCard>
                      <Link to={`/MobileEventInfo/${information.id}`}>
                        <SearchIconCard />
                      </Link>
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
                      <div style={{ width: "10%" }}>
                        <img
                          src={information.photos}
                          alt="User"
                          className="MyImageCardHistoricUser"
                        />
                      </div>

                      <div style={{ width: "75%", marginLeft: "5%" }}>
                        <Row style={{ margin: 0 }}>
                          <span className="MySpanCardHistoricUser">por:</span>
                        </Row>
                        <Row style={{ margin: 0 }}>
                          <MyTextCard>{information.author}</MyTextCard>
                        </Row>
                      </div>
                      <div style={{ width: "10%" }}>
                        <TrashIcon />
                      </div>
                    </Row>
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AccountContent;
