import React, { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import "./ModalFriendStyles.css";

import {
  MyTitleForm,
  MyCardInvitesSended,
  ImageUser,
  NameUser,
  CancelIcon,
} from "./styles";

import any_data3 from "../../img/icones/any_data3.jpg";

import { InvitesSendedTrustList } from "../@types";

import api from "../services/api";
import { Token } from "../services/auth";

interface Data {
  InvitesSended: InvitesSendedTrustList[];
}

const ModalFriendUserApp: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [isSomething, setIsSomething] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/trust/invite/getInvite", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllInvitesSended] = responses;
      const invites = await AllInvitesSended.data;
      // eslint-disable-next-line
      if (invites != "") {
        setIsSomething(true);
      }
      setData({ InvitesSended: invites });
    });
  }, []);

  return (
    <div className="WrapperModalFriends">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Solicitações de confiança enviadas
        </MyTitleForm>
        {!isSomething ? (
          <div style={{ textAlign: "center" }}>
            <img
              src={any_data3}
              alt="Any Data"
              style={{ width: "90%", height: "90%" }}
            />
          </div>
        ) : (
          <div>
            {data?.InvitesSended.map((information) => (
              <MyCardInvitesSended>
                <Row
                  style={{
                    margin: 0,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ImageUser
                    src="https://quemvai.blob.core.windows.net/fotos/d72b2887-9471-7edd-20d8-12e0ea73394f.jpg"
                    alt="UserPhoto"
                  />
                  <NameUser>Tony3</NameUser>
                  <CancelIcon />
                </Row>
              </MyCardInvitesSended>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ModalFriendUserApp;
