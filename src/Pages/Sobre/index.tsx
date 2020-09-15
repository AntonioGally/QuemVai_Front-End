import React from "react";

import Header from "../../components/Header";
import Square from "../../components/Square";
import NavBar from "../../components/NavBar";
import Information from "../../components/Information";
import Footer from "../../components/Footer";

const TitleContent1 = "O Aplicativo";
const TitleContent2 = "A Empresa";
const TitleContent3 = "Plataformas";
const TitleContent4 = "Localização";
const TitleContent5 = "Social";

const TextContent1 = "Desenvolvido com o intuito de marcar encontros em áreas de lazer públicas.";
const TextContent2 = "Chume Company é uma empresa de desenvolvimento de sistemas.";
const TextContent3 = "O Aplicativo Quem Vai está disponível para Android e IOS, e também para plataforma Web.";
const TextContent4 = "Localize as Áreas de lazer mais próximas de você e de seus amigos!";
const TextContent5 = "Encontre novos amigos no Aplicativo Quem Vai!";

const Sobre: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Square
        TitleContent1={TitleContent1}
        TitleContent2={TitleContent2}
        TitleContent3={TitleContent3}
        TitleContent4={TitleContent4}
        TitleContent5={TitleContent5}
        TextContent1={TextContent1}
        TextContent2={TextContent2}
        TextContent3={TextContent3}
        TextContent4={TextContent4}
        TextContent5={TextContent5}
      />
      <Information />
      <Footer />
    </div>
  );
};

export default Sobre;
