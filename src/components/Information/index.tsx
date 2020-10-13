import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import img1Sobre from "../../img/sobre/img1Sobre.png";
import img2Sobre from "../../img/sobre/img2Sobre.png";
import img3Sobre from "../../img/sobre/img3Sobre.png";
import company from "../../img/icones/company.svg";
import android from "../../img/icones/android.svg";
import dashboard from "../../img/icones/dashboard.svg";
import { MyRow, MyCol, TitleContent, TextContent } from "./style";
import "./Information.css";

const Information: React.FC = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <MyRow style={{ margin: "5% 0 0 0" }}>
        <Row
          className="d-flex justify-content-center"
          style={{ margin: 0, padding: "45px 0" }}
        >
          <MyCol>
            <Col>
              <Image src={img1Sobre} fluid />
            </Col>
          </MyCol>

          <MyCol className="text WithoutMarginT">
            <Col style={{ color: "var(--fontWhite)" }}>
              <TitleContent>Quem Vai?</TitleContent>

              <TextContent>
                é um aplicativo desenvolvido para que jovens e adultos possam
                interagir marcando encontros em áreas de lazer, para que
                pratiquem esportes ou qualquer outra atividade física em equipe.
                Além de conhecer pessoas novas ajudando em sua socialização, o
                foco é levar hábitos mais saudáveis como a prática das
                atividades propostas para a vida de diversas pessoas.
              </TextContent>
            </Col>
          </MyCol>
        </Row>
      </MyRow>

      <MyRow className="WithoutBG">
        <Row
          className="d-flex justify-content-center"
          style={{ margin: 0, padding: "45px 0" }}
        >
          <MyCol className="text">
            <Col>
              <TitleContent>Convide seus amigos </TitleContent>

              <TextContent>
                para participar dos eventos que você realiza, monte times,
                aumente seu nível de amizade se tornando melhor amigo de outro
                usuário, para ter acesso a mais informações pessoais. Faça novos
                amigos e junte a galera.
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

      <MyRow style={{ margin: "0 0 0 0" }}>
        <Row
          className="d-flex justify-content-center"
          style={{ margin: 0, padding: "45px 0" }}
        >
          <MyCol>
            <Col>
              <Image src={img3Sobre} fluid />
            </Col>
          </MyCol>

          <MyCol className="text WithoutMarginT">
            <Col style={{ color: "var(--fontWhite)" }}>
              <TitleContent>Melhores áreas de lazer</TitleContent>

              <TextContent>
                buscando por categorias da escolha do usuário. Encontre seu
                local ideal para realizar a atividade que possui em mente.
                Pesquisa de diversas quadras, praças, parques, etc., para tornar
                a experiência completa.
              </TextContent>
            </Col>
          </MyCol>
        </Row>
      </MyRow>

      {/* PLATAFORMAS */}
      <div className="DesktopInformation">
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
                  <Row
                    className=" justify-content-center"
                    style={{ padding: "0 10%" }}
                  >
                    Nosso aplicativo versão IOS conta com toda a fluidez que o
                    sistema operacional IOS nos disponibiliza, fazendo com que a
                    experiência do usuário seja muito mais confortável em
                    relação ao uso do aplicativo
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
                  <Row
                    className=" justify-content-center"
                    style={{ padding: "0 10%" }}
                  >
                    Assim como os sistemas embarcados baseados em Android, o
                    aplicativo Quem Vai é de fácil instalação e não exige altas
                    configurações do aparelho do usuário. Nosso aplicativo
                    Android também conta com verão Light para conexões à
                    internet limitadas.
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
                  <Row
                    className="justify-content-center"
                    style={{ padding: "0 10%" }}
                  >
                    Nosso sistema Web conta com as mais avançadas tecnologias de
                    desenvolvimento, para fazer da experiência do usuário, uma
                    experiência melhor. Temos um leque de configurações de
                    resolução para maior acessibilidade em diversos tamanhos de
                    tela diferentes
                  </Row>
                </MyRow>
              </Col>
            </MyCol>
          </Row>
        </MyRow>
      </div>

      <div className="CellPhoneInformation">
        <MyRow className="WithoutBG">
          <TitleContent className="plataforms">Plataformas</TitleContent>
          <Row className="d-flex justify-content-center">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
              data-interval="2500"
              data-pause="false"              
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                        <Row
                          className=" justify-content-center"
                          style={{ padding: "0 10%" }}
                        >
                          Nosso aplicativo versão IOS conta com toda a fluidez
                          que o sistema operacional IOS nos disponibiliza,
                          fazendo com que a experiência do usuário seja muito
                          mais confortável em relação ao uso do aplicativo.
                        </Row>
                      </MyRow>
                    </Col>
                  </MyCol>
                </div>

                <div className="carousel-item">
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
                        <Row
                          className=" justify-content-center"
                          style={{ padding: "0 10%" }}
                        >
                          Assim como os sistemas embarcados baseados em Android,
                          o aplicativo Quem Vai é de fácil instalação e não
                          exige altas configurações do aparelho do usuário.
                          Nosso aplicativo Android também conta com verão Light
                          para conexões à internet limitadas.
                        </Row>
                      </MyRow>
                    </Col>
                  </MyCol>
                </div>

                <div className="carousel-item">
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
                        <Row
                          className="justify-content-center"
                          style={{ padding: "0 10%" }}
                        >
                          Nosso sistema Web conta com as mais avançadas
                          tecnologias de desenvolvimento, para fazer da
                          experiência do usuário, uma experiência melhor. Temos
                          um leque de configurações de resolução para maior
                          acessibilidade em diversos tamanhos de tela
                          diferentes.
                        </Row>
                      </MyRow>
                    </Col>
                  </MyCol>
                </div>
              </div>
            </div>
          </Row>
        </MyRow>
      </div>
    </Container>
  );
};

export default Information;
