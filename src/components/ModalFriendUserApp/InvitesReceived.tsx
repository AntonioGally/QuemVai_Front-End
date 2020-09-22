import React, { useState, useEffect } from "react";
import "./ModalFriendStyles.css";

import { Container, Table } from "react-bootstrap";
import { MyTitleForm } from "./styles";

import { InvitesReceivedList } from "../@types";
import RecusarSolicitacao from "./Confirmação/RecusarSolicitacao";
import AceitarSolicitacao from "./Confirmação/AceitarSolicitacao";

import api from "../services/api";
import { Token } from "../services/auth";

interface Data {
  InvitesReceived: InvitesReceivedList[];
}

const ModalFriendUserApp: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [auxID, setAuxID] = useState(Number);
  const [modalShowRefuse, setModalShowRefuse] = useState(false);
  const [modalShowAccept, setModalShowAccept] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/invite", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllInvitesReceived] = responses;
      const invites = await AllInvitesReceived.data;
      setData({ InvitesReceived: invites });
    });
  }, []);
  return (
    <div className="WrapperModalFriends">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Solicitações Recebidas
        </MyTitleForm>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Apelido</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {data?.InvitesReceived.map((information) => (
                <tr key={information.id_User}>
                  <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                    <img
                      alt="UserPhoto"
                      src={information.UserOwner.photos}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {information.UserOwner.username}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {information.id_User}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <button
                      type="button"
                      className="btn  btn-outline-danger"
                      onClick={() => {
                        setAuxID(information.id_User);
                        setModalShowRefuse(true);
                      }}
                    >
                      Recusar
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ marginLeft: "4%" }}
                      onClick={() => {
                        setAuxID(information.id_User);
                        setModalShowAccept(true);
                      }}
                    >
                      Aceitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {modalShowRefuse ? (
            <RecusarSolicitacao
              id={auxID}
              show={modalShowRefuse}
              onHide={() => setModalShowRefuse(false)}
            />
          ) : (
            ""
          )}
          {modalShowAccept ? (
            <AceitarSolicitacao
              id={auxID}
              show={modalShowAccept}
              onHide={() => setModalShowAccept(false)}
            />
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
};

export default ModalFriendUserApp;
