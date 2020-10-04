import React from "react";

// import { Container } from './styles';
import SideBarApp from "../SideBarApp";
import GoogleMaps from "../GoogleMaps";
import SideBarPeopleOnline from "../SideBarPeopleOnline";

const LayoutDesktopApp: React.FC = () => {
  return (
    <div>
      <div className="Desktop">
        <div className="container-fluid" style={{ padding: "0" }}>
          <div className="row" style={{margin:'0'}}>
            <div className="col-2" style={{ padding: "0" }}>
              <SideBarApp />
            </div>

            <div className="col-9" style={{ padding: "0" }}>
              <GoogleMaps/>
            </div>
            <div className="col-1" style={{ padding: "0" }}>
              <SideBarPeopleOnline />
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutDesktopApp;
