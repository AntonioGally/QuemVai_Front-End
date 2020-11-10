import React from "react";

import App from "./App";
import Contato from "./Pages/Contato";
import Documentos from "./Pages/Documentos";
import CadastroUser from "./Pages/CadastroUser";
import ForgotPassword from "./Pages/ForgotPassword";
import MainAplication from "./Pages/MainAplication";
import AdminQuadras from "./Pages/AdminQuadras";
import AdminEmail from "./Pages/AdminEmail";
import AdminEsportes from "./Pages/AdminEsportes";

import Friends from "./Pages/Mobile/Friends";
import SearchByName from "./Pages/Mobile/SearchByName";
import ManagementUser from "./Pages/Mobile/ManagementUser";

import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

import {
  isAuthenticatedAdmin,
  isAuthenticated,
} from "./services/auth";
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
        <PrivateRouteUser path="/MobileFriends" component={Friends} />
        <PrivateRouteUser path="/MobileSearchByName" component={SearchByName} />
        <PrivateRouteUser path="/MobileManegementUser" component={ManagementUser} />
        <PrivateRouteAdmin path="/AdminQuadras" component={AdminQuadras} />
        <PrivateRouteAdmin path="/AdminEmail" component={AdminEmail} />
        <PrivateRouteAdmin path="/AdminEsportes" component={AdminEsportes} />
      </Switch>
    </HashRouter>
  );
};

export default src;
