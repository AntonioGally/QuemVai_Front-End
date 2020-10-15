import React from "react";

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

export interface Props {
  show: boolean;
  onHide: any;
}

const ModalConfigUserApp: React.FC<Props> = ({ show, onHide }) => {
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
  const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
              {lista.map((information) => (
                <CardsAddFavorite key={information}>
                  <Row
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Col lg={2} md={4}>
                      <CompassIconFavorite />
                    </Col>
                    <Col lg={8} md={12}>
                      <Row style={{ margin: 0 }}>
                        <TextContentFavorite>
                          <span>Nome:</span> {information}
                        </TextContentFavorite>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <TextContentFavorite>
                          <span>Endereço:</span> {information}
                        </TextContentFavorite>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <TextContentFavorite>
                          <span>CEP:</span> {information}
                        </TextContentFavorite>
                      </Row>
                    </Col>

                    <Col lg={2} md={4}>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltipSpaceInfo}
                      >
                        <SearchSpaceIconFavorite />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltipStarIcon}
                      >
                        <StarSpaceIconFavorie />
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
