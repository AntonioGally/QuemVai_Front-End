import React from "react";

import {
  Container,
  Nav,
  Search,
  SearchInput,
  SearchIcon,
  Avatar,
  Banner,
} from "./style";
import banner from "../../images/banner/banner2.jpg";
import imagem from "./user.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Banner>
        <img src={banner} alt="banner" />
      </Banner>
      <Nav>
        <Search>
          <SearchInput placeholder="Type some text to fodase?" />
          <SearchIcon />
        </Search>
        <Avatar>
          <img src={imagem} alt="user"/>
        </Avatar>
      </Nav>
    </Container>
  );
};

export default Header;
