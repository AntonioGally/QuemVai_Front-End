import React, { useEffect, useState } from "react";
import "./ModalFriendStyles.css";

import { Container, Row } from "react-bootstrap";
import {
  MyTitleForm,
  MyCardInvitesSended,
  ImageUser,
  NameUser,
  CancelIcon,
} from "./styles";

import { InvitesSendedList } from "../@types";
// import CancelarSolicitacao from "./Confirmação/CancelarSolicitacao";

import api from "../services/api";
import { Token } from "../services/auth";

interface Data {
  InvitesSended: InvitesSendedList[];
}

const ModalFriendUserApp: React.FC = () => {
  const [data, setData] = useState<Data>();
  // const [auxID, setAuxID] = useState(Number);
  // const [modalShow, setModalShow] = useState(false);
  // const [existingData, setExistingData] = useState(false);

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
  console.log(data);
  return (
    <div className="WrapperModalFriends">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Solicitações Enviadas
        </MyTitleForm>

        <div>
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
        </div>
      </Container>
      {/* {modalShow ? (
        <CancelarSolicitacao
          id={auxID}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default ModalFriendUserApp;
