import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { MyImage, MyRow, MyCol, TitleContent, TextContent } from "./styles";

export interface Props {
  image: string;
  title: string;
  text: string;
}

const Articles: React.FC<Props> = ({ image, title, text }) => {
  return (
    <Container fluid style={{ padding: "0" }}>
      <MyRow>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ margin: 0 }}
        >
          <MyCol>
            <Col>
              <MyImage src={image} />
            </Col>
          </MyCol>
          <MyCol>
            <Col>
              <TitleContent>{title}</TitleContent>

              <TextContent>{text}</TextContent>
            </Col>
          </MyCol>
        </Row>
      </MyRow>
    </Container>
  );
};

export default Articles;
