import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import any_data4 from "../../../img/icones/any_data4.jpg";

import {
  CardContainer,
  MyCard,
  NameUser,
  MyButtonConfirm,
  RefuseIcon,
} from "./styles";

import { InvitesReceivedTrustList } from "../../../@types";

import RecusarSolicitacao from "./Confirmacao/RecusarSolicitacao";
import AceitarSolicitacao from "./Confirmacao/AceitarSolicitacao";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

interface Data {
  InvitesReceived: InvitesReceivedTrustList[];
}

const FriendContent: React.FC = () => {
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
  }, [reload]);
  return (
    <div>
      <CardContainer>
        {!isSomething ? (
          <div style={{ textAlign: "center" }}>
            <img
              src={any_data4}
              alt="Any Data"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <>
            {data?.InvitesReceived.map((information) => (
              <MyCard key={information.id_User}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <img
                    src={information.photos}
                    alt="User"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />

                  <NameUser className="TrustMobile">
                    {information.username}
                  </NameUser>

                  <MyButtonConfirm
                    onClick={() => {
                      setAuxID(information.id_User);
                      setAuxName(information.username);
                      setModalShowAccept(true);
                    }}
                  >
                    <span>Confirmar</span>
                  </MyButtonConfirm>
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
          </>
        )}
      </CardContainer>
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

export default FriendContent;
