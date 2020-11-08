import React from "react";
import { Row } from "react-bootstrap";

import {
  CardContainer,
  MyCard,
  NameUser,
  AcceptIcon,
  RefuseIcon,
} from "./styles";

const FriendContent: React.FC = () => {
  var aux_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <CardContainer>
        {aux_list.map((information) => (
          <MyCard key={information}>
            <Row style={{ margin: 0, alignItems: "center" }}>
              <img
                src="https://quemvai.blob.core.windows.net/fotos/d88a262f-df82-9aca-0dcd-e2b59e542a5a.jpg"
                alt="User"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />

              <NameUser>Mário Sérgio Cortela {information}</NameUser>

              <AcceptIcon />
              <RefuseIcon />
            </Row>
          </MyCard>
        ))}
      </CardContainer>
    </div>
  );
};

export default FriendContent;
