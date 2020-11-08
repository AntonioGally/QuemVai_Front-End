import React from "react";

// import { Container } from './styles';
import HeaderApp from "../HeaderApp";
import GoogleMaps from "../GoogleMaps";
import FooterApp from "../FooterApp";


const LayoutCellApp: React.FC = () => {
  return (
    <div>
      
        <div className="CellPhone" style={{ padding: "0" }}>
          <header>
            <HeaderApp />
          </header>
          <div>
            <GoogleMaps />
          </div>

          <footer style={{ height: "10vh", position: "relative" }}>
            <FooterApp />
          </footer>
        </div>
     
    </div>
  );
};

export default LayoutCellApp;
