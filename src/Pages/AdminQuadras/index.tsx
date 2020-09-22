import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import { MyHeader } from "./styles";
import NavBarAdmin from "../../components/NavBarAdmin";
import QuadrasExistentesAdmin from "../../components/QuadrasExistentesAdmin";
import QuadrasConfigAddLayout from "../../components/QuadrasConfigAddLayout";
import Footer from "../../components/Footer";

const Admin: React.FC = () => {
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

      <QuadrasExistentesAdmin />
      <QuadrasConfigAddLayout />
      <Footer />
    </Container>
  );
};

export default Admin;
