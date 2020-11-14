import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import LayoutCellApp from "../../Mobile/components/LayoutCellApp";
import LayoutDesktopApp from "../../Desktop/components/LayoutDesktopApp";

import api from "../../services/api";
import { Token, logout } from "../../services/auth";

// import io from "socket.io-client";
// const ENDPOINT = "http://15.228.10.74:6868";
// var socket = io.connect(ENDPOINT, {
//   transports: ["websocket"],
//   upgrade: true,
// });

const MainAplication: React.FC = () => {
  // const [response, setResponse] = useState("");
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
      if (PushUserInformation.status === 200) {
        // socket.on("connect", () => {
        //   socket.emit("enter", { id: 1, username: "fodase", photo: "phoy" });
        //   socket.on("enter", function (resultado: any) {
        //     console.log(resultado);
        //     console.log("oi");
        //   });
        // });
      }
    });
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      {!isValid ? (
        <Redirect to="/" />
      ) : (
        <>
          <LayoutCellApp />
          <LayoutDesktopApp />
        </>
      )}
    </div>
  );
};

export default MainAplication;
