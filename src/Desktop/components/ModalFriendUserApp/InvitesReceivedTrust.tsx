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

import { InvitesReceivedTrustList } from "../../../@types";

import RecusarSolicitacao from "./Confirmação/RecusarSolicitacao";
import AceitarSolicitacao from "./Confirmação/AceitarSolicitacao";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

interface Data {
  InvitesReceived: InvitesReceivedTrustList[];
}

export interface Props {
  called: any;
}

const ModalFriendUserApp: React.FC<Props> = ({ called }) => {
  const [data, setData] = useState<Data>();
  const [isSomething, setIsSomething] = useState(false);
  const [auxID, setAuxID] = useState(Number);
  const [auxName, setAuxName] = useState("");
  const [modalShowRefuse, setModalShowRefuse] = useState(false);
  const [modalShowAccept, setModalShowAccept] = useState(false);

  const [reload, setReload] = React.useState(0);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/trust/invite/getInvite", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllInvitesReceived] = responses;
      const invites = await AllInvitesReceived.data;
      if (invites.length > 0) {
        setIsSomething(true);
      } else {
        setIsSomething(false);
      }
      setData({ InvitesReceived: invites });
    });
  }, [called, reload]);

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
              <MyCardInvitesSended>
                <Row
                  style={{
                    margin: 0,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ImageUser src={information.photos} alt="UserPhoto" />
                  <NameUser>{information.username}</NameUser>
                  <RefuseIcon
                    onClick={() => {
                      setAuxID(information.id_User);
                      setAuxName(information.username);
                      setModalShowRefuse(true);
                    }}
                  />
                  <AcceptIcon
                    onClick={() => {
                      setAuxID(information.id_User);
                      setAuxName(information.username);
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
          onHide={() => {
            setModalShowRefuse(false);
            setReload(reload + 1);
          }}
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
          onHide={() => {
            setModalShowAccept(false);
            setReload(reload + 1);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalFriendUserApp;
