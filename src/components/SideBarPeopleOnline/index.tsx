import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Container, MyRowPeople } from "./styles";

import { FriendsList } from "../@types";

import api from "../services/api";
import { Token } from "../services/auth";

import ModalInfoUser from "./ModalInfoUser";

interface Data {
  GetFriends: FriendsList[];
}

const SideBarPeopleOnline: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [modalShow, setModalShow] = useState(false);
  const [idFriend, setIdFriend] = useState(Number);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState("");
  const [email, setEmail] = useState("");
  const [DDD, setDDD] = useState(Number);
  const [cellPhoneNumber, setCellPhoneNumber] = useState(0);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/friends", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllFriends] = responses;
      const friends = await AllFriends.data;
      setData({ GetFriends: friends });
    });
  }, []);

  return (
    <div>
      <Container>
        {data?.GetFriends.map((information) => (
          <div key={information.id_Friend} style={{ marginTop: "20%" }}>
            <Row style={{ margin: 0, justifyContent: "center" }}>
              <img
                src={information.photos}
                alt="Friend"
                className="teste"
                onClick={() => {
                  setModalShow(true);
                  setIdFriend(information.id_Friend);
                  setUserName(information.username);
                  setName(information.name as any);
                  setPhotos(information.photos);
                  setEmail(information.email as any);
                  setDDD(information.DDD as any);
                  setCellPhoneNumber(information.cellPhoneNumber as any);
                }}
              />
            </Row>
            <Row style={{ justifyContent: "center", margin: "7% 0px 0px 0px" }}>
              <MyRowPeople>{information.username}</MyRowPeople>
            </Row>
          </div>
        ))}
      </Container>
      {modalShow ? (
        <ModalInfoUser
          idFriend={idFriend}
          userName={userName}
          name={name}
          photos={photos}
          email={email}
          ddd={DDD}
          cell={cellPhoneNumber}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBarPeopleOnline;
