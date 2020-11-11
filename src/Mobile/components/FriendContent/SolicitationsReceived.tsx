import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import any_data from "../../../img/icones/any_data.svg";
import { InvitesReceivedList } from "../../../@types";

import AceitarSolicitacao from "./Confirmacao/AceitarSolicitacao";
import RecusarSolicitacao from "./Confirmacao/RecusarSolicitacao";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

import {
  CardContainer,
  MyCard,
  NameUser,
  AcceptIcon,
  RefuseIcon,
} from "./styles";

interface Data {
  InvitesReceived: InvitesReceivedList[];
}

const FriendContent: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [auxID, setAuxID] = useState(Number);
  const [auxName, setAuxName] = useState("");
  const [modalShowRefuse, setModalShowRefuse] = useState(false);
  const [modalShowAccept, setModalShowAccept] = useState(false);
  const [isSomething, setIsSomething] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/invite", {
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
  }, [reload]);

  return (
    <div>
      <CardContainer>
        {!isSomething ? (
          <div style={{ textAlign: "center" }}>
            <img
              src={any_data}
              alt="Any Data"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <></>
        )}
        {data?.InvitesReceived.map((information) => (
          <MyCard key={information.id_User}>
            <Row style={{ margin: 0, alignItems: "center" }}>
              <img
                src={information.photos}
                alt="User"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />

              <NameUser>{information.username}</NameUser>

              <AcceptIcon
                onClick={() => {
                  setAuxID(information.id_User);
                  setAuxName(information.username);
                  setModalShowAccept(true);
                }}
              />
              <RefuseIcon
                onClick={() => {
                  setAuxID(information.id_User);
                  setAuxName(information.username);
                  setModalShowRefuse(true);
                }}
              />
            </Row>
          </MyCard>
        ))}
      </CardContainer>
      {modalShowRefuse ? (
        <RecusarSolicitacao
          id={auxID}
          isTrust={false}
          name={auxName}
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
          isTrust={false}
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

export default FriendContent;
