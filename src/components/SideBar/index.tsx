import React from "react";

import "./style.scss";
import { MyNav } from "./styles";
import { NavLink } from "react-router-dom";

// import Header from "../Header";
// import NavBar from "../NavBar";

// import { Android } from "@styled-icons/boxicons-logos/Android";

const SideBar: React.FC = () => {
  return (
    <div className="wrapper">
      <MyNav>
        <nav id="sidebar" className="teste">
          <div className="sidebar-header">
            <h3>Quem Vai Documents</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Documentos</p>
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Lorem Ipsum
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Lorem Ipsum</a>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Lorem Ipsum
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <NavLink to="/Artigos/Artigo1">Clica ae</NavLink>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Lorem Ipsum</a>
            </li>
            <li>
              <a href="/">Lorem Ipsum</a>
            </li>
          </ul>
        </nav>
      </MyNav>




    </div>
  );
};

export default SideBar;
