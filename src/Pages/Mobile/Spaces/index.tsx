import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import api from "../../../services/api";
import { Token, logout } from "../../../services/auth";

import SpacesContent from "../../../Mobile/components/SpacesContent";
import FooterApp from "../../../Mobile/components/FooterApp";

const Spaces: React.FC = () => {
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
    <div>
      <div className="CellPhone" style={{ padding: 0 }}>
        <div style={{ height: "90vh", overflow: "hidden" }}>
          <SpacesContent />
        </div>
        <footer style={{ height: "10vh", position: "relative" }}>
          <FooterApp />
        </footer>
      </div>
    </div>
  );
};

export default Spaces;
