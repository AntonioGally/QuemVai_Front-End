import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import api from "../../../services/api";
import { Token, logout } from "../../../services/auth";

import AccountHeader from "../../../Mobile/components/AccountHeader";
import AccountContent from "../../../Mobile/components/AccountContent";

import PhotosProvider from "../../../Context/ReloadPhotoMobile";

const ManagementUser: React.FC = () => {
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
    <div className="CellPhone">
      <PhotosProvider>
        <AccountHeader />
        <AccountContent />
      </PhotosProvider>
    </div>
  );
};

export default ManagementUser;
