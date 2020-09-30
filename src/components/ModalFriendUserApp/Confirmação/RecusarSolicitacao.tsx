import React from "react";
import { Modal, Row, Col } from "react-bootstrap";

import api from "../../services/api";
import { Token } from "../../services/auth";

export interface Props {
  id: number;
  name: string;
  isTrust: boolean;
  show: boolean;
  onHide: any;
}

const Confirmação: React.FC<Props> = ({ id, name, isTrust, show, onHide }) => {
  const [erros, setErros] = React.useState("");
  const handleClickTrust = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.put(
        `/api/user/trust/invite/refuse/${id}`,
        {},
        config
      );
      if (response.status === 200) {
        window.location.reload();
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao recusar a solicitação");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.put(
        `/api/user/invite/refuse/${id}`,
        {},
        config
      );
      if (response.status === 200) {
        window.location.reload();
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao recusar a solicitação");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Modal size="sm" centered show={show} onHide={onHide}>
        <Modal.Body style={{ padding: 0, overflow: "hidden" }}>
          {isTrust ? (
            <p style={{ padding: 20, textAlign: "justify" }}>
              Você deseja <b className="text-danger">EXCLUIR</b> a solicitação
              de confiabilidade do usuário <b className="text-danger">{name}</b>{" "}
              de id <b className="text-danger">{id}</b> ?
            </p>
          ) : (
            <p style={{ padding: 20, textAlign: "justify" }}>
              Você deseja <b className="text-danger">EXCLUIR</b> o usuário{" "}
              <b className="text-danger">{name}</b> de id{" "}
              <b className="text-danger">{id}</b> ?
            </p>
          )}

          <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
          <Row style={{ width: "100%", margin: 0 }}>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div onClick={onHide} className="BackButtonConfirmation">
                Cancelar
              </div>
            </Col>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div
                onClick={!isTrust ? handleClick : handleClickTrust}
                className="AddButtonConfirmation"
              >
                Excluir
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Confirmação;
