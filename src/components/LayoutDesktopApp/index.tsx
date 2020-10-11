import React from "react";

// import { Container } from './styles';
import SideBarApp from "../SideBarApp";
import GoogleMaps from "../GoogleMaps";
import SideBarPeopleOnline from "../SideBarPeopleOnline";
import SideBarProvider from "../../Context/ReloadSideBar";
import {SideBarPeopleProvider} from "../../Context/ReloadSideBar";

const LayoutDesktopApp: React.FC = () => {
  return (
    <div>
      <div className="Desktop">
        <div className="container-fluid" style={{ padding: "0" }}>
          <SideBarPeopleProvider>
            <div className="row" style={{ margin: "0" }}>
              <div className="col-2" style={{ padding: "0" }}>
                <SideBarProvider>
                  <SideBarApp />
                </SideBarProvider>
              </div>

              <div className="col-9" style={{ padding: "0" }}>
                <GoogleMaps />
              </div>
              <div
                className="col-1"
                style={{
                  padding: "0",
                  background:
                    "linear-gradient(241.73deg, #3edaa8 0%, #4cd964 100%)",
                }}
              >
                <SideBarPeopleOnline />
              </div>
            </div>
          </SideBarPeopleProvider>
        </div>
      </div>
    </div>
  );
};

export default LayoutDesktopApp;
