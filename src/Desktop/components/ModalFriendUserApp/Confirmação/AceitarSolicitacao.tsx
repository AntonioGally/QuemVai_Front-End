import React from "react";
import { useSideBarPeopleContext } from "../../../../Context/ReloadSideBar";
import { Modal, Col, Row } from "react-bootstrap";
import "../ModalFriendStyles.css";

import api from "../../../../services/api";
import { Token } from "../../../../services/auth";

export interface Props {
  id: number;
  name: string;
  isTrust: boolean;
  show: boolean;
  onHide: any;
}

const Confirmação: React.FC<Props> = ({ id, name, isTrust, show, onHide }) => {
  const { reloadPeople, setReloadPeople } = useSideBarPeopleContext();

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
        `/api/user/trust/invite/accept/${id}`,
        {},
        config
      );
      if (response.status === 200) {
        setReloadPeople(reloadPeople + 1);
        onHide();
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao aceitar a solicitação");
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
        `/api/user/invite/accept/${id}`,
        {},
        config
      );
      if (response.status === 200 && response.data["Request accepted"]) {
        setReloadPeople(reloadPeople + 1);
        onHide();
      }
      if (response.status === 204) {
        setErros("Essa solicitação não existe");
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao aceitar a solicitação");
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
              Você deseja ter o usuário <b className="text-danger">{name}</b> de
              ID <b className="text-danger">{id}</b> como seu amigo de
              confiança? Ele vai ser capaz de{" "}
              <b className="text-danger">
                te convidar para eventos, visualizar seu número{" "}
              </b>{" "}
              e compartilhar informações com você.
            </p>
          ) : (
            <p style={{ padding: 20, textAlign: "justify" }}>
              Você deseja ter o usuário <b className="text-danger">{name}</b> de
              ID <b className="text-danger">{id}</b> como seu amigo? Ele vai ser
              capaz de <b className="text-danger">te convidar para eventos</b> e
              compartilhar informações com você.
            </p>
          )}

          <div style={{ fontFamily: "Poppins", color: "red" }}>{erros}</div>
          <Row style={{ width: "100%", margin: 0 }}>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div onClick={onHide} className="BackButtonConfirmation">
                Voltar
              </div>
            </Col>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div
                onClick={!isTrust ? handleClick : handleClickTrust}
                className="AddButtonConfirmation"
              >
                Adicionar
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Confirmação;
