import React from "react";

import { Modal, Col, Row } from "react-bootstrap";

import api from "../../services/api";
import { Token } from "../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
  idHistoric: Number;
}

const confirmation: React.FC<Props> = ({ show, onHide, idHistoric }) => {
  const handleClick = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.put(
        `/api/historic/delete/${idHistoric}`,
        {},
        config
      );
      // eslint-disable-next-line
      if (response.status === 200 && response.data != "") {
        onHide()
      }
      if (response.status === 204) {
        //setErros("Esse histórico não existe não existe");
      }
      if (response.status === 400) {
        //setErros("Houve algum problema ao deletar o histórico");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Modal size="sm" centered show={show} onHide={onHide}>
        <Modal.Body style={{ padding: 0, overflow: "hidden" }}>
          <p style={{ padding: "25px" }}>
            Certeza que deseja <b className="text-danger">EXCLUIR</b> seu{" "}
            <b className="text-danger">histórico</b> de id{" "}
            <b className="text-danger">{idHistoric}</b>
          </p>

          {/* <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div> */}
          <Row style={{ width: "100%", margin: 0 }}>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div onClick={onHide} className="BackButtonConfirmation">
                Voltar
              </div>
            </Col>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div onClick={handleClick} className="AddButtonConfirmation">
                Excluir
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default confirmation;
