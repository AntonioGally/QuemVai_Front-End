import React from 'react';

import { Container, NavLinks } from './style';

const NavBar: React.FC = () => {
  return (
      <Container>
          <NavLinks>
              <ul>
                  <li className="active">SOBRE</li>
                  <li>PLATAFORMAS</li>
                  <li>CONTATO</li>
                  <li>DOCUMENTOS</li>
              </ul>
          </NavLinks>
      </Container>
  );
}

export default NavBar;