import React from "react";

import { Modal } from "react-bootstrap";
import Development2 from "../../../img/materiais/Development2.svg";



export interface Props {
  show: boolean;
  onHide: Function;
}

const ModalDevelopment: React.FC<Props> = ({ show, onHide }) => {
  return (
    <div>
      <Modal size="lg" centered show={show} onHide={onHide}>
        <Modal.Body style={{ overflow: "auto" }}>
          <div className="text-center" style={{ margin: "3% 0 6%" }}>
            <h3 style={{ fontFamily: "Poppins" }}>
              Procurando bugs o.O (Desenvolvimento)
            </h3>
          </div>
          <img
            src={Development2}
            alt="Development Explanation"
            style={{ width: "100%", height: "100%" }}
          />          
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalDevelopment;
