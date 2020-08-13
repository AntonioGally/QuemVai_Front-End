import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import img1Sobre from "../../img/sobre/img1Sobre.png";
import img2Sobre from "../../img/sobre/img2Sobre.png";
import img3Sobre from "../../img/sobre/img3Sobre.png";
import { MyRow, MyCol, TitleContent, TextContent } from "./style";

const Information: React.FC = () => {
  return (

    <Container fluid style={{padding: 0}}>
      <MyRow style={{margin: "5% 0 0 0"}}>
        <Row className="d-flex justify-content-center" style={{margin:0}}>
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
        <Row className="d-flex justify-content-center" style={{margin:0}}>

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



			<MyRow style={{margin: "5% 0 0 0"}}>
        <Row className="d-flex justify-content-center" style={{margin:0}}>
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

			<MyRow className="WithoutBG">
			<TitleContent className="plataforms">Lorem Ipsum</TitleContent>
				<Row>
				
					<MyCol>
						<Col>
						aaaas
						</Col>
					</MyCol>

					<MyCol>
						<Col>
						aaaas
						</Col>
					</MyCol>

					<MyCol>
						<Col>
						aaaas
						</Col>
					</MyCol>

				</Row>
			</MyRow>
    </Container>
		
  );
};

export default Information;
