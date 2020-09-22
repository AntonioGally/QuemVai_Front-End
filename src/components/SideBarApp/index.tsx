import React, { useEffect } from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";
import api from "../services/api";
import { getToken, getTokenAdmin, logout, Token } from "../services/auth";

import ModalConfigUserApp from "../ModalConfigUserApp";
import ModalFriendUserApp from "../ModalFriendUserApp";

const SideBarApp: React.FC = () => {
  const [userPhoto, setUserPhoto] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [modalConfigShow, setModalConfigShow] = React.useState(false);
  const [modalFriendShow, setModalFriendShow] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(Boolean);

  useEffect(() => {
    if (getToken() ||getTokenAdmin()) {     
      setIsLogged(true);
      
    } else {
      setIsLogged(false);
    }
    if (isLogged) {
      Promise.all([
        api.get("/api/user/bring/me", {
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
          headers: { "x-auth-token": Token() },
        }),
      ]).then(async (responses) => {
        const [Info] = responses;
        const informations = await Info;
        setUserPhoto(informations.data["info"]["photos"]);
        setUserName(informations.data["info"]["username"]);
      });
    }
  }, [isLogged]);

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
                onClick={() => setModalConfigShow(true)}
              />
            </div>
            <div className="row justify-content-center">{userName}</div>
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
              <div
                className="btn  MyButtonSidebarApp"
                onClick={() => setModalFriendShow(true)}
              >
                Amigos
              </div>
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
              onClick={() => logout()}
            >
              Sair
            </NavLink>
          </div>
        </div>
      </nav>
      {modalConfigShow ? (
        <ModalConfigUserApp
          show={modalConfigShow}
          onHide={() => setModalConfigShow(false)}
        />
      ) : (
        ""
      )}
      {modalFriendShow ? (
        <ModalFriendUserApp
          show={modalFriendShow}
          onHide={() => setModalFriendShow(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBarApp;
