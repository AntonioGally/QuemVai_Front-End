import React from "react";
import "./styles.css";
import user from "../../img/icones/user.svg";
import { NavLink } from "react-router-dom";

const SideBarApp: React.FC = () => {
  return (
    <div className="wrapperApp">
      <nav id="sidebar">
        <div className="sidebar-header" style={{ display: "flex" }}>
          <div className="col" style={{ width: "60%" }}>
            <div
              className="row justify-content-center"
              style={{ marginBottom: "15px" }}
            >
              <img src={user} alt="usuario" />
            </div>
            <div className="row justify-content-center">Antônio Gally</div>
          </div>
        </div>

        <ul className="list-unstyled components text-center">
          <li>
            <div
              className="btn btn-primary"
              style={{ width: "75%", marginBottom: "30px" }}
            >
              Lorem Ipsum
            </div>
          </li>

          <li>
            <div
              className="btn btn-primary"
              style={{ width: "75%", marginBottom: "30px" }}
            >
              Lorem Ipsum
            </div>
          </li>

          <li>
            <div
              className="btn btn-primary"
              style={{ width: "75%", marginBottom: "30px" }}
            >
              Lorem Ipsum
            </div>
          </li>
          <li>
            <div
              className="btn btn-primary"
              style={{ width: "75%", marginBottom: "30px" }}
            >
              Lorem Ipsum
            </div>
          </li>

          <li>
            <div
              className="btn btn-primary"
              style={{ width: "75%", marginBottom: "30px" }}
            >
              Lorem Ipsum
            </div>
          </li>

          <li>
            <NavLink
              to="/"
              className="btn btn-primary"
              style={{ width: "75%", marginBottom: "30px" }}
            >
              Sair
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBarApp;
