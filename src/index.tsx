import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";



ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,

  document.getElementById("root")
);
