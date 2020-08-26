import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import { MyHeader } from "./styles";
import NavBarAdmin from "../../components/NavBarAdmin";
import QuadrasExistentesAdmin from "../../components/QuadrasExistentesAdmin";
import ConfigQuadrasAdmin from "../../components/ConfigQuadrasAdmin";
import Footer from "../../components/Footer";

const Admin: React.FC = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <header>
        <MyHeader>
          <Link to="/">
            <span>Sair</span>
          </Link>

          <h3>admin@admin.com</h3>
        </MyHeader>
      </header>
      <NavBarAdmin />

      <QuadrasExistentesAdmin />
      <ConfigQuadrasAdmin />

      <Footer />
    </Container>
  );
};

export default Admin;
