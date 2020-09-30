import React, { useEffect, useState } from "react";
import "./ModalFriendStyles.css";

import any_data2 from "../../img/icones/any_data2.svg";

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
  const [isSomething, setIsSomething] = useState(false);
  // const [auxID, setAuxID] = useState(Number);
  // const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/invite/sent", {
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
  console.log(data);
  return (
    <div className="WrapperModalFriends">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Solicitações enviadas
        </MyTitleForm>
        {!isSomething ? (
          <div style={{ textAlign: "center" }}>
            <img
              src={any_data2}
              alt="Any Data"
              style={{ width: "90%", height: "90%" }}
            />
          </div>
        ) : (
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
        )}
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