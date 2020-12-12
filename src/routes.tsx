import React from "react";

import App from "./App";
import Contato from "./Pages/Contato";
import Documentos from "./Pages/Documentos";
import CadastroUser from "./Pages/CadastroUser";
import ForgotPassword from "./Pages/ForgotPassword";
import MainAplication from "./Pages/MainAplication";
import Admin from "./Pages/Admin";




import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

import { isAuthenticatedAdmin, isAuthenticated } from "./services/auth";
const src: React.FC = () => {
  const PrivateRouteUser = ({ component: Component, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (isAuthenticated() || isAuthenticatedAdmin()) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
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

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Contato" component={Contato} />
        <Route path="/Documentos" component={Documentos} />
        <Route path="/CadastroUser" component={CadastroUser} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <PrivateRouteUser path="/MainAplication" component={MainAplication} />        
        <PrivateRouteAdmin path="/Admin" component={Admin} />
      </Switch>
    </HashRouter>
  );
};

export default src;
