import React from "react";
import Header from "./components/Header";
import Square from "./components/Square";
import NavBar from "./components/NavBar";
import Information from "./components/Information";
import Footer from "./components/Footer";

const TitleContent1 = "Card 1";
const TitleContent2 = "Card 2";
const TitleContent3 = "Card 3";
const TitleContent4 = "Card 4";
const TitleContent5 = "Card 5";

const TextContent1 = "Text Card 1";
const TextContent2 = "Text Card 2";
const TextContent3 = "Text Card 3";
const TextContent4 = "Text Card 4";
const TextContent5 = "Text Card 5";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
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
}

export default App;
