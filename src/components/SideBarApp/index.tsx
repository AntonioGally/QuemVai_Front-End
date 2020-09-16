import React, { useEffect } from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";
import ModalConfigUserApp from "../ModalConfigUserApp";
import api from "../services/api";
import { getToken, getTokenAdmin } from "../services/auth";

const SideBarApp: React.FC = () => {
  const [userPhoto, setUserPhoto] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(Boolean);
  const [token, setToken] = React.useState("");

  useEffect(() => {
    if (getToken()) {
      setIsLogged(true);
      setToken(getToken() as string);
    } else if (getTokenAdmin()) {
      setIsLogged(true);
      setToken(getTokenAdmin() as string);
    } else {
      setIsLogged(false);
    }
    if (isLogged) {
      Promise.all([
        api.get("/api/user/bring/me", {
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
          headers: { "x-auth-token": token },
        }),
      ]).then(async (responses) => {
        const [Info] = responses;
        const informations = await Info;
        setUserPhoto(informations.data["info"]["photos"]);
      });
    }
  }, [isLogged, token]);

  return (
    <div className="wrapperApp">
      <nav id="sidebar">
        <div className="sidebar-header" style={{ display: "flex" }}>
          <div className="col">
            <div
              className="row justify-content-center"
              style={{ marginBottom: "15px" }}
            >
              <img
                src={userPhoto}
                alt="usuario"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => setModalShow(true)}
              />
            </div>
            <div className="row justify-content-center">Antônio Gally</div>
          </div>
        </div>

        <div className="sidebarContent">
          <div className="MyRowsSidebarApp">
            <div className="row sMyRowSidebarApp" style={{ margin: "30% 0" }}>
              <div className="btn  MyButtonSidebarApp">Esportes</div>
            </div>

            <div className="row MyRowSidebarApp" style={{ margin: "30% 0" }}>
              <div className="btn  MyButtonSidebarApp">Esportes</div>
            </div>

            <div className="row MyRowSidebarApp" style={{ margin: "30% 0" }}>
              <div className="btn  MyButtonSidebarApp">Esportes</div>
            </div>

            <div className="row MyRowSidebarApp" style={{ margin: "30% 0" }}>
              <div className="btn  MyButtonSidebarApp">Esportes</div>
            </div>
          </div>
        </div>

        <div className="MyFooterSidebarApp">
          <div
            className="row justify-content-center"
            style={{ margin: 0, width: "100%" }}
          >
            <NavLink
              to="/"
              style={{ width: "80%", padding: "5px 0" }}
              className="btn MyButtonSidebarApp"
            >
              Sair
            </NavLink>
          </div>
        </div>
      </nav>
      {modalShow ? (
        <ModalConfigUserApp
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBarApp;
