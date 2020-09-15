import React, { useEffect } from "react";

import { Image, Form, FormControl, Navbar } from "react-bootstrap";
import ModalLogin from "../ModalLogin";

import banner2 from "../../img/banner/banner2.jpg";
import user from "../../img/icones/user.svg";

import { MyNav } from "./style";
import "./styles.css";
import api from "../services/api";
import { getToken, getTokenAdmin } from "../services/auth";

const Header: React.FC = () => {
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
    <div style={{ height: "100%" }}>
      <Image src={banner2} fluid />
      <MyNav>
        <Navbar className="justify-content-between">
          <Form inline className="InputDesktop">
            <FormControl type="text" placeholder="Search for something" />
          </Form>
          <Form inline>
            <Image
              src={userPhoto ? userPhoto : user}
              width="70px"
              rounded
              style={{ cursor: "pointer" }}
              onClick={() => setModalShow(true)}
            />
          </Form>
        </Navbar>
      </MyNav>
      {modalShow ? (
        <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
