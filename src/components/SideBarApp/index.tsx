import React, { useEffect } from "react";
import "./styles.css";
import {
  RingIcon,
  HomeIcon,
  SportsIcon,
  EventsIcon,
  SpacesIcon,
  FriendsIcon,
} from "./styles";

import { NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";
import api from "../services/api";
import { getToken, getTokenAdmin, Token } from "../services/auth";

import ModalConfigUserApp from "../ModalConfigUserApp";
import ModalFriendUserApp from "../ModalFriendUserApp";

const SideBarApp: React.FC = () => {
  const [userPhoto, setUserPhoto] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [modalConfigShow, setModalConfigShow] = React.useState(false);
  const [modalFriendShow, setModalFriendShow] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(Boolean);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const [inicioClick, setInicioClick] = React.useState(true);
  const [esportesClick, setEsportesClick] = React.useState(false);
  const [eventosClick, setEventosClick] = React.useState(false);
  const [quadrasClick, setQuadrasClick] = React.useState(false);
  const [amigosClick, setAmigosClick] = React.useState(false);

  useEffect(() => {
    if (getTokenAdmin()) {
      setIsAdmin(true);
    }
    if (getToken() || getTokenAdmin()) {
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
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "13% 0 20% 0",
              }}
            >
              <Row className="MyNotificationsContainer">
                <RingIcon />
                <span className="NumberSpan">3</span>
                <span className="NotificationsSpan">Notificações</span>
              </Row>
            </div>
            <Row
              className="justify-content-center"
              style={{ marginBottom: "15px" }}
            >
              <img
                src={userPhoto}
                alt="usuario"
                style={{
                  width: "134px",
                  height: "134px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => setModalConfigShow(true)}
              />
            </Row>
            <Row className="justify-content-center">
              <div className="userNameSideBarApp">{userName}</div>
            </Row>
          </div>
        </div>

        <div className="sidebarContent">
          <Row className="myRowLinksSideBarApp">
            <div
              onClick={() => {
                setInicioClick(true);
                setEsportesClick(false);
                setEventosClick(false);
                setQuadrasClick(false);
                setAmigosClick(false);
              }}
              className={`${inicioClick ? "SideBarAppActiveLink" : ""}`}
            >
              <HomeIcon />
              <span>Início</span>
            </div>
          </Row>
          <Row className="myRowLinksSideBarApp">
            <div
              onClick={() => {
                setInicioClick(false);
                setEsportesClick(true);
                setEventosClick(false);
                setQuadrasClick(false);
                setAmigosClick(false);
              }}
              className={`${esportesClick ? "SideBarAppActiveLink" : ""}`}
            >
              <SportsIcon /> <span>Esportes</span>
            </div>
          </Row>
          <Row className="myRowLinksSideBarApp">
            <div
              onClick={() => {
                setInicioClick(false);
                setEsportesClick(false);
                setEventosClick(true);
                setQuadrasClick(false);
                setAmigosClick(false);
              }}
              className={`${eventosClick ? "SideBarAppActiveLink" : ""}`}
            >
              <EventsIcon /> <span>Eventos</span>
            </div>
          </Row>
          <Row className="myRowLinksSideBarApp">
            <div
              onClick={() => {
                setInicioClick(false);
                setEsportesClick(false);
                setEventosClick(false);
                setQuadrasClick(true);
                setAmigosClick(false);
              }}
              className={`${quadrasClick ? "SideBarAppActiveLink" : ""}`}
            >
              <SpacesIcon /> <span>Quadras</span>
            </div>
          </Row>
          <Row className="myRowLinksSideBarApp" style={{ marginBottom: "10%" }}>
            <div
              onClick={() => {
                setModalFriendShow(true);
                setInicioClick(false);
                setEsportesClick(false);
                setEventosClick(false);
                setQuadrasClick(false);
                setAmigosClick(true);
              }}
              className={`${amigosClick ? "SideBarAppActiveLink" : ""}`}
            >
              <FriendsIcon /> <span>Amigos</span>
            </div>
          </Row>
        </div>

        <div className="MyFooterSidebarApp">
          <div
            className="row justify-content-center"
            style={{ margin: 0, width: "100%" }}
          >
            {isAdmin ? (
              <NavLink
                to="/AdminQuadras"
                style={{ width: "80%", padding: "5px 0", marginBottom: "5%" }}
                className="btn MyButtonSidebarApp"
              >
                Voltar
              </NavLink>
            ) : (
              <NavLink
                to="/"
                style={{ width: "80%", padding: "5px 0", marginBottom: "5%" }}
                className="btn MyButtonSidebarApp"
              >
                Voltar
              </NavLink>
            )}
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
          onHide={() => {
            setModalFriendShow(false);
            setAmigosClick(false);
            setInicioClick(true);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBarApp;
