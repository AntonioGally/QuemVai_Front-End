import React from "react";

// import { Container } from './styles';

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import FormCadastro from "../../components/FormCadastro";
import Footer from "../../components/Footer";

const CadastroUser: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <FormCadastro />
      <Footer />
    </div>
  );
};

export default CadastroUser;
