import React, { useEffect, useState } from "react";

import { Modal, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  ArrowBackIcon,
  MyTitleForm,
  WrapperCardAddFavorite,
  CardsAddFavorite,
  CompassIconFavorite,
  TextContentFavorite,
  SearchSpaceIconFavorite,
  StarSpaceIconFavorie,
  MyButtonAddFavorite,
} from "./styles";
import "./ModalConfigStyles.css";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import ModalSpaceInfo from "../ModalEventsUserApp/ModalSpaceInfo";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { ListSpaceByUF } from "../../../@types";

export interface Props {
  show: boolean;
  onHide: any;
  alredyAdd: any;
  addedPlace?: any;
}

interface Data {
  SpaceList: ListSpaceByUF[];
}

const ModalConfigUserApp: React.FC<Props> = ({
  show,
  onHide,
  alredyAdd,
  addedPlace,
}) => {
  const [data, setData] = useState<Data>();
  const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  const [auxId, setAuxId] = React.useState(Number);
  const renderTooltipSpaceInfo = (props: any) => (
    <Tooltip id="button-tooltip_spaceInfo" {...props}>
      Informações do local
    </Tooltip>
  );
  const renderTooltipStarIcon = (props: any) => (
    <Tooltip id="button-tooltip_spaceInfo" {...props}>
      Favoritar espaço
    </Tooltip>
  );

  useEffect(() => {
    Promise.all([
      api.get("/api/search/uf/space/SP", {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushSpacesList] = responses;
      const informations = await PushSpacesList.data;
      var aux_list = informations as [];
      var aux_alredy_add = alredyAdd as [];

      if (aux_alredy_add.length === 0) {
        setData({ SpaceList: informations });
      } else {
        for (let it2 in aux_alredy_add) {
          for (let it1 in informations) {
            if (alredyAdd[it2]["Space_id"] === informations[it1]["id"]) {
              aux_list.splice(it1 as any, 1);
            }
          }
        }
        setData({ SpaceList: aux_list });
      }
    });
  }, [alredyAdd]);
  const handleStar = async (id: number) => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.post(
        `/api/favorites/add/place/${id}`,
        {},
        config
      );
      if (response.data["Favorite Place added"] && response.status === 200) {
        addedPlace();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (modalSpaceInfo) {
    return (
      <ModalSpaceInfo
        show={modalSpaceInfo}
        onHide={() => setModalSpaceInfo(false)}
        id={auxId}
      />
    );
  }

  return (
    <div>
      <Modal centered size="lg" animation={true} show={show} onHide={onHide}>
        <div className="WrapperModalAddFavorite">
          <div className="MySvgGerenciarUserModal">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              width="100%"
              style={{ borderTopLeftRadius: "30px" }}
            />
          </div>
          <div style={{ margin: "3% 0 0 3%" }}>
            <ArrowBackIcon onClick={onHide} />
          </div>
          <Modal.Body style={{ padding: 30 }}>
            <MyTitleForm>Lugares disponíveis</MyTitleForm>
            <WrapperCardAddFavorite>
              {data?.SpaceList.map((information) => (
                <CardsAddFavorite key={information.id}>
                  <Row
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Col lg={2} md={4}>
                      <CompassIconFavorite />
                    </Col>

                    <Col lg={8} md={12}>
                      <Row style={{ margin: 0 }}>
                        <TextContentFavorite>
                          <span>Nome:</span> {information.name}
                        </TextContentFavorite>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <TextContentFavorite>
                          <span>Endereço:</span> {information.address}
                        </TextContentFavorite>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <TextContentFavorite>
                          <span>CEP:</span> {information.CEP}
                        </TextContentFavorite>
                      </Row>
                    </Col>

                    <Col lg={2} md={4}>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltipSpaceInfo}
                      >
                        <SearchSpaceIconFavorite
                          onClick={() => {
                            setAuxId(information.id);
                            setModalSpaceInfo(true);
                          }}
                        />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltipStarIcon}
                      >
                        <StarSpaceIconFavorie
                          onClick={() => handleStar(information.id)}
                        />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                </CardsAddFavorite>
              ))}
            </WrapperCardAddFavorite>
          </Modal.Body>
          <Modal.Footer>
            <MyButtonAddFavorite type="button" onClick={onHide}>
              Voltar
            </MyButtonAddFavorite>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default ModalConfigUserApp;
