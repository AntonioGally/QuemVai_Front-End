import React, { useState, useEffect } from "react";
import "./ModalFriendStyles.css";

import { Container, Row } from "react-bootstrap";
import {
  MyTitleForm,
  MyCardInvitesSended,
  ImageUser,
  NameUser,
  AcceptIcon,
  RefuseIcon,
} from "./styles";

import { InvitesReceivedList } from "../@types";
// import RecusarSolicitacao from "./Confirmação/RecusarSolicitacao";
// import AceitarSolicitacao from "./Confirmação/AceitarSolicitacao";

import api from "../services/api";
import { Token } from "../services/auth";

interface Data {
  InvitesReceived: InvitesReceivedList[];
}

const ModalFriendUserApp: React.FC = () => {
  const [data, setData] = useState<Data>();
  // const [auxID, setAuxID] = useState(Number);
  // const [modalShowRefuse, setModalShowRefuse] = useState(false);
  // const [modalShowAccept, setModalShowAccept] = useState(false);

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
          {data?.InvitesReceived.map((information) => (
            <MyCardInvitesSended key={information.id_User}>
              <Row
                style={{
                  margin: 0,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ImageUser
                  src={information.UserOwner.photos}
                  alt="UserPhoto"
                />
                <NameUser>{information.UserOwner.username}</NameUser>
                <AcceptIcon />
                <RefuseIcon />
              </Row>
            </MyCardInvitesSended>
          ))}
        </div>
      </Container>
      {/* {modalShowRefuse ? (
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
          )} */}
    </div>
  );
};

export default ModalFriendUserApp;
