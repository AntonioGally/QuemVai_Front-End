import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import { Container } from "react-bootstrap";
import { MyHeader } from "./styles";

import NavBarAdmin from "../../components/NavBarAdmin";
import EsportesExistentesAdmin from "../../components/EsportesExistentesAdmin";
import EsportesConfigAddLauout from "../../components/EsportesConfigAddLayout";
import Footer from "../../components/Footer";

import api from "../../components/services/api";
import { Token, logout } from "../../components/services/auth";

const AdminEsportes: React.FC = () => {
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
    <Container fluid style={{ padding: 0 }}>
      <header>
        <MyHeader>
          <Link to="/">
            <span>Voltar</span>
          </Link>

          <Link to="/MainAplication">
            <span>Aplicativo</span>
          </Link>
        </MyHeader>
      </header>
      <NavBarAdmin />

      <EsportesExistentesAdmin />
      <EsportesConfigAddLauout />
      <Footer />
    </Container>
  );
};

export default AdminEsportes;
