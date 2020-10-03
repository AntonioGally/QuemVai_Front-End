import React from "react";
import { Modal, Button } from "react-bootstrap";

import api from "../../services/api";
import { getToken, logout } from "../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
}

const ModalConfigUserApp: React.FC<Props> = ({ show, onHide }) => {
  const [erros, setErros] = React.useState("");

  const DeleteAccount = async () => {
    try {
      var config = {
        headers: { "x-auth-token": getToken() },
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
      <Modal size="sm" centered show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Deletar conta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Certeza que você deseja deletar sua conta?</p>
          <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={DeleteAccount}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalConfigUserApp;
