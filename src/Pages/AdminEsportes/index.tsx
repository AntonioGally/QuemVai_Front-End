import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import { MyHeader } from "./styles";

import NavBarAdmin from "../../components/NavBarAdmin";
import EsportesExistentesAdmin from "../../components/EsportesExistentesAdmin";
import EsportesConfigAddLauout from "../../components/EsportesConfigAddLayout";
import Footer from "../../components/Footer";

const AdminEsportes: React.FC = () => {
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
