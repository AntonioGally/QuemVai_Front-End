import React, { useState } from "react";

import { Image, Form, FormControl, Modal, Navbar } from "react-bootstrap";
import ModalLogin from "../ModalLogin";

import banner2 from "../../img/banner/banner2.jpg";

import {  MyNav } from "./style";
import './styles.css';

const Header: React.FC = () => {
  const user = "https://whowill.blob.core.windows.net/fotos/4f5133bf-ae84-9fa6-3193-c9d45caad795.jpg";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ height: "100%" }}>
      <Image src={banner2} fluid />
      <MyNav>
        <Navbar className="justify-content-between">    
           <Form inline className="InputDesktop">
              
                <FormControl type="text" placeholder="Search for something" />
              
            </Form>        
          <Form inline>
            <Image
              src={user}
              width="70px"
              rounded
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            />
          </Form>
        </Navbar>
      </MyNav>

      <Modal show={show} onHide={handleClose} centered size="xl">
        <ModalLogin />
      </Modal>
    </div>
  );
};

export default Header;
