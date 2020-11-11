import React from "react";
import { Modal, Row } from "react-bootstrap";

import api from "../../../../services/api";
import { Token } from "../../../../services/auth";

import Buttons from "../../../elements/Buttons";

export interface Props {
  id: number;
  name: string;
  isTrust: boolean;
  show: boolean;
  onHide: any;
}

const Confirmacao: React.FC<Props> = ({ id, name, isTrust, show, onHide }) => {
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
        onHide();
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
        onHide();
      }
      if (response.status === 204) {
        setErros("Essa solicitação não existe");
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
              Você deseja <b className="text-danger">RECUSAR</b> a solicitação
              de confiabilidade do usuário <b className="text-danger">{name}</b>{" "}
              de id <b className="text-danger">{id}</b> ?
            </p>
          ) : (
            <p style={{ padding: 20, textAlign: "justify" }}>
              Você deseja <b className="text-danger">RECUSAR</b> a solicitação
              do usuário <b className="text-danger">{name}</b> de id{" "}
              <b className="text-danger">{id}</b> ?
            </p>
          )}

          <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
          <Row style={{ width: "100%", margin: 0 }}>
            <Row style={{ width: "100%", margin: 0, justifyContent: "center" }}>
              <div
                style={{ width: "80%" }}
                onClick={!isTrust ? handleClick : handleClickTrust}
              >
                <Buttons text="Recusar" />
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
                <Buttons text="Cancelar" fill />
              </div>
            </Row>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Confirmacao;
