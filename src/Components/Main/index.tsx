import React from "react";

import {
  Wrapper,
  Container,
  ImageContent,
  TitleContent,
  TextContent,
  PlataformWrapper,
  Plataform,
  ContainerPlataform,
  ImageContentPlataform,
  TitleContentPlataform,
  TextContentPlataform,
  ContainerFooter
} from "./style";
import img1Sobre from "../../images/sobre/img1Sobre.png";
import img2Sobre from "../../images/sobre/img2Sobre.png";
import img3Sobre from "../../images/sobre/img3Sobre.png";
import company from "../../images/icones/company.svg";
import android from '../../images/icones/android.svg';
import dashboard from '../../images/icones/dashboard.svg';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <ImageContent>
          <img src={img1Sobre} alt="imagem" />
        </ImageContent>

        <TitleContent>
          <h3>Lorem Impsum</h3>
        </TitleContent>

        <TextContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500sLorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500sLorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s
        </TextContent>
      </Container>

      <Container className="withoutBg">
        <TitleContent>
          <h3>Lorem Impsum</h3>
        </TitleContent>

        <TextContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500sLorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500sLorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s
        </TextContent>

        <ImageContent>
          <img src={img2Sobre} alt="imagem" />
        </ImageContent>
      </Container>

      <Container>
        <ImageContent>
          <img src={img3Sobre} alt="imagem" />
        </ImageContent>

        <TitleContent>
          <h3>Lorem Impsum</h3>
        </TitleContent>

        <TextContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500sLorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500sLorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s
        </TextContent>
      </Container>

      <ContainerPlataform>
        <TitleContent className="plataforms">
          <h2>Plataformas</h2>
        </TitleContent>

        <PlataformWrapper>


          <Plataform>
            <ImageContentPlataform>
              <img src={company} alt="iphone" />
            </ImageContentPlataform>

            <TitleContentPlataform>Lorem Ipsum</TitleContentPlataform>

            <TextContentPlataform>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500sLorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500sLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </TextContentPlataform>
          </Plataform>


          <Plataform>
            <ImageContentPlataform>
              <img src={android} alt="android" />
            </ImageContentPlataform>

            <TitleContentPlataform>Lorem Ipsum</TitleContentPlataform>

            <TextContentPlataform>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500sLorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500sLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </TextContentPlataform>
          </Plataform>
          <Plataform>
            <ImageContentPlataform>
              <img src={dashboard} alt="web" />
            </ImageContentPlataform>

            <TitleContentPlataform>Lorem Ipsum</TitleContentPlataform>

            <TextContentPlataform>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500sLorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500sLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </TextContentPlataform>
          </Plataform>
        </PlataformWrapper>
      </ContainerPlataform>

      <footer>
        <ContainerFooter/>
      </footer>
    </Wrapper>
  );
};

export default Main;
