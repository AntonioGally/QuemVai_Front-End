import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import img1Sobre from "../../img/sobre/img1Sobre.png";
import img2Sobre from "../../img/sobre/img2Sobre.png";
import img3Sobre from "../../img/sobre/img3Sobre.png";
import company from "../../img/icones/company.svg";
import android from "../../img/icones/android.svg";
import dashboard from "../../img/icones/dashboard.svg";
import { MyRow, MyCol, TitleContent, TextContent } from "./style";

const Information: React.FC = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <MyRow style={{ margin: "5% 0 0 0" }}>
        <Row className="d-flex justify-content-center" style={{ margin: 0 }}>
          <MyCol>
            <Col>
              <Image src={img1Sobre} fluid />
            </Col>
          </MyCol>

          <MyCol className="text WithoutMarginT">
            <Col>
              <TitleContent>Lorem Ipsum</TitleContent>

              <TextContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </TextContent>
            </Col>
          </MyCol>
        </Row>
      </MyRow>

      <MyRow className="WithoutBG">
        <Row className="d-flex justify-content-center" style={{ margin: 0 }}>
          <MyCol className="text">
            <Col>
              <TitleContent>Lorem Ipsum</TitleContent>

              <TextContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </TextContent>
            </Col>
          </MyCol>

          <MyCol>
            <Col>
              <Image src={img2Sobre} fluid />
            </Col>
          </MyCol>
        </Row>
      </MyRow>

      <MyRow style={{ margin: "5% 0 0 0" }}>
        <Row className="d-flex justify-content-center" style={{ margin: 0 }}>
          <MyCol>
            <Col>
              <Image src={img3Sobre} fluid />
            </Col>
          </MyCol>

          <MyCol className="text WithoutMarginT">
            <Col>
              <TitleContent>Lorem Ipsum</TitleContent>

              <TextContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </TextContent>
            </Col>
          </MyCol>
        </Row>
      </MyRow>



{/* PLATAFORMAS */}
      <MyRow className="WithoutBG">
        <TitleContent className="plataforms">Plataformas</TitleContent>
        <Row className="d-flex justify-content-center">
          <MyCol className="ColPlataform">
            <Col>
              <MyRow className="RowPlataform">
                <Row className="justify-content-center">
                  <Image
                    src={company}
                    fluid
                    style={{ height: "110px", width: "110px" }}
                  />
                </Row>
              </MyRow>

              <MyRow className="RowPlataform">
                <Row className=" justify-content-center">
                  <h3>IOS</h3>
                </Row>
              </MyRow>

              <MyRow className="RowPlataform">
                <Row className=" justify-content-center" style={{padding:"0 10%"}}>
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
                </Row>
              </MyRow>
            </Col>
          </MyCol>

          <MyCol className="ColPlataform">
          <Col>
              <MyRow className="RowPlataform">
                <Row className="justify-content-center">
                  <Image
                    src={android}
                    fluid
                    style={{ height: "110px", width: "110px" }}
                  />
                </Row>
              </MyRow>

              <MyRow className="RowPlataform">
                <Row className=" justify-content-center">
                  <h3>Android</h3>
                </Row>
              </MyRow>

              <MyRow className="RowPlataform">
                <Row className=" justify-content-center" style={{padding:"0 10%"}}>
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
                </Row>
              </MyRow>
            </Col>
          </MyCol>

          <MyCol className="ColPlataform">
          <Col>
              <MyRow className="RowPlataform">
                <Row className="justify-content-center">
                  <Image
                    src={dashboard}
                    fluid
                    style={{ height: "110px", width: "110px" }}
                  />
                </Row>
              </MyRow>

              <MyRow className="RowPlataform">
                <Row className=" justify-content-center">
                  <h3>Web</h3>
                </Row>
              </MyRow>

              <MyRow className="RowPlataform">
                <Row className="justify-content-center" style={{padding:"0 10%"}}>
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
                </Row>
              </MyRow>
            </Col>
          </MyCol>
        </Row>
      </MyRow>
    </Container>
  );
};

export default Information;
