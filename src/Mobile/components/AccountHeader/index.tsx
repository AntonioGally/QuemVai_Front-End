import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Container, ArrowBackIcon, ExitIcon, Title, Photo } from "./styles";
import { logout } from "../../../services/auth";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

import { usePhotosContext } from "../../../Context/ReloadPhotoMobile";

const AccountHeader: React.FC = () => {
  const [backIcon, setBackIcon] = React.useState(false);
  const [exitIcon, setExitIcon] = React.useState(false);
  const [photos, setPhotos] = React.useState("");

  const { reload } = usePhotosContext();

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
      if (PushUserInformation.status === 200) {
        setPhotos(results["info"]["photos"]);
      }
    });
  }, [reload]);

  if (exitIcon) {
    logout();
    return <Redirect to="/" />;
  }

  if (backIcon) {
    return <Redirect to="/MainAplication" />;
  }
  return (
    <Container>
      <div
        className="row"
        style={{ margin: 0, justifyContent: "space-between" }}
      >
        <ArrowBackIcon onClick={() => setBackIcon(true)} />
        <ExitIcon onClick={() => setExitIcon(true)} />
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ alignItems: "center" }}
      >
        <Title>Perfil</Title>
        {!photos ? (
          <Spinner animation="border" />
        ) : (
          <Photo src={photos} alt="User" />
        )}
      </div>
    </Container>
  );
};

export default AccountHeader;
