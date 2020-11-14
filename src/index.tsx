import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import MobileRoutes from "./MobileRoutes";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <MobileRoutes />
    <Routes />
  </>,

  document.getElementById("root")
);
