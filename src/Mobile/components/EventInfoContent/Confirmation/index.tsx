import React from "react";
import api from "../../../../services/api";

import { Token } from "../../../../services/auth";

import { Modal, Row } from "react-bootstrap";

import Buttons from "../../../elements/Buttons";

export interface Props {
  show: boolean;
  onHide: any;
  onDelete: any;
  onDeleteIcon?: any;
  id: number;
}

const Confirmation: React.FC<Props> = ({
  show,
  onHide,
  id,
  onDelete,
  onDeleteIcon,
}) => {
  const [erros, setErros] = React.useState("");

  const handleClick = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.put(`/api/historic/delete/${id}`, {}, config);
      // eslint-disable-next-line
      if (response.status === 200 && response.data != "") {
        onDelete();
        onDeleteIcon();
      }
      if (response.status === 204) {
        setErros("Esse histórico não existe não existe");
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao deletar o histórico");
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
            Certeza que deseja <b className="text-danger">EXCLUIR</b> seu{" "}
            <b className="text-danger">histórico</b> de id{" "}
            <b className="text-danger">{id}</b>
          </p>
          <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
          <Row style={{ width: "100%", margin: 0, justifyContent: "center" }}>
            <div style={{ width: "80%" }} onClick={handleClick}>
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
