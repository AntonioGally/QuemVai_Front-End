import React, { useEffect } from "react";
import {  Redirect } from "react-router-dom";

import { Container } from "react-bootstrap";
import NavBarAdmin from "../../Desktop/components/NavBarAdmin";
import QuadrasExistentesAdmin from "../../Desktop/components/AdminListSpace";
import QuadrasConfigAddLayout from "../../Desktop/components/QuadrasConfigAddLayout";
import Footer from "../../FrontPage/Footer";

import AdminSideBar from "../../Desktop/components/AdminSideBar";

import api from "../../services/api";
import { Token, logout } from "../../services/auth";

const Admin: React.FC = () => {
  const [isValid, setIsValid] = React.useState(true);
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
        setIsValid(false);
      }
    });
  }, []);
  if (!isValid) {
    return <Redirect to="/" />;
  }

  return (
    <Container fluid style={{ padding: 0 }}>
      <AdminSideBar />
      {/*
      <NavBarAdmin />
      <QuadrasExistentesAdmin />
      <QuadrasConfigAddLayout />
      <Footer /> */}
    </Container>
  );
};

export default Admin;
