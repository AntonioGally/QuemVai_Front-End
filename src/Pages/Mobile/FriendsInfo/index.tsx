import React from "react";
import { useParams } from "react-router-dom";

// import api from "../../../services/api";
// import { Token } from "../../../services/auth";
import FriendsInfoContent from "../../../Mobile/components/FriendsInfoContent";

const FriendsInfo: React.FC = () => {
  const { id_Friend }: any = useParams();

  return (
    <div className="CellPhone" style={{ padding: 0 }}>
      <FriendsInfoContent id_Friend={id_Friend} />
    </div>
  );
};

export default FriendsInfo;
