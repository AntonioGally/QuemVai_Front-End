import React from "react";

// import { Container } from './styles';

export interface Props {
  show: boolean;
  onHide: any;
}

const ModalConfigUserApp: React.FC<Props> = ({ show, onHide }) => {
  return (
    <div>
      <h1> alo</h1>
    </div>
  );
};

export default ModalConfigUserApp;
