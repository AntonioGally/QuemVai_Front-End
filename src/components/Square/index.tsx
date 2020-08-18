import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyRow, SquareStyle, MyCol } from "./style";
import "./styles.css";
// import QuemVaiLogo from "../../img/logo/QuemVaiLogo.png";

const Square: React.FC = () => {
  return (
    <Container fluid>
      <div className="BreakPoint-1">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
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
                </Row>
              </MyRow>
            </div>
            <div className="carousel-item">
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
                      <SquareStyle className="red" />
                    </Col>
                  </MyCol>
                </Row>
              </MyRow>
            </div>
          </div>
        </div>
      </div>


    <div className="BreakPoint-0">
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
      </div>
    </Container>
  );
};

export default Square;
