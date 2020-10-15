import React from "react";

import Header from "../../FrontPage/Header";
import NavBar from "../../FrontPage/NavBar";
import FormContato from "../../FrontPage/FormContato";
import Footer from '../../FrontPage/Footer';

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
