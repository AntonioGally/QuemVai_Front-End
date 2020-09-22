import React from "react";
import { Modal, Button } from "react-bootstrap";

import api from "../../services/api";
import { Token } from "../../services/auth";

export interface Props {
  id: number;
  show: boolean;
  onHide: any;
}

const Confirmação: React.FC<Props> = ({ id, show, onHide }) => {
  const [erros, setErros] = React.useState("");
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
        <Modal.Header closeButton>
          <Modal.Title>Recusar</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Certeza que você deseja recusar a solicitação de amizade do usuário{" "}
            <b className="text-danger">{id} ?</b>
          </p>
          <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
        </Modal.Body>

        <Modal.Footer>
          <Button type="button" variant="success" onClick={onHide}>
            Voltar
          </Button>
          <Button type="button" variant="danger" onClick={handleClick}>
            Recusar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Confirmação;
