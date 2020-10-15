import React from "react";

import { SportIcon, EventsIcon, ProfileIcon, LocationIcon } from "./styles";

const FooterApp: React.FC = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="row justify-content-center" style={{ margin: "0" }}>
          <SportIcon />
        </div>
        <div className="row justify-content-center" style={{ margin: "0" }}>
          Esportes
        </div>
      </div>
      <div className="col text-center">
        <div className="row justify-content-center" style={{ margin: "0" }}>
          <EventsIcon />
        </div>
        <div className="row justify-content-center" style={{ margin: "0" }}>
          Eventos
        </div>
      </div>
      <div className="col text-center">
        <div className="row justify-content-center" style={{ margin: "0" }}>
          <ProfileIcon />
        </div>
        <div className="row justify-content-center" style={{ margin: "0" }}>
          Perfil
        </div>
      </div>
      <div className="col text-center">
        <div className="row justify-content-center" style={{ margin: "0" }}>
          <LocationIcon />
        </div>
        <div className="row justify-content-center" style={{ margin: "0" }}>
          Locais
        </div>
      </div>
    </div>
  );
};

export default FooterApp;
