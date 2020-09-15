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

import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

import {
  isAuthenticatedAdmin,
  isAuthenticated,
} from "./components/services/auth";
// import api from "./components/services/api";

// useEffect(() => {

//   Promise.all([
//     api.get("/api/user/bring/me", {
//       headers: { "x-auth-token": token },
//     }),
//   ]).then(async (responses) => {
//     const [AllEmailsReceived] = responses;
//     const emails = await AllEmailsReceived.data;
//     if (emails.data["auth"] === false){
//       setValid(false);
//     }
//     if (emails.data["auth"] === true){
//       setValid(true);
//     }
//   });
// }, []);
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
        <PrivateRouteAdmin path="/AdminQuadras" component={AdminQuadras} />
        <PrivateRouteAdmin path="/AdminEmail" component={AdminEmail} />
        <PrivateRouteAdmin path="/AdminEsportes" component={AdminEsportes} />
      </Switch>
    </HashRouter>
  );
};

export default src;
