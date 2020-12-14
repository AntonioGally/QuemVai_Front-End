import React, { useEffect, useState } from "react";

import { Row, Spinner } from "react-bootstrap";
import {
  MyWrapper,
  TextBreadCumb,
  MyTable,
  Header,
  Body,
  Informations,
} from "./styles";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { UserList } from "../../../@types";

interface Data {
  Users: UserList[];
}

const AdminUsers: React.FC = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/get/users", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllUsers] = responses;
      const users = await AllUsers.data;
      setData({ Users: users });
    });
  }, []);

  return (
    <div>
      <div style={{ padding: "5% 20px 0 20px" }}>
        <Row style={{ margin: 0, justifyContent: "space-between" }}>
          <div>
            <TextBreadCumb>
              Admin {">"} <span>Usuários</span>
            </TextBreadCumb>
          </div>
        </Row>
      </div>
      <div className="row justify-content-center w-100">
        <MyWrapper>
          <MyTable>
            <Header>
              <div style={{ width: "10%" }}>
                <span>Foto</span>
              </div>
              <div style={{ width: "25%" }}>
                <span>Nome</span>
              </div>
              <div style={{ width: "35%" }}>
                <span>Email</span>
              </div>
              <div style={{ width: "20%" }}>
                <span>Apelido</span>
              </div>
              <div style={{ width: "10%" }}>
                <span>ID</span>
              </div>
            </Header>
            <Body>
              {!data ? (
                <>
                  <Spinner animation="border" />
                </>
              ) : (
                <>
                  {data?.Users.map((information) => (
                    <Informations key={information.id}>
                      <div style={{ width: "10%" }}>
                        <img
                          src={information.photos}
                          alt="user"
                          style={{
                            borderRadius: "50%",
                            width: "60px",
                            height: "60px",
                          }}
                        />
                      </div>
                      <div style={{ width: "25%" }}>
                        <span>{information.name}</span>
                      </div>
                      <div style={{ width: "35%" }}>
                        <span>{information.email}</span>
                      </div>
                      <div style={{ width: "20%" }}>
                        <span>{information.username}</span>
                      </div>
                      <div style={{ width: "10%" }}>
                        <span>{information.id}</span>
                      </div>
                    </Informations>
                  ))}
                </>
              )}
            </Body>
          </MyTable>
        </MyWrapper>
      </div>
    </div>
  );
};

export default AdminUsers;
