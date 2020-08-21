import React from "react";

// import { Container } from './styles';
import HeaderApp from "../HeaderApp";
import GoogleMaps from "../GoogleMaps";
import PeopleOnline from "../PeopleOnline";
import FooterApp from "../FooterApp";

const LayoutCellApp: React.FC = () => {
  return (
    <div>
      <div className="CellPhone" style={{ padding: "0" }}>
        <div className="row">
          <HeaderApp />
        </div>

        <div className="row justify-content-center" style={{ margin: "0" }}>
          <PeopleOnline />
        </div>

        <div className="row">
          <GoogleMaps />
        </div>

        <footer>
          <FooterApp />
        </footer>
      </div>
    </div>
  );
};

export default LayoutCellApp;
