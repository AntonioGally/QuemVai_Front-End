import React from "react";

// import { Container } from './styles';
// import HeaderApp from "../HeaderApp";
import GoogleMaps from "../GoogleMaps";
// import PeopleOnline from "../PeopleOnline";
import FooterApp from "../FooterApp";

const LayoutCellApp: React.FC = () => {
  return (
    <div>
      <div className="CellPhone" style={{ padding: "0" }}>

        <div className="row">
          <GoogleMaps /> 
        </div>

        <footer
          style={{
            
          }}
        >
          <FooterApp />
        </footer>
      </div>
    </div>
  );
};

export default LayoutCellApp;
