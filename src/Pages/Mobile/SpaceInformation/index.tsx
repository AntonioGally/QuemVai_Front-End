import React, { useEffect } from "react";

import { Redirect, useParams } from "react-router-dom";

import api from "../../../services/api";
import { Token, logout } from "../../../services/auth";

import SpaceInfoContent from "../../../Mobile/components/SpaceInfoContent";

const SpaceInformation: React.FC = () => {
  const { id_space, from_favorites }: any = useParams();
  const [isValid, setIsValid] = React.useState(true);
  useEffect(() => {
    Promise.all([
      api.get("/api/user/bring/me", {
        validateStatus: function (status) {
          return status < 501; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushUserInformation] = responses;
      const results = await PushUserInformation.data;
      if (!results["info"]) {
        logout();
        setIsValid(false);
      }
    });
  }, []);
  if (!isValid) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div style={{ overflow: "hidden", padding: 0 }} className="CellPhone">
        <SpaceInfoContent idSpace={id_space} fromWhere={from_favorites} />
      </div>
    </>
  );
};

export default SpaceInformation;
