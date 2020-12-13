import React, { useState } from "react";

import { Modal, Button, Row } from "react-bootstrap";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
}

const AdminSports: React.FC<Props> = ({ show, onHide, id }) => {
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");

  const handleDelete = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
      };
      const response = await api.delete(`/api/admin/find/delete/${id}/asdasd`, config);

      if (response.status === 200) {
        setErros("");
        setSuccess("Esporte deletado com sucesso");
      }
      if (response.status !== 200) {
        setErros("Houve algum problema");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal size="sm" animation={true} centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">Deletar esporte</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Tem certeza que deseja deletar o esporte selecionado?</p>
        <Row>
          <div className="text-danger" style={{ fontFamily: "Poppins" }}>
            {erros}
          </div>
          <div className="text-success" style={{ fontFamily: "Poppins" }}>
            {success}
          </div>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Deletar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdminSports;
