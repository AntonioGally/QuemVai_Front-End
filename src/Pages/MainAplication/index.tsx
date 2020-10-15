import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import LayoutCellApp from "../../Mobile/components/LayoutCellApp";
import LayoutDesktopApp from "../../Desktop/components/LayoutDesktopApp";

import api from "../../services/api";
import { Token, logout } from "../../services/auth";

const MainAplication: React.FC = () => {
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
    <div style={{ overflow: "hidden" }}>
      <LayoutCellApp />
      <LayoutDesktopApp />
    </div>
  );
};

export default MainAplication;
