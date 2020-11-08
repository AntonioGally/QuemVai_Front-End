import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import api from "../../../services/api";
import { Token, logout } from "../../../services/auth";

import FriendList from "../../../Mobile/components/FriendList";
import FriendContent from "../../../Mobile/components/FriendContent";
import FooterApp from "../../../Mobile/components/FooterApp";
const Friends: React.FC = () => {
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
        <FriendList />
        <FriendContent />
        <footer style={{ height: "10vh", position: "relative" }}>
          <FooterApp />
        </footer>
      </div>
    </>
  );
};

export default Friends;
