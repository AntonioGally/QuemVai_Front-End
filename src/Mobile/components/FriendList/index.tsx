import React from "react";

import {
  Container,
  Title,
  UserList,
  UserButton,
  NameUser,
  WrapperUser,
} from "./styles";

const FriendList: React.FC = () => {
  var auxList = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ height: "25vh", overflow:"hidden" }}>
      <Container>
        <Title>Amigos</Title>
        <UserList>
          {auxList.map((informations) => (
            <WrapperUser key={informations}>
              <UserButton>
                <img
                  src="https://quemvai.blob.core.windows.net/fotos/d88a262f-df82-9aca-0dcd-e2b59e542a5a.jpg"
                  alt="FriendUser"
                  style={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </UserButton>
              <NameUser>Fulano {informations}</NameUser>
            </WrapperUser>
          ))}
        </UserList>
      </Container>
    </div>
  );
};

export default FriendList;
