import React from "react";

import { Image, Form, FormControl} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import user from "../../img/icones/user.svg";
import banner2 from "../../img/banner/banner2.jpg";

import {MyForm} from './style';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <div>
      <Image src={banner2} fluid />
      <Navbar className="justify-content-between fixed-top">
        <Form inline>
            <MyForm><FormControl type="text" placeholder="Search for something" className="md-4" /></MyForm>
            
        </Form>
        <Form inline>
            <Image src={user} width="70px" rounded />
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
