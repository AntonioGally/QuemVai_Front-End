import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Spinner } from "react-bootstrap";
import any_data from "../../../img/icones/any_data.svg";

import {
  MyTitleCard,
  SearchIconCard,
  MyTextCard,
  TrashIcon,
  SubtitleFavorites,
  AddIcon,
} from "./styles";

import DeleteFavorites from "./Confirmation/DeleteFavorites";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { FavoriteSpaceList } from "../../../@types";

interface Data {
  SpaceList: FavoriteSpaceList[];
}

const AccountContent: React.FC = () => {
  const [reload, setReload] = React.useState(0);
  const [modalDeleteShow, setModalDeleteShow] = React.useState(false);
  // const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  // const [modalAddFavorite, setModalAddFavorite] = React.useState(false);
  const [auxID, setAuxID] = React.useState(Number);
  const [isSomething, setIsSomething] = useState(false);
  const [data, setData] = useState<Data>();
  var fromFavorites = "favorites";
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
      const informations = await PushSpaceList.data;
      if (Array(informations)[0].length === 0) {
        setIsSomething(false);
      } else {
        setIsSomething(true);
      }
      setData({ SpaceList: informations });
    });
  }, [reload]);
  return (
    <div style={{ marginTop: "30px" }}>
      <div
        className="justify-content-center row"
        style={{ margin: 0, alignContent: "center" }}
      >
        <h4>Adicionar</h4>
        <AddIcon />
      </div>
      {!data ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          {!isSomething ? (
            <div style={{ textAlign: "center" }}>
              <img
                src={any_data}
                alt="Any Data"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {data?.SpaceList.map((information) => (
                <div
                  key={information.Space_id}
                  className="MyCardHistoricUser"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: 0,
                  }}
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
                    <Row
                      style={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <TrashIcon
                        style={{ marginRight: "20px" }}
                        onClick={() => {
                          setModalDeleteShow(true);
                          setAuxID(information.Space_id);
                        }}
                      />
                      <Link
                        to={`/MobileSpaceInfo/${information.Space_id}/${fromFavorites}`}
                      >
                        <SearchIconCard
                          style={{ margin: 0, marginRight: "10px" }}
                        />
                      </Link>
                    </Row>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {modalDeleteShow ? (
        <DeleteFavorites
          show={modalDeleteShow}
          onHide={() => {
            setModalDeleteShow(false);
            setReload(reload + 1);
          }}
          idSpace={auxID}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AccountContent;
