import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import { MyHeader } from "./styles";
import {logout} from "../../components/services/auth";
import NavBarAdmin from "../../components/NavBarAdmin";
import EmailReceived from "../../components/EmailReceived";
import EmailResponded from "../../components/EmailResponded";
import EmailViewRespondLayout from '../../components/EmailViewRespondLayout';
import Footer from "../../components/Footer";

// import { Container } from './styles';

const AdminEmail: React.FC = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <header>
        <MyHeader>
          <Link to="/" onClick={() => logout()}>
            <span>Sair</span>
          </Link>

          <h3>admin</h3>
        </MyHeader>
      </header>

      <NavBarAdmin />

      <EmailResponded />
      <EmailReceived />
      <EmailViewRespondLayout />
      

      <Footer />
    </Container>
  );
};

export default AdminEmail;
