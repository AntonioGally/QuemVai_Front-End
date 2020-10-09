import React from "react";

import { Modal, Row, Col } from "react-bootstrap";
import ModalListSpace from "./ModalListSpace";
import "./ModalEventsUserApp.css";

export interface Props {
  show: boolean;
  onHide: any;
}

const ModalEventsUserApp: React.FC<Props> = ({ show, onHide }) => {
  const [modalListSpace, setModalListSpace] = React.useState(false);
  if (modalListSpace) {
    return (
      <ModalListSpace
        show={modalListSpace}
        onHide={() => {
          setModalListSpace(false);
          onHide()
        }}
      />
    );
  }
  return (
    <div>
      <Modal
        dialogClassName="MyModalEventsQuestion"
        centered
        show={show}
        onHide={onHide}
      >
        <Modal.Body style={{ padding: 0, overflow: "hidden" }}>
          <p style={{ padding: 20, textAlign: "center", fontSize: "24px" }}>
            Você deseja <span style={{ color: "var(--primary)" }}>criar</span>{" "}
            um evento
            <br /> ou <br /> quer{" "}
            <span style={{ color: "var(--buttonFill)" }}>econtrar</span> um?
          </p>
          <Row style={{ width: "100%", margin: 0 }}>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div
                className="BackButtonConfirmation"
                style={{ fontSize: "20px" }}
              >
                Encontrar
              </div>
            </Col>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div
                className="AddButtonConfirmation"
                style={{ fontSize: "20px" }}
                onClick={() => setModalListSpace(true)}
              >
                Criar
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalEventsUserApp;
