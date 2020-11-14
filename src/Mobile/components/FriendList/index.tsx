import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useFriendListContext } from "../../../Context/ReloadFriendListMobile";

import { FriendsList } from "../../../@types";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

import {
  Container,
  Title,
  UserList,
  UserButton,
  NameUser,
  WrapperUser,
} from "./styles";

interface Data {
  GetFriends: FriendsList[];
}

const FriendList: React.FC = () => {
  const { reload } = useFriendListContext();
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
  }, [reload]);
  return (
    <div style={{ height: "25vh", overflow: "hidden" }}>
      <Container>
        <Title>Amigos</Title>
        <UserList>
          {data?.GetFriends.map((information) => (
            <WrapperUser key={information.id_Friend}>
              <Link to={`/MobileFriendInfo/${information.id_Friend}`}>
                <UserButton>
                  <img
                    src={information.photos}
                    alt="FriendUser"
                    style={{
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                    }}
                  />
                </UserButton>
              </Link>
              <NameUser>{information.username}</NameUser>
            </WrapperUser>
          ))}
        </UserList>
      </Container>
    </div>
  );
};

export default FriendList;
