import React from "react";

import { Modal, Row, Col } from "react-bootstrap";
import "./ModalConfigStyles.css";

import QuemVaiLogo2 from "../../img/logo/QuemVaiLogo2.png";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";
import {
  MyTitleModalHistoric,
  UserNameHistoricInfo,
  PlaceIcon,
  TextInfoHistoricInfo,
  MySpanModalHistoricInfo,
  CompassIcon,
  SportIconCard,
  CalendarIcon,
  TimeIcon,
} from "./styles";

export interface Props {
  show: boolean;
  onHide: any;
  idHistoric: number;
}

const ModalConfigUserApp: React.FC<Props> = ({ show, onHide, idHistoric }) => {
  return (
    <div>
      <Modal
        dialogClassName="MyModalHistoricInfo"
        centered
        animation={true}
        show={show}
        onHide={onHide}
      >
        <div className="WrapperModalHistoricInfo">
          <div className="MySvgGerenciarUserModal">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              style={{ borderTopRightRadius: "30px" }}
            />
          </div>
          <Modal.Body style={{ padding: "21px" }}>
            <Row
              style={{
                justifyContent: "space-between",
                margin: "0 0 5% ",
                alignItems: "center",
              }}
            >
              <MyTitleModalHistoric>Futebol Foda</MyTitleModalHistoric>

              <div style={{ display: "flex" }}>
                <img
                  src={QuemVaiLogo2}
                  alt="User"
                  className="UserImageModalHistoricInfo"
                />
                <Col>
                  <Row style={{ margin: 0 }}>
                    <span className="UserSpanHistoricInfo">por</span>
                  </Row>
                  <Row style={{ margin: 0 }}>
                    <UserNameHistoricInfo>
                      Tonhão {idHistoric}
                    </UserNameHistoricInfo>
                  </Row>
                </Col>
              </div>
            </Row>
            <Row className="MyRowModalHistoricInfo">
              <PlaceIcon className="IconModalHistoricInfo" />
              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalHistoricInfo>
                    Nome da quadra
                  </MySpanModalHistoricInfo>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoHistoricInfo>
                    Maddison Square Garden
                  </TextInfoHistoricInfo>
                </Row>
              </Col>
            </Row>
            <Row className="MyRowModalHistoricInfo">
              <CompassIcon className="IconModalHistoricInfo" />

              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalHistoricInfo>Endereço</MySpanModalHistoricInfo>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoHistoricInfo>
                    Rua do Obelisco, São Paulo
                  </TextInfoHistoricInfo>
                </Row>
              </Col>
            </Row>
            <Row className="MyRowModalHistoricInfo">
              <SportIconCard className="IconModalHistoricInfo" />

              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalHistoricInfo>Esporte</MySpanModalHistoricInfo>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoHistoricInfo>Basquete</TextInfoHistoricInfo>
                </Row>
              </Col>
            </Row>
            <Row className="MyRowModalHistoricInfo">
              <CalendarIcon className="IconModalHistoricInfo" />

              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalHistoricInfo>Criado em</MySpanModalHistoricInfo>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoHistoricInfo>01/07/2020</TextInfoHistoricInfo>
                </Row>
              </Col>
            </Row>
            <Row className="MyRowModalHistoricInfo">
              <TimeIcon className="IconModalHistoricInfo" />

              <Col style={{ width: "80%" }}>
                <Row style={{ margin: 0 }}>
                  <MySpanModalHistoricInfo>
                    Finalizado em
                  </MySpanModalHistoricInfo>
                </Row>
                <Row style={{ margin: 0 }}>
                  <TextInfoHistoricInfo>01/07/2020</TextInfoHistoricInfo>
                </Row>
              </Col>
            </Row>
            <Row className="MyRowModalHistoricInfo" style={{justifyContent:"flex-end"}}>
              <div className="ButtonDeletarHistoricInfo">Deletar</div>
            </Row>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalConfigUserApp;