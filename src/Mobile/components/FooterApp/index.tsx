import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import {
  HomeIcon,
  SportsIcon,
  EventsIcon,
  SpacesIcon,
  FriendsIcon,
} from "./styles";

const FooterApp: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        boxShadow: "0px -8px 24px rgba(0, 0, 0, 0.45)",
        position: "absolute",
        left: 0,
        right: 0,
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
          <Link to="/MainAplication">
            <HomeIcon />
          </Link>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <Link to="/MobileSports">
            <SportsIcon />
          </Link>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <Link to="/MobileFriends">
            <FriendsIcon />
          </Link>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <EventsIcon />
        </Col>

        <Col style={{ textAlign: "center" }}>
          <SpacesIcon />
        </Col>
      </Row>
    </div>
  );
};

export default FooterApp;
