import React from "react";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import FormContato from "../../components/FormContato";
import Footer from '../../components/Footer';

const Contato: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <FormContato />
      <Footer />
    </div>
  );
};

export default Contato;
