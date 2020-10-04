import React from "react";

import { Modal, Row, Col } from "react-bootstrap";

import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

export interface Props {
  show: boolean;
  onHide: any;
}

const SideBarApp: React.FC<Props> = ({ show, onHide }) => {
  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <div className="WrapperModalCreateEvent">
        <div className="MySvgGerenciarUserModal" style={{width:"220px" ,height:"unset"}}>
          <img src={SvgModalConfigUser} alt="Art Top" width="100%"/>
        </div>
        <Modal.Body style={{ padding: 20 }}>
            
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default SideBarApp;
