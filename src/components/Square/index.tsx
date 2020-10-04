import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyRow, MyCol } from "./style";
import "./styles.css";
// import QuemVaiLogo from "../../img/logo/QuemVaiLogo.png";

export interface Props {
  TitleContent1: string;
  TitleContent2: string;
  TitleContent3: string;
  TitleContent4: string;
  TitleContent5: string;

  TextContent1: string;
  TextContent2: string;
  TextContent3: string;
  TextContent4: string;
  TextContent5: string;
}

const Square: React.FC<Props> = ({  
  TitleContent1,
  TitleContent2,
  TitleContent3,
  TitleContent4,
  TitleContent5,

  TextContent1,
  TextContent2,
  TextContent3,
  TextContent4,
  TextContent5,
}) => {
  return (
    <Container fluid>
      <div className="BreakPoint-0">
        <MyRow>
          <Row className="d-flex justify-content-center">
            <MyCol>
              <Col>
                <div
                  className="card border-primary MyCard"
                  style={{ width: "250px", height: "250px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-primary">{TitleContent1}</h5>
                    <p className="card-text">{TextContent1}</p>
                  </div>
                </div>
              </Col>
            </MyCol>

            <MyCol>
              <Col>
                <div
                  className="card border-primary MyCard"
                  style={{ width: "250px", height: "250px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-primary">{TitleContent2}</h5>
                    <p className="card-text">{TextContent2}</p>
                  </div>
                </div>
              </Col>
            </MyCol>

            <MyCol>
              <Col>
                <div
                  className="card border-primary MyCard"
                  style={{ width: "250px", height: "250px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-primary">{TitleContent3}</h5>
                    <p className="card-text">{TextContent3}</p>
                  </div>
                </div>
              </Col>
            </MyCol>

            <MyCol>
              <Col>
                <div
                  className="card border-primary MyCard"
                  style={{ width: "250px", height: "250px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-primary">{TitleContent4}</h5>
                    <p className="card-text">{TextContent4}</p>
                  </div>
                </div>
              </Col>
            </MyCol>

            <MyCol>
              <Col>
                <div
                  className="card border-primary MyCard"
                  style={{ width: "250px", height: "250px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-primary">{TitleContent5}</h5>
                    <p className="card-text">{TextContent5}</p>
                  </div>
                </div>
              </Col>
            </MyCol>
          </Row>
        </MyRow>
      </div>

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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent1}
                          </h5>
                          <p className="card-text">{TextContent1}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent2}
                          </h5>
                          <p className="card-text">{TextContent2}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent3}
                          </h5>
                          <p className="card-text">{TextContent3}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent4}
                          </h5>
                          <p className="card-text">{TextContent4}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent2}
                          </h5>
                          <p className="card-text">{TextContent2}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent3}
                          </h5>
                          <p className="card-text">{TextContent3}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent4}
                          </h5>
                          <p className="card-text">{TextContent4}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent5}
                          </h5>
                          <p className="card-text">{TextContent5}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>
                </Row>
              </MyRow>
            </div>
          </div>
        </div>
      </div>

      <div className="BreakPoint-2">
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent1}
                          </h5>
                          <p className="card-text">{TextContent1}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent2}
                          </h5>
                          <p className="card-text">{TextContent2}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent3}
                          </h5>
                          <p className="card-text">{TextContent3}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent2}
                          </h5>
                          <p className="card-text">{TextContent2}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent3}
                          </h5>
                          <p className="card-text">{TextContent3}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent4}
                          </h5>
                          <p className="card-text">{TextContent4}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent3}
                          </h5>
                          <p className="card-text">{TextContent3}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent4}
                          </h5>
                          <p className="card-text">{TextContent4}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent5}
                          </h5>
                          <p className="card-text">{TextContent5}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>
                </Row>
              </MyRow>
            </div>
          </div>
        </div>
      </div>

      <div className="BreakPoint-3">
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent1}
                          </h5>
                          <p className="card-text">{TextContent1}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent2}
                          </h5>
                          <p className="card-text">{TextContent2}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent2}
                          </h5>
                          <p className="card-text">{TextContent2}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent3}
                          </h5>
                          <p className="card-text">{TextContent3}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent3}
                          </h5>
                          <p className="card-text">{TextContent3}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent4}
                          </h5>
                          <p className="card-text">{TextContent4}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent4}
                          </h5>
                          <p className="card-text">{TextContent4}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>

                  <MyCol>
                    <Col>
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent5}
                          </h5>
                          <p className="card-text">{TextContent5}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>
                </Row>
              </MyRow>
            </div>
          </div>
        </div>
      </div>

      <div className="BreakPoint-4">
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent1}
                          </h5>
                          <p className="card-text">{TextContent1}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent2}
                          </h5>
                          <p className="card-text">{TextContent2}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent3}
                          </h5>
                          <p className="card-text">{TextContent3}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent4}
                          </h5>
                          <p className="card-text">{TextContent4}</p>
                        </div>
                      </div>
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
                      <div
                        className="card border-primary MyCard"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title text-primary">
                            {TitleContent5}
                          </h5>
                          <p className="card-text">{TextContent5}</p>
                        </div>
                      </div>
                    </Col>
                  </MyCol>
                </Row>
              </MyRow>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Square;
