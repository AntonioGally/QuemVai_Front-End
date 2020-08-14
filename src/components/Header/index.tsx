import React from "react";

import { Image, Form, FormControl} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import user from "../../img/icones/user.svg";
import banner2 from "../../img/banner/banner2.jpg";

import {MyForm, Teste} from './style';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <div style={{height:"100%"}}>
      <Image src={banner2} fluid />
      <Teste><Navbar className="justify-content-between" >
        <Form inline>
            <MyForm><FormControl type="text" placeholder="Search for something" className="md-4" /></MyForm>
            
        </Form>
        <Form inline>
            <Image src={user} width="70px" rounded style={{cursor:"pointer"}}/>
        </Form>
      </Navbar></Teste>
      
    </div>
  );
};

export default Header;
