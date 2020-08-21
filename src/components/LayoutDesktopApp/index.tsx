import React from 'react';

// import { Container } from './styles';
import HeaderApp from "../HeaderApp";
import GoogleMaps from "../GoogleMaps";
import PeopleOnline from "../PeopleOnline";

const LayoutDesktopApp: React.FC = () => {
  return (
      <div>
          <div className="Desktop">
          <div className="col" style={{ padding: "0" }}>
            <HeaderApp />
          </div>
          <div className="col" style={{ padding: "0" }}>
            <GoogleMaps />
          </div>
          <div className="col" style={{ padding: "0" }}>
            <PeopleOnline />
          </div>
        </div>
      </div>
  );
}

export default LayoutDesktopApp;