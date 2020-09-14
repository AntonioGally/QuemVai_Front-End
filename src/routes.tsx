import React, {useEffect} from "react";

import App from "./App";
import Contato from "./Pages/Contato";
import Documentos from "./Pages/Documentos";
import CadastroUser from "./Pages/CadastroUser";
import MainAplication from "./Pages/MainAplication";
import AdminQuadras from "./Pages/AdminQuadras";
import AdminEmail from "./Pages/AdminEmail";
import AdminEsportes from "./Pages/AdminEsportes";

import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

import { isAuthenticatedAdmin, isAuthenticated, getTokenAdmin } from "./components/services/auth";
import api from "./components/services/api";


// const [valid, setValid] = React.useState(false);
// const [token, setToken] = React.useState("");

// if (getTokenAdmin()) {
//   var auxToken = localStorage.getItem("@QuemVaiAdmin-Token");
  
// }


// useEffect(() => {
//   Promise.all([
//     api.get("/api/admin/get/emails", {
//       headers: { "x-auth-token": token },
//     }),
//   ]).then(async (responses) => {
//     const [AllEmailsReceived] = responses;
//     const emails = await AllEmailsReceived.data;   
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
        <PrivateRouteUser path="/MainAplication" component={MainAplication} />
        <PrivateRouteAdmin path="/AdminQuadras" component={AdminQuadras} />
        <PrivateRouteAdmin path="/AdminEmail" component={AdminEmail} />
        <PrivateRouteAdmin path="/AdminEsportes" component={AdminEsportes} />
      </Switch>
    </HashRouter>
  );
};

export default src;
