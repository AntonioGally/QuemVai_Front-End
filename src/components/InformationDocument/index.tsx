import React from 'react';
import {Container} from 'react-bootstrap';
import Article1 from '../Articles/Article1';
import Article2 from '../Articles/Article2';
import './styles.css';
// import { Container } from './styles';

const InformationDocument: React.FC = () => {
  return (
    <div className="wrapper">
      <Container fluid>
          <Article1 />
          <Article2 />
      </Container>
      </div>
  );
}

export default InformationDocument;