import React from "react";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import FormContato from "../../components/FormContato";

const Contato: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <FormContato />
    </div>
  );
};

export default Contato;
