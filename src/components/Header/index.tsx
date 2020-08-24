import React from "react";

import { Image, Form, FormControl, Navbar } from "react-bootstrap";
import ModalLogin from "../ModalLogin";

import banner2 from "../../img/banner/banner2.jpg";

import {  MyNav } from "./style";
import './styles.css';

const Header: React.FC = () => {
  const user = "https://whowill.blob.core.windows.net/fotos/4f5133bf-ae84-9fa6-3193-c9d45caad795.jpg";

  const [modalShow, setModalShow] = React.useState(false);

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
              onClick={() => setModalShow(true)}
            />
          </Form>
        </Navbar>

        <ModalLogin show={modalShow}   onHide={() => setModalShow(false)}/>
      </MyNav>
    </div>
  );
};

export default Header;
