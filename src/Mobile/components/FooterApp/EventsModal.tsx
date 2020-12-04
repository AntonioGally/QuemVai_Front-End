import React from "react";

import { Modal, Row } from "react-bootstrap";

import Buttons from "../../elements/Buttons";

import { Link } from "react-router-dom";

export interface Props {
  show: boolean;
  onHide: any;
}

const FooterApp: React.FC<Props> = ({ show, onHide }) => {
  return (
    <div>
      <Modal size="sm" centered animation={true} show={show} onHide={onHide}>
        <Modal.Body style={{ padding: 0, overflow: "hidden" }}>
          <p style={{ padding: 20, textAlign: "justify" }}>
            Você deseja criar ou encontrar um evento?
          </p>
          <Row style={{ width: "100%", margin: 0, justifyContent: "center" }}>
            <div style={{ width: "80%" }}>
              <Link to="/MobileEventSpace">
                <Buttons text="Criar" />
              </Link>
            </div>
          </Row>
          <Row
            style={{
              width: "100%",
              margin: "15px 0",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "80%" }} onClick={onHide}>
              <Buttons text="Encontrar" fill />
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FooterApp;
