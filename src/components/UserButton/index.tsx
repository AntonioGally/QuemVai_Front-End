import React from "react";

import { Button } from "./styles";
import user from "../../img/icones/user.svg";

export interface Props {
  isOnline?: boolean;
  userName: string;
}

const UserButton: React.FC<Props> = ({ isOnline, userName }) => {
  return (
    <div className="col " style={{padding:'0'}}>
      <div className="row justify-content-center" style={{ margin: "0" }}>
        <Button isOnline={isOnline} userName={userName}>
          <img src={user} alt="Usuário" />
        </Button>
      </div>
      <div className="row justify-content-center" style={{ margin: "0", padding:'0 0 0 5px' }}>
        {userName}
      </div>
    </div>
  );
};

export default UserButton;
