import React from "react";
import Header from "./components/Header";
import Square from "./components/Square";
import NavBar from "./components/NavBar";
import Information from "./components/Information";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Square />
      <Information />

      <Footer />
    </div>
  );
}

export default App;
