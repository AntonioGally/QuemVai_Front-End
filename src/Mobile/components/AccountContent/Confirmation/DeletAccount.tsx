import React from "react";

import api from "../../../../services/api";
import { Token, logout } from "../../../../services/auth";

import { Modal, Row } from "react-bootstrap";

import Buttons from "../../../elements/Buttons";

export interface Props {
  show: boolean;
  onHide: any;
}

const Confirmation: React.FC<Props> = ({ show, onHide }) => {
  const [erros, setErros] = React.useState("");

  const DeleteAccount = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.put("/api/user/delete/me", {}, config);
      if (response.data["User deleted"]) {
        alert("Sua conta foi deletada");
        window.location.reload();
        logout();
      }
      if (!response.data["User deleted"]) {
        setErros("Houve algum problema em deletar sua conta");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal size="sm" centered animation={true} show={show} onHide={onHide}>
        <Modal.Body style={{ padding: 0, overflow: "hidden" }}>
          <p style={{ padding: 20, textAlign: "justify" }}>
            Certeza que você deseja deletar sua conta?
          </p>
          <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
          <Row style={{ width: "100%", margin: 0, justifyContent: "center" }}>
            <div style={{ width: "80%" }} onClick={DeleteAccount}>
              <Buttons text="Deletar" />
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Confirmation;
