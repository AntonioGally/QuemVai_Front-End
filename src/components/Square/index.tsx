import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyRow, SquareStyle, MyCol } from "./style";

const Square: React.FC = () => {
  return (
    <Container fluid>
      <MyRow>
        <Row className="d-flex justify-content-center">
          <MyCol>
            <Col>
              <SquareStyle />
            </Col>
          </MyCol>

          <MyCol>
            <Col>
              <SquareStyle />
            </Col>
          </MyCol>

          <MyCol>
            <Col>
              <SquareStyle />
            </Col>
          </MyCol>

          <MyCol>
            <Col>
              <SquareStyle />
            </Col>
          </MyCol>

          <MyCol>
            <Col>
              <SquareStyle />
            </Col>
          </MyCol>

        </Row>
      </MyRow>
    </Container>
  );
};

export default Square;
