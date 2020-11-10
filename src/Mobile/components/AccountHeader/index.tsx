import React from "react";
import { Redirect } from "react-router-dom";
import { Container, ArrowBackIcon, Title, Photo } from "./styles";

const AccountHeader: React.FC = () => {
  const [backIcon, setBackIcon] = React.useState(false);

  if (backIcon) {
    return <Redirect to="/MainAplication" />;
  }
  return (
    <Container>
      <div>
        <ArrowBackIcon onClick={() => setBackIcon(true)} />
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
