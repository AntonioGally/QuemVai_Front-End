import React from "react";

import { Modal, Button } from "react-bootstrap";
import api from "../../../services/api";
import { getTokenAdmin } from "../../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
  id_space: number;
  name_space: string;
}

const ConfigQuadrasAdmin: React.FC<Props> = ({
  show,
  onHide,
  id_space,
  name_space,
}) => {
  const handleDelete = async () => {
    try {
      var config = {
        headers: { "x-auth-token": getTokenAdmin() },
      };
      const response = await api.delete(
        `/api/admin/find/delete/${id_space}`,
        config
      );

      if (response.status === 200) {
        alert("Quadra atualizada com sucesso!");
        window.location.reload();
      }
      if (response.status !== 200) {
        alert("Houve algum problema!");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Modal show={show} centered size="sm" onHide={onHide}>
        <Modal.Body>
          <p>
            Certeza que deseja <b className="text-danger">DELETAR</b> a quadra
            de id {id_space} e nome {name_space}
          </p>
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
    </div>
  );
};

export default ConfigQuadrasAdmin;
