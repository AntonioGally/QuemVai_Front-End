import React from "react";

import {
  Wrapper,
  Container,
  ImageContent,
  TitleContent,
  TextContent,
} from "./style";
import img1Sobre from "../../images/sobre/img1Sobre.png";
import img2Sobre from "../../images/sobre/img2Sobre.png";
import img3Sobre from "../../images/sobre/img3Sobre.png";

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

      <Container className="plataforms">
        <TitleContent>
          <h1>Plataformas</h1>
        </TitleContent>

        <TextContent>
         
        </TextContent>

        <ImageContent>
          
        </ImageContent>
      </Container>
    </Wrapper>
  );
};

export default Main;
