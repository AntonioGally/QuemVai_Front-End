import React from 'react';
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import { MyHeader } from "./styles";
import NavBarAdmin from "../../components/NavBarAdmin";

// import Footer from "../../components/Footer";

// import { Container } from './styles';

const AdminEmail: React.FC = () => {
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
    

    
    {/* <Footer /> */}
  </Container>
  );
}

export default AdminEmail;