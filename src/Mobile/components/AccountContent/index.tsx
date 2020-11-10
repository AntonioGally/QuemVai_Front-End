import React from "react";
import { Redirect } from "react-router-dom";
import { Container, NavBar, MyLink } from "./styles";
import { logout } from "../../../services/auth";

import FormAccount from "./FormAccount";
import PasswordAtualization from "./PasswordAtualization";

const AccountContent: React.FC = () => {
  const [click1, setClick1] = React.useState(true);
  const [click2, setClick2] = React.useState(false);
  const [click3, setClick3] = React.useState(false);
  const [click4, setClick4] = React.useState(false);
  const [click5, setClick5] = React.useState(false);
  const [click6, setClick6] = React.useState(false);
  if (click6) {
    logout();
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <NavBar>
        <MyLink>
          <span
            onClick={() => {
              setClick1(true);
              setClick2(false);
              setClick3(false);
              setClick4(false);
              setClick5(false);
            }}
            className={`${click1 ? "ActiveLinkMobileAccount" : ""}`}
          >
            Minha Conta
          </span>
        </MyLink>
        <MyLink>
          <span
            onClick={() => {
              setClick1(false);
              setClick2(true);
              setClick3(false);
              setClick4(false);
              setClick5(false);
            }}
            className={`${click2 ? "ActiveLinkMobileAccount" : ""}`}
          >
            Atualizar Senha
          </span>
        </MyLink>
        <MyLink>
          <span
            onClick={() => {
              setClick1(false);
              setClick2(false);
              setClick3(true);
              setClick4(false);
              setClick5(false);
            }}
            className={`${click3 ? "ActiveLinkMobileAccount" : ""}`}
          >
            Atualizar Foto
          </span>
        </MyLink>
        <MyLink>
          <span
            onClick={() => {
              setClick1(false);
              setClick2(false);
              setClick3(false);
              setClick4(true);
              setClick5(false);
            }}
            className={`${click4 ? "ActiveLinkMobileAccount" : ""}`}
          >
            Meu Histórico
          </span>
        </MyLink>
        <MyLink>
          <span
            onClick={() => {
              setClick1(false);
              setClick2(false);
              setClick3(false);
              setClick4(false);
              setClick5(true);
            }}
            className={`${click5 ? "ActiveLinkMobileAccount" : ""}`}
          >
            Favoritos
          </span>
        </MyLink>
        <MyLink>
          <span onClick={() => setClick6(true)}>Sair</span>
        </MyLink>
      </NavBar>
      <div>
        {click1 ? <FormAccount /> : ""}
        {click2 ? <PasswordAtualization /> : ""}
      </div>
    </Container>
  );
};

export default AccountContent;
