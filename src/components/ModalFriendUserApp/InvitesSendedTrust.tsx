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
export interface Props {
  called: any;
}
const ModalFriendUserApp: React.FC<Props> = ({ called }) => {
  const [data, setData] = useState<Data>();
  const [isSomething, setIsSomething] = useState(false);
  const [erros, setErros] = React.useState("");
  const [reload, setReload] = React.useState(0);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/trust/invite/getSentInvite", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllInvitesSended] = responses;
      const invites = await AllInvitesSended.data;
      if (invites.length > 0) {
        setIsSomething(true);
      } else {
        setIsSomething(false);
      }
      setData({ InvitesSended: invites });
    });
  }, [called, reload]);

  const handleClick = async (id: number) => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.put(
        `/api/user/trust/invite/cancel/${id}`,
        {},
        config
      );
      if (response.status === 200 && response.data["TrustDenied"]) {
        setReload(reload + 1);
      }
      if (response.status === 204) {
        setErros("Essa solicitação não existe");
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao aceitar a solicitação");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
              <MyCardInvitesSended key={information.id}>
                <Row
                  style={{
                    margin: 0,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ImageUser src={information.photos} alt="UserPhoto" />
                  <NameUser>{information.username}</NameUser>
                  <CancelIcon
                    onClick={() => handleClick(information.id_Friend)}
                  />
                </Row>
                <div className="text-danger" style={{ fontSize: "20px" }}>
                  {erros}
                </div>
              </MyCardInvitesSended>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ModalFriendUserApp;
