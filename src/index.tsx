import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";
import Contato from "./Pages/Contato";
import Documentos from "./Pages/Documentos";
import MainAplication from "./Pages/MainAplication";
import AdminQuadras from "./Pages/AdminQuadras";
import AdminEmail from "./Pages/AdminEmail";
import AdminEsportes from "./Pages/AdminEsportes";

import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

import { isAuthenticatedAdmin } from "./components/services/auth";
import { isAuthenticated } from "./components/services/auth";

const PrivateRouteUser = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {        
        if (isAuthenticated() || isAuthenticatedAdmin()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }        
      }}
    />
  );
};

const PrivateRouteAdmin = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticatedAdmin() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Contato" component={Contato} />
        <Route path="/Documentos" component={Documentos} />
        <PrivateRouteUser path="/MainAplication" component={MainAplication} />
        <PrivateRouteAdmin path="/AdminQuadras" component={AdminQuadras} />
        <PrivateRouteAdmin path="/AdminEmail" component={AdminEmail} />
        <PrivateRouteAdmin path="/AdminEsportes" component={AdminEsportes} />
      </Switch>
    </HashRouter>
  </>,

  document.getElementById("root")
);
