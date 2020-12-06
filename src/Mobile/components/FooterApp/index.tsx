import React, { useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
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

import api from "../../../services/api";
import { Token } from "../../../services/auth";

const FooterApp: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [userId, setUserId] = React.useState(Number);
  const [eventId, setEventId] = React.useState(Number);
  const [viewEvents, setViewEvents] = React.useState(false);
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
      setUserId(results["info"]["id"]);
    });
  }, []);

  const handleEventsClick = async () => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.get("/api/event/get/all", config);
      var auxList = response.data;

      var count = 0;
      if (auxList.length === 0) {
        setModalShow(true);
        // setModalViewEvents(false);
      } else {
        while (count <= auxList.length) {
          if (auxList[count].AuthorID === userId) {
            setEventId(auxList[count].Id_Event);
            setModalShow(false);
            setViewEvents(true);
            count = auxList.length + 1;
          } else {
            count += 1;
            setModalShow(true);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (viewEvents) {
    return <Redirect to={`/MobileViewEvent/${eventId}`} />;
  }

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
          <EventsIcon onClick={handleEventsClick} />
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
