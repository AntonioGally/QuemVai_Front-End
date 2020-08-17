import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { MyImage, MyRow, MyCol, TitleContent, TextContent } from "./styles";

const Article1: React.FC = () => {
  return (
   
      <Container fluid style={{ padding: "0" }}>
        <MyRow>
          <Row
            className="d-flex justify-content-center align-items-center"
            style={{ margin: 0 }}
          >
            <MyCol>
              <Col>
                <MyImage />
              </Col>
            </MyCol>
            <MyCol>
              <Col>
                <TitleContent>Lorem Ipsum</TitleContent>

                <TextContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </TextContent>
              </Col>
            </MyCol>
          </Row>
        </MyRow>
      </Container>

  );
};

export default Article1;
