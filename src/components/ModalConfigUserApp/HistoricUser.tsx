import React from "react";
import "./ModalConfigStyles.css";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";
// import { Container } from './styles';

const ModalConfigUserApp: React.FC = () => {
  return (
    <div className="WrapperModalConfig">
      <div className="MySvgGerenciarUserModal">
        <img src={SvgModalConfigUser} alt="Art Top" />
      </div>
      <h1>Histórico do usuário</h1>
    </div>
  );
};

export default ModalConfigUserApp;
