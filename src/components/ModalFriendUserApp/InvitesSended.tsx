import React, { useEffect, useState } from "react";
import "./ModalFriendStyles.css";

import { Container, Table } from "react-bootstrap";
import { MyTitleForm } from "./styles";

import { InvitesSendedList } from "../@types";
import CancelarSolicitacao from "./Confirmação/CancelarSolicitacao";

import api from "../services/api";
import { Token } from "../services/auth";

interface Data {
  InvitesSended: InvitesSendedList[];
}

const ModalFriendUserApp: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [auxID, setAuxID] = useState(Number);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/invite/sent", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllInvitesSended] = responses;
      const invites = await AllInvitesSended.data;
      setData({ InvitesSended: invites });
    });
  }, []);

  return (
    <div className="WrapperModalFriends">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Solicitações Enviadas
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
              {data?.InvitesSended.map((information) => (
                <tr key={information.id_Friend}>
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
                    {information.id_Friend}
                  </td>

                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setModalShow(true);
                        setAuxID(information.id_Friend);
                      }}
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {modalShow ? (
            <CancelarSolicitacao
              id={auxID}
              show={modalShow}
              onHide={() => setModalShow(false)}
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
