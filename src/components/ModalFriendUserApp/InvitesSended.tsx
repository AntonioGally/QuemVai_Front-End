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
  const [auxID, setAuxID] = useState();
  const [erros, setErros] = React.useState("");
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

  useEffect(() => {
    var auxData = data?.InvitesSended.map((i) => {
      return i.id_Friend;
    });
    setAuxID(auxData as any);
  }, [data]);

  const handleClick = async () => {
    try {
      console.log(auxID);
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.put(
        `/api/user/invite/cancel/${auxID}`,
        {},
        config
      );
      if (response.status === 200 && response.data["Request canceled"]) {
        window.location.reload();
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
            {data?.InvitesSended.map((information) => (
              <MyCardInvitesSended key={information.id_Friend}>
                <Row
                  style={{
                    margin: 0,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ImageUser
                    src={information.UserFriendOwner.photos}
                    alt="UserPhoto"
                  />
                  <NameUser>{information.UserFriendOwner.username}</NameUser>
                  <CancelIcon onClick={handleClick} />
                </Row>
                <div className="text-danger" style={{ fontSize: "20px" }}>
                  {erros}
                </div>
              </MyCardInvitesSended>
            ))}
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
