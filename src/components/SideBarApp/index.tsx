import React from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";
const user = "https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/72617604_1350485845109764_6743003091697664000_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=F8juFgfhcNIAX9Jziok&_nc_ht=scontent.fcgh10-1.fna&oh=955b5925aa8b0916ef14fd4977504314&oe=5F69EEDC"
const SideBarApp: React.FC = () => {
  return (
    <div className="wrapperApp">
      <nav id="sidebar">
        <div className="sidebar-header" style={{ display: "flex" }}>
          <div className="col">
            <div
              className="row justify-content-center"
              style={{ marginBottom: "15px" }}
            >
              <img src={user} alt="usuario" style={{width:'100px', height:'100px', borderRadius:'50%'}}/>
            </div>
            <div className="row justify-content-center">Antônio Gally</div>
          </div>
        </div>

        <div className="sidebarContent">
          <div className="MyRowsSidebarApp">
            <div className="row sMyRowSidebarApp" style={{ margin: '30% 0'}}>
              <div className="btn  MyButtonSidebarApp">Esportes</div>
            </div>

            <div className="row MyRowSidebarApp" style={{ margin: '30% 0'}}>
              <div className="btn  MyButtonSidebarApp">Esportes</div>
            </div>

            <div className="row MyRowSidebarApp" style={{ margin: '30% 0'}}>
              <div className="btn  MyButtonSidebarApp">Esportes</div>
            </div>

            <div className="row MyRowSidebarApp" style={{ margin: '30% 0'}}>
              <div className="btn  MyButtonSidebarApp">Esportes</div>
            </div>

          </div>
        </div>

        <div className="MyFooterSidebarApp">
          <div
            className="row justify-content-center"
            style={{ margin: 0, width: "100%" }}
          >
            <NavLink to="/" style={{width:'80%', padding:'5px 0'}} className="btn MyButtonSidebarApp">
              Sair
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBarApp;
