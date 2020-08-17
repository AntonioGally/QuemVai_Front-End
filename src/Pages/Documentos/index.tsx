import React from "react";

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
// import SideBar from "../../components/SideBar";
import InformationDocument from '../../components/InformationDocument';
const Documentos: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <InformationDocument />
    </div>
  );
};

export default Documentos;
