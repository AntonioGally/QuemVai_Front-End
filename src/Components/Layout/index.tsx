import React from 'react';

import { Container, Wrapper } from './style';
import Header from '../Header';
import NavBar from '../NavBar';
import Main from '../Main';

const Layout: React.FC = () => {
  return(
    <Container>
      <Wrapper>
        <Header />
        <NavBar />
        <Main />
      </Wrapper>
    </Container>
  );
}

export default Layout;