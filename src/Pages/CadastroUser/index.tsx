import React from "react";

// import { Container } from './styles';

import Header from "../../FrontPage/Header";
import NavBar from "../../FrontPage/NavBar";
import FormCadastro from "../../FrontPage/FormCadastro";
import Footer from "../../FrontPage/Footer";

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
