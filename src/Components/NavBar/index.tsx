import React from 'react';

import { Container, NavLinks } from './style';

const NavBar: React.FC = () => {
  return (
      <Container>
          <NavLinks>
              <ul>
                  <li className="active">Sobre</li>
                  <li>Contato</li>
                  <li>Documentos</li>
                  <li>Login</li>
              </ul>
          </NavLinks>
      </Container>
  );
}

export default NavBar;