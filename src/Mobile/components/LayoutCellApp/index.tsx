import React from "react";
import { Redirect } from "react-router-dom";

// import { Container } from './styles';
// import HeaderApp from "../HeaderApp";
// import GoogleMaps from "../GoogleMaps";
// import PeopleOnline from "../PeopleOnline";
// import FooterApp from "../FooterApp";

import { logout } from "../../../services/auth";

import Development2 from "../../img/materiais/Development2.svg";

const LayoutCellApp: React.FC = () => {
  const [redirection, setRedirection] = React.useState(false);
  if (redirection) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="CellPhone" style={{ padding: "0" }}>
        <div
          className="row"
          style={{
            height: "100vh",
            alignItems: "center",
            margin: 0,
            justifyContent: "center",
          }}
        >
          <div
            className="text-center"
            style={{ margin: "3% 0 0 0", padding: "10px" }}
          >
            <h3 style={{ fontFamily: "Poppins" }}>
              A versão Mobile ainda não foi desenvolvida :O
            </h3>
          </div>
          <img
            src={Development2}
            alt="Development Explanation"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="row justify-content-center">
          <span
            className="text-primary"
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              cursor: "pointer",
              display: "block",
              marginBottom:"5%"
            }}
            onClick={() => {
              logout();
              setRedirection(true);
            }}
          >
            Sair :(
          </span>
        </div>

        {/* <div className="row">
          <GoogleMaps /> 
        </div>

        <footer
          style={{
            
          }}
        >
          <FooterApp />
        </footer> */}
      </div>
    </div>
  );
};

export default LayoutCellApp;
