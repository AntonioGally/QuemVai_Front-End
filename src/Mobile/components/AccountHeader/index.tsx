import React from "react";
import { Redirect } from "react-router-dom";
import { Container, ArrowBackIcon, ExitIcon, Title, Photo } from "./styles";
import { logout } from "../../../services/auth";

const AccountHeader: React.FC = () => {
  const [backIcon, setBackIcon] = React.useState(false);
  const [exitIcon, setExitIcon] = React.useState(false);

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
        <Photo
          src="https://quemvai.blob.core.windows.net/fotos/d88a262f-df82-9aca-0dcd-e2b59e542a5a.jpg"
          alt="User"
        />
      </div>
    </Container>
  );
};

export default AccountHeader;
