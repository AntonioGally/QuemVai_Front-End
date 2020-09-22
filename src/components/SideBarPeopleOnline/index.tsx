import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Container, MyRowPeople } from "./styles";

import { FriendsList } from "../@types";

import api from "../services/api";
import { Token } from "../services/auth";

interface Data {
  GetFriends: FriendsList[];
}

const SideBarPeopleOnline: React.FC = () => {
  const [data, setData] = useState<Data>();

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
    <Container>
      {data?.GetFriends.map((information) => (
        <div key={information.id_Friend} style={{marginTop:"10%"}}>
          <Row style={{ margin: 0, justifyContent: "center" }}>
            <img
              src={information.photos}
              alt="Friend"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </Row>

          <MyRowPeople>{information.username}</MyRowPeople>
        </div>
      ))}
    </Container>
  );
};

export default SideBarPeopleOnline;
