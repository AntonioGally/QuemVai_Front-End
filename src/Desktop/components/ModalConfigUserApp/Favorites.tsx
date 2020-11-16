import React, { useEffect, useState } from "react";

import {
  MyTitleForm,
  MyTitleCard,
  SubtitleFavorites,
  MyTextCard,
  TrashIcon,
  SearchIconCard,
  PlusIcon,
} from "./styles";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Spinner,
} from "react-bootstrap";
import any_data from "../../../img/icones/any_data.svg";
import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import ConfirmDeleteFavorite from "./confirmation/ConfirmDeleteFavorite";
import ModalSpaceInfo from "../ModalEventsUserApp/ModalSpaceInfo";
import ModalAddFavorite from "./ModalAddFavorite";
import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { FavoriteSpaceList } from "../../../@types";

interface Data {
  SpaceList: FavoriteSpaceList[];
}

const ModalConfigUserApp: React.FC = () => {
  const [reload, setReload] = React.useState(0);
  const [modalDeleteShow, setModalDeleteShow] = React.useState(false);
  const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  const [modalAddFavorite, setModalAddFavorite] = React.useState(false);
  const [auxID, setAuxID] = React.useState(Number);
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
      const informations = await PushSpaceList.data;
      if (Array(informations)[0].length === 0) {
        setIsSomething(false);
      } else {
        setIsSomething(true);
      }
      setData({ SpaceList: informations });
    });
  }, [reload]);

  const renderTooltipTrash = (props: any) => (
    <Tooltip id="trash-icon" {...props}>
      Excluir o local
    </Tooltip>
  );
  const renderTooltipSearch = (props: any) => (
    <Tooltip id="search-icon" {...props}>
      Informações sobre o local
    </Tooltip>
  );
  const renderTooltipAdd = (props: any) => (
    <Tooltip id="search-icon" {...props}>
      Adicionar aos favoritos
    </Tooltip>
  );

  if (modalSpaceInfo) {
    return (
      <ModalSpaceInfo
        show={modalSpaceInfo}
        onHide={() => setModalSpaceInfo(false)}
        id={auxID}
        fromFavorites={true}
      />
    );
  }
  if (modalAddFavorite) {
    return (
      <ModalAddFavorite
        show={modalAddFavorite}
        onHide={() => {
          setModalAddFavorite(false);
        }}
        alredyAdd={data?.SpaceList}
        addedPlace={() => {
          setReload(reload + 1);
        }}
      />
    );
  }

  return (
    <div
      className="WrapperModalConfig HistoricWrapperModalConfig"
      style={{ width: "100%" }}
    >
      <div className="MySvgGerenciarUserModal">
        <img src={SvgModalConfigUser} alt="Art Top" />
      </div>
      <Row className="MyRowFavorites">
        <MyTitleForm style={{ margin: 0 }}>Lugares favoritos</MyTitleForm>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={renderTooltipAdd}
        >
          <PlusIcon onClick={() => setModalAddFavorite(true)} />
        </OverlayTrigger>
      </Row>
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
                        <Row
                          style={{
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 250 }}
                            overlay={renderTooltipTrash}
                          >
                            <TrashIcon
                              style={{ marginRight: "20px" }}
                              onClick={() => {
                                setModalDeleteShow(true);
                                setAuxID(information.Space_id);
                              }}
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 250 }}
                            overlay={renderTooltipSearch}
                          >
                            <SearchIconCard
                              style={{ margin: 0, marginRight: "10px" }}
                              onClick={() => {
                                setModalSpaceInfo(true);
                                setAuxID(information.Space_id);
                              }}
                            />
                          </OverlayTrigger>
                        </Row>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          )}
        </>
      )}
      {modalDeleteShow ? (
        <ConfirmDeleteFavorite
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
      {/* {modalAddFavorite ? (
        <ModalAddFavorite
          show={modalAddFavorite}
          onHide={() => {
            setModalAddFavorite(false);
          }}
          alredyAdd={data?.SpaceList}
          addedPlace={() => {
            setReload(reload + 1);
          }}
        />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default ModalConfigUserApp;
