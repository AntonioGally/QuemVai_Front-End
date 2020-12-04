import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./FooterApp.css";
import {
  HomeIcon,
  SportsIcon,
  EventsIcon,
  SpacesIcon,
  FriendsIcon,
} from "./styles";

import EventsModal from "./EventsModal";

const FooterApp: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div
      style={{
        height: "100%",
        boxShadow: "0px -8px 24px rgba(0, 0, 0, 0.45)",
        position: "absolute",
        left: 0,
        right: 0,
        backgroundColor: "var(--primary)",
      }}
    >
      <Row
        style={{
          margin: 0,
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Col style={{ textAlign: "center" }}>
          <NavLink to="/MainAplication" activeClassName="FooterAppMobileActive">
            <HomeIcon />
          </NavLink>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <NavLink to="/MobileSports" activeClassName="FooterAppMobileActive">
            <SportsIcon />
          </NavLink>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <NavLink to="/MobileFriends" activeClassName="FooterAppMobileActive">
            <FriendsIcon />
          </NavLink>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <EventsIcon onClick={() => setModalShow(true)} />
        </Col>

        <Col style={{ textAlign: "center" }}>
          <NavLink to="/MobileSpaces" activeClassName="FooterAppMobileActive">
            <SpacesIcon />
          </NavLink>
        </Col>
      </Row>
      {modalShow ? (
        <EventsModal show={modalShow} onHide={() => setModalShow(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FooterApp;
