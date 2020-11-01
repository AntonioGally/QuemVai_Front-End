import React, { useEffect } from "react";
import ModalSpaceInfo from "../ModalEventsUserApp/ModalSpaceInfo";

import "./ModalQuadras.css";

import { Modal, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

import {
  ArrowBackIcon,
  MyTitle,
  MyCard,
  SubTitle,
  TextContent,
  CompassIcon,
  SearchIcon,
} from "./styles";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { ListSpaceByUF } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
}
interface Data {
  SpaceList: ListSpaceByUF[];
}

const ModalQuadras: React.FC<Props> = ({ show, onHide }) => {
  const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  const [auxId, setAuxId] = React.useState(Number);
  const [data, setData] = React.useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get("/api/search/uf/space/SP", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllSpaces] = responses;
      const spaces = await AllSpaces.data;
      setData({ SpaceList: spaces });
    });
  }, []);

  const renderTooltipSearch = (props: any) => (
    <Tooltip id="search-icon" {...props}>
      Informações do espaço
    </Tooltip>
  );

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
      <Modal size="lg" show={show} onHide={onHide} centered animation={true}>
        <div className="WrapperModalQuadras">
          <div className="SvgModalQuadras">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              style={{ borderTopRightRadius: "30px" }}
            />
          </div>
          <div>
            <ArrowBackIcon onClick={onHide} />
          </div>
          <MyTitle>Espaços</MyTitle>
          {/* <div
            className="text-success"
            style={{
              fontFamily: "Poppins",
              fontSize: "25px",
              marginLeft: "9%",
            }}
          >
            {success}
          </div>
          <div
            className="text-danger"
            style={{
              fontFamily: "Poppins",
              fontSize: "25px",
              marginLeft: "9%",
            }}
          >
            {erros}
          </div> */}
          <Modal.Body style={{ padding: "30px" }} className="BodyModalQuadras">
            <div className="WrapperCardsModalQuadras Scroll_Quadras">
              {data?.SpaceList.map((information) => (
                <MyCard key={information.id}>
                  <Row>
                    <Col lg={3} className="MyColCardModalQuadras">
                      <CompassIcon style={{ fill: "var(--fontBlack)" }} />
                    </Col>

                    <Col lg={6}>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>Nome: </SubTitle>
                        <TextContent>{information.name}</TextContent>
                      </Row>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>Endereço: </SubTitle>
                        <TextContent>{information.address}</TextContent>
                      </Row>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>CEP: </SubTitle>
                        <TextContent>{information.CEP}</TextContent>
                      </Row>
                    </Col>

                    <Col lg={3} className="MyColCardModalQuadras">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltipSearch}
                      >
                        <SearchIcon
                          style={{ width: "48%", height: "48%" }}
                          onClick={() => {
                            setModalSpaceInfo(true);
                            setAuxId(information.id);
                          }}
                        />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                </MyCard>
              ))}
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalQuadras;
