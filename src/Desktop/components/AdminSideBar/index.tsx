import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  SideBar,
  MyLink,
  MyHeader,
  ArrowBackIcon,
  PhotoAdm,
  MyDropdown,
  Content,
} from "./styles";
import { Row, Col, Spinner, Dropdown } from "react-bootstrap";

import api from "../../../services/api";
import { Token, logout } from "../../../services/auth";

import AdminListSpace from "../AdminListSpace";
import AdminEmails from "../AdminEmails";
import AdminSports from "../AdminSports";

const AdminSideBar: React.FC = () => {
  const [userPhoto, setUserPhoto] = useState("");
  const [userName, setUserName] = useState("");
  const [arrowBack, setArrowBack] = useState(false);
  const [quit, setQuit] = useState(false);

  const [quadrasClick, setQuadrasClick] = useState(true);
  const [emailClick, setEmailClick] = useState(false);
  const [esportesClick, setEsportesClick] = useState(false);
  const [usuariosClick, setUsuariosClick] = useState(false);
  const [eventosClick, setEventosClick] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/bring/me", {
        validateStatus: function (status) {
          return status < 501; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushUserInformation] = responses;
      const results = await PushUserInformation.data;
      if (!results["info"]) {
        logout();
        setArrowBack(true);
      } else {
        setUserPhoto(results["info"]["photos"]);
        setUserName(results["info"]["username"]);
      }
    });
  }, []);

  if (arrowBack) {
    return <Redirect to="/" />;
  }
  if (quit) {
    logout();
    return <Redirect to="/" />;
  }
  return (
    <div style={{ overflow: "hidden" }}>
      <Row style={{ margin: 0 }}>
        <Col lg={2} md={2} style={{ padding: 0, height: "100%" }}>
          <SideBar>
            <Row style={{ margin: 0, justifyContent: "center", width: "100%" }}>
              <span>Administrador</span>
            </Row>
            <div style={{ marginLeft: "5%" }}>
              <Row style={{ margin: 0 }}>
                <MyLink
                  onClick={() => {
                    setQuadrasClick(true);
                    setEmailClick(false);
                    setEsportesClick(false);
                    setUsuariosClick(false);
                    setEventosClick(false);
                  }}
                  className={quadrasClick ? "ActiveLinkSideBarAdmin" : ""}
                >
                  Quadras
                </MyLink>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyLink
                  onClick={() => {
                    setQuadrasClick(false);
                    setEmailClick(true);
                    setEsportesClick(false);
                    setUsuariosClick(false);
                    setEventosClick(false);
                  }}
                  className={emailClick ? "ActiveLinkSideBarAdmin" : ""}
                >
                  Email
                </MyLink>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyLink
                  onClick={() => {
                    setQuadrasClick(false);
                    setEmailClick(false);
                    setEsportesClick(true);
                    setUsuariosClick(false);
                    setEventosClick(false);
                  }}
                  className={esportesClick ? "ActiveLinkSideBarAdmin" : ""}
                >
                  Esportes
                </MyLink>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyLink
                  onClick={() => {
                    setQuadrasClick(false);
                    setEmailClick(false);
                    setEsportesClick(false);
                    setUsuariosClick(true);
                    setEventosClick(false);
                  }}
                  className={usuariosClick ? "ActiveLinkSideBarAdmin" : ""}
                >
                  Usuários
                </MyLink>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyLink
                  onClick={() => {
                    setQuadrasClick(false);
                    setEmailClick(false);
                    setEsportesClick(false);
                    setUsuariosClick(false);
                    setEventosClick(true);
                  }}
                  className={eventosClick ? "ActiveLinkSideBarAdmin" : ""}
                >
                  Eventos
                </MyLink>
              </Row>
            </div>
          </SideBar>
        </Col>
        <Col
          lg={10}
          md={10}
          style={{ padding: 0, height: "100%", overflowY: "auto" }}
        >
          <MyHeader>
            <Row
              style={{
                margin: 0,
                justifyContent: "space-between",
                height: "100%",
                alignItems: "center",
              }}
            >
              <ArrowBackIcon onClick={() => setArrowBack(true)} />
              <div>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <MyDropdown>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {userName}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link style={{ color: "black" }} to="/MainAplication">
                            Aplicativo
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setQuit(true)}>
                          Sair
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </MyDropdown>

                  {!userPhoto ? (
                    <>
                      <Spinner animation="border" />
                    </>
                  ) : (
                    <>
                      <PhotoAdm src={userPhoto} alt="adm" />
                    </>
                  )}
                </Row>
              </div>
            </Row>
          </MyHeader>
          <Content>
            {quadrasClick ? <AdminListSpace /> : ""}
            {emailClick ? <AdminEmails /> : ""}
            {esportesClick ? <AdminSports /> : ""}
          </Content>
        </Col>
      </Row>
    </div>
  );
};

export default AdminSideBar;
