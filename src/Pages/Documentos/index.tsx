import React from "react";

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
// import SideBar from "../../components/SideBar";
import InformationDocument from '../../components/InformationDocument';
import Footer from '../../components/Footer';
const Documentos: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <InformationDocument />

      <Footer />
    </div>
  );
};

export default Documentos;
