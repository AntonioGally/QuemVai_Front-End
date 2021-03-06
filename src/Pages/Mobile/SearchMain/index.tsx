import React, { useEffect } from "react";

import { Redirect, useParams } from "react-router-dom";

import api from "../../../services/api";
import { Token, logout } from "../../../services/auth";

import SearchMainContent from "../../../Mobile/components/SearchMainContent";


const SearchMain: React.FC = () => {
  const { word }: any = useParams();
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
      <SearchMainContent word={word}/>
    </div>
  );
}

export default SearchMain;