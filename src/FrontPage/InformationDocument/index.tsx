import React from "react";
import { Container } from "react-bootstrap";
import Article from "../Articles";
import "./styles.css";
// import { Container } from './styles';

const Text1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const InformationDocument: React.FC = () => {
  return (
    <div className="wrapper">
      <Container fluid>        
        <Article image={""} title={"Lorem Impsum1"} text={Text1} />
        <Article image={""} title={"Lorem Impsum2"} text={Text1} />
        <Article image={""} title={"Lorem Impsum3"} text={Text1} />
        <Article image={""} title={"Lorem Impsum4"} text={Text1+Text1} />
      </Container>
    </div>


  );
};

export default InformationDocument;
