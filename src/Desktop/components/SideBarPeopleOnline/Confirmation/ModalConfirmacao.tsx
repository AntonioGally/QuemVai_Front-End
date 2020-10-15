import React, { useEffect } from "react";

import { Modal, Col, Row, Button } from "react-bootstrap";

import api from "../../../../services/api";
import { Token } from "../../../../services/auth";

export interface Props {
  id: number;
  name: string;
  typeModal: string;
  show: boolean;
  onHide: any;
  onAddTrust?: any;
  onRefuseTrust? : any;
}

const Confirmation: React.FC<Props> = ({
  id,
  name,
  typeModal,
  show,
  onHide,
  onAddTrust,
  onRefuseTrust
}) => {
  const [erros, setErros] = React.useState("");
  const [sucesso, setSucesso] = React.useState("");
  const [removeTrust, setRemoveTrust] = React.useState(false);
  const [removeFriend, setRemoveFriend] = React.useState(false);
  const [addTrust, setAddTrust] = React.useState(false);
  useEffect(() => {
    if (typeModal === "removeTrust") {
      setRemoveTrust(true);
      setRemoveFriend(false);
      setAddTrust(false);
    } else if (typeModal === "addTrust") {
      setRemoveTrust(false);
      setRemoveFriend(false);
      setAddTrust(true);
    } else {
      setRemoveTrust(false);
      setRemoveFriend(true);
      setAddTrust(false);
    }
  }, [typeModal]);

  const removeTrustAPI = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.put(
        `/api/user/trust/invite/remove/${id}`,
        {},
        config
      );
      if (response.status === 200 && response.data["Deleted"] === true) {
        onRefuseTrust()
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao remover a confiança");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const addTrustAPI = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.post(
        `/api/user/trust/invite/${id}`,
        {},
        config
      );
      if (
        response.status === 200 &&
        response.data["Send soliciatation"] === true
      ) {
        setSucesso("Solicitação enviada :)");
        setErros("");
      }
      if (response.status === 400) {
        setErros("Parece que uma solicitação já foi enviada");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeFriendAPI = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.put(
        `/api/user/friend/remove/${id}`,
        {},
        config
      );
      if (response.status === 200 && response.data["Removed"] === true) {
        window.location.reload();
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao remover a amizade");
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleClick() {
    if (typeModal === "removeTrust") {
      removeTrustAPI();
    } else if (typeModal === "addTrust") {
      addTrustAPI();
    } else {
      removeFriendAPI();
    }
  }

  return (
    <div>
      <Modal size="sm" centered show={show} onHide={onHide}>
        <Modal.Body style={{ padding: 0, overflow: "hidden" }}>
          {removeTrust ? (
            <p style={{ padding: 20, textAlign: "justify" }}>
              Você deseja <b className="text-danger">REMOVER</b> o usuário{" "}
              <b className="text-danger">{name}</b> de ID{" "}
              <b className="text-danger">{id}</b> da sua lista de amigos
              confiáveis?
            </p>
          ) : (
            ""
          )}
          {addTrust ? (
            <p style={{ padding: 20, textAlign: "justify" }}>
              Você deseja <b className="text-danger">adicionar</b> o usuário{" "}
              <b className="text-danger">{name}</b> de ID{" "}
              <b className="text-danger">{id}</b> em sua lista de amigos
              confiáveis?
            </p>
          ) : (
            ""
          )}
          {removeFriend ? (
            <p style={{ padding: 20, textAlign: "justify" }}>
              Você deseja <b className="text-danger">REMOVER</b> o usuário{" "}
              <b className="text-danger">{name}</b> de ID{" "}
              <b className="text-danger">{id}</b> da sua lista de amigos?
            </p>
          ) : (
            ""
          )}
          <div
            style={{
              fontFamily: "Poppins",
              color: "red",
              textAlign: "justify",
              padding: "10px",
            }}
          >
            {erros}
          </div>
          {sucesso !== "" ? (
            <div
              style={{
                fontFamily: "Poppins",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <span className="text-success" style={{ marginRight: "10px" }}>
                {sucesso}
              </span>
              <Button onClick={onAddTrust}>Fechar</Button>
            </div>
          ) : (
            ""
          )}
          <Row style={{ width: "100%", margin: 0 }}>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div onClick={onHide} className="BackButtonConfirmation">
                Voltar
              </div>
            </Col>
            <Col lg={6} md={12} style={{ padding: 0 }}>
              <div className="AddButtonConfirmation" onClick={handleClick}>
                {removeTrust ? "Remover" : ""}
                {removeFriend ? "Remover" : ""}
                {addTrust ? "Adicionar" : ""}
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Confirmation;
