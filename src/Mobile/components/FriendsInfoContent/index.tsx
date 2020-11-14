import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import any_data from "../../../img/icones/any_data.svg";

import ModalConfirmation from "./Confirmacao/ModalConfirmation";

import {
  ArrowBackIcon,
  ContainerSvg,
  ImageUser,
  NameUser,
  InformationUser,
  MyCol,
  MyButton,
  UserIcon,
  VerifiedIcon,
} from "./styles";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { FriendsList } from "../../../@types";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

export interface Props {
  id_Friend: any;
}

interface Data {
  GetFriends: FriendsList;
}

const FriendsInfoContent: React.FC<Props> = ({ id_Friend }) => {
  const [data, setData] = useState<Data>();
  const [backIcon, setBackIcon] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [trustFriend, setTrustFriend] = useState(Boolean);

  const [removeTrust, setRemoveTrust] = React.useState(false);
  const [removeFriend, setRemoveFriend] = React.useState(false);
  const [addTrust, setAddTrust] = React.useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/friends", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllFriends] = responses;
      const friends = await AllFriends.data;
      var aux_list: any;
      for (let count in friends) {
        // eslint-disable-next-line
        if (Number(friends[count]["id_Friend"]) == id_Friend) {
          aux_list = friends[count];
        }
      }
      if (!aux_list) {
        setIsValid(false);
      } else {
        if (aux_list["cellPhoneNumber"]) {
          setTrustFriend(true);
        } else {
          setTrustFriend(false);
        }
        setIsValid(true);
        setData({ GetFriends: aux_list });
      }
    });
  }, [id_Friend]);

  if (backIcon) {
    return <Redirect to="/MobileFriends" />;
  }

  return (
    <div style={{ position: "relative" }}>
      <div>
        <ArrowBackIcon onClick={() => setBackIcon(true)} />
      </div>
      <ContainerSvg>
        <img
          src={SvgModalConfigUser}
          alt="svg"
          style={{ width: "222px", height: "166px" }}
        />
      </ContainerSvg>
      {isValid ? (
        <>
          <div>
            <Row
              className="justify-content-center"
              style={{ margin: "10% 0 5% 0", width: "100%" }}
            >
              <ImageUser src={data?.GetFriends.photos} alt="User Friend" />
            </Row>
            <Row style={{ margin: 0, width: "100%", justifyContent: "center" }}>
              <NameUser>{data?.GetFriends.username}</NameUser>
            </Row>
          </div>

          {trustFriend ? (
            <>
              {" "}
              <div style={{ width: "85%", margin: "10% auto 0 auto" }}>
                <Row
                  style={{
                    margin: "0 0 5% 0",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <MyCol>Email:</MyCol>
                  <InformationUser style={{ textDecorationLine: "underline" }}>
                    <a
                      href={`mailto:${data?.GetFriends.email}?Subject=Olá%20${data?.GetFriends.username}`}
                    >
                      {data?.GetFriends.email}
                    </a>
                  </InformationUser>
                </Row>

                <Row
                  style={{
                    margin: "0 0 5% 0",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <MyCol>Nome:</MyCol>
                  <InformationUser>{data?.GetFriends.name}</InformationUser>
                </Row>

                <Row
                  style={{
                    margin: "0 0 5% 0",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <MyCol>Celular:</MyCol>
                  <Row style={{ margin: "0 0 0 3%", width: "65%" }}>
                    <InformationUser style={{ marginRight: "2%" }}>
                      {data?.GetFriends.DDD}
                    </InformationUser>{" "}
                    <InformationUser>
                      {data?.GetFriends.cellPhoneNumber}
                    </InformationUser>
                  </Row>
                </Row>
              </div>{" "}
              <div style={{ marginTop: "25%" }}>
                <Row
                  style={{
                    margin: "3% 0",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MyButton
                    className="WithOutTrustButton"
                    onClick={() => {
                      setRemoveTrust(false);
                      setRemoveFriend(true);
                      setAddTrust(false);
                    }}
                  >
                    Remover Amizade
                  </MyButton>
                </Row>
                <Row
                  style={{
                    margin: "3% 0",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MyButton
                    className="WithOutTrustButton"
                    onClick={() => {
                      setRemoveTrust(true);
                      setRemoveFriend(false);
                      setAddTrust(false);
                    }}
                  >
                    Remover Confiança
                  </MyButton>
                </Row>
              </div>
            </>
          ) : (
            <>
              <div style={{ marginTop: "25%" }}>
                <Row
                  style={{
                    margin: "3% 0",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UserIcon />{" "}
                  <MyButton
                    className="WithOutTrustButton"
                    onClick={() => {
                      setRemoveTrust(false);
                      setRemoveFriend(true);
                      setAddTrust(false);
                    }}
                  >
                    Remover Amizade
                  </MyButton>
                </Row>
                <Row
                  style={{
                    margin: "3% 0",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <VerifiedIcon />{" "}
                  <MyButton
                    className="WithOutTrustButton"
                    onClick={() => {
                      setRemoveTrust(false);
                      setRemoveFriend(false);
                      setAddTrust(true);
                    }}
                  >
                    Adicionar Confiança
                  </MyButton>
                </Row>
              </div>
            </>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <img
            src={any_data}
            alt="Any Data"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
      {removeTrust ? (
        <ModalConfirmation
          id={id_Friend}
          name={data?.GetFriends.username}
          typeModal="removeTrust"
          show={removeTrust}
          onHide={() => setRemoveTrust(false)}
          ReloadContent={() => {
            setRemoveTrust(false);
            setBackIcon(true);
          }}
        />
      ) : (
        ""
      )}
      {addTrust ? (
        <ModalConfirmation
          id={id_Friend}
          name={data?.GetFriends.username}
          typeModal="addTrust"
          show={addTrust}
          onHide={() => setAddTrust(false)}
          ReloadContent={() => {
            setAddTrust(false);
            setBackIcon(true);
          }}
        />
      ) : (
        ""
      )}
      {removeFriend ? (
        <ModalConfirmation
          id={id_Friend}
          name={data?.GetFriends.username}
          typeModal="removeFriend"
          show={removeFriend}
          onHide={() => setRemoveFriend(false)}
          ReloadContent={() => {
            setRemoveFriend(false);
            setBackIcon(true);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
// https://quemvai.blob.core.windows.net/fotos/d88a262f-df82-9aca-0dcd-e2b59e542a5a.jpg
export default FriendsInfoContent;
