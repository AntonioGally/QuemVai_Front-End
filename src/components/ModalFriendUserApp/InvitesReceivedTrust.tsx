import React, { useEffect, useState } from "react";
import "./ModalFriendStyles.css";

import any_data4 from "../../img/icones/any_data4.jpg";

import { Container, Row } from "react-bootstrap";
import {
  MyTitleForm,
  MyCardInvitesSended,
  ImageUser,
  NameUser,
  AcceptIcon,
  RefuseIcon,
} from "./styles";

import { InvitesReceivedTrustList } from "../@types";

import RecusarSolicitacao from "./Confirmação/RecusarSolicitacao";
import AceitarSolicitacao from "./Confirmação/AceitarSolicitacao";

import api from "../services/api";
import { Token } from "../services/auth";

interface Data {
  InvitesReceived: InvitesReceivedTrustList[];
}

const ModalFriendUserApp: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [isSomething, setIsSomething] = useState(false);
  const [auxID, setAuxID] = useState(Number);
  const [auxName, setAuxName] = useState("");
  const [modalShowRefuse, setModalShowRefuse] = useState(false);
  const [modalShowAccept, setModalShowAccept] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/trust/invite/getInvite", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllInvitesReceived] = responses;
      const invites = await AllInvitesReceived.data;
      // eslint-disable-next-line
      if (invites != "") {
        setIsSomething(true);
      }
      setData({ InvitesReceived: invites });
    });
  }, []);

  return (
    <div className="WrapperModalFriends">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Solicitações de confiança recebidas
        </MyTitleForm>
        {!isSomething ? (
          <div style={{ textAlign: "center" }}>
            <img
              src={any_data4}
              alt="Any Data"
              style={{ width: "90%", height: "90%" }}
            />
          </div>
        ) : (
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
                  <RefuseIcon
                    onClick={() => {
                      setAuxID(information.id_User);
                      setAuxName(information.UserOwner.username);
                      setModalShowRefuse(true);
                    }}
                  />
                  <AcceptIcon
                    onClick={() => {
                      setAuxID(information.id_User);
                      setAuxName(information.UserOwner.username);
                      setModalShowAccept(true);
                    }}
                  />
                </Row>
              </MyCardInvitesSended>
            ))}
          </div>
        )}
      </Container>
      {modalShowRefuse ? (
        <RecusarSolicitacao
          id={auxID}
          name={auxName}
          isTrust={true}
          show={modalShowRefuse}
          onHide={() => setModalShowRefuse(false)}
        />
      ) : (
        ""
      )}
      {modalShowAccept ? (
        <AceitarSolicitacao
          id={auxID}
          name={auxName}
          isTrust={true}
          show={modalShowAccept}
          onHide={() => setModalShowAccept(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalFriendUserApp;
