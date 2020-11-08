import React from "react";

import { ContainerContent, NavBar, MyLink } from "./styles";

import FindFriends from "./FindFriends";
import SolicitationsReceived from "./SolicitationsReceived";
import SolicitationsSended from "./SolicitationsSended";
import TrustSended from "./TrustSended";
import TrustReceived from "./TrustReceived";

const FriendContent: React.FC = () => {
  const [adicionarUsuarioClick, setAdicionarUsuarioClick] = React.useState(
    true
  );
  const [
    solicitacoesEnviadasClick,
    setSolicitacoesEnviadasClick,
  ] = React.useState(false);
  const [
    solicitacoesRecebidasClick,
    setSolicitacoesRecebidasClick,
  ] = React.useState(false);

  const [enviosConfiancaClick, setEnviosConfiancaClick] = React.useState(false);
  const [recibosConfiancaClick, setRecibosConfiancaClick] = React.useState(
    false
  );
  return (
    <div>
      <div style={{ height: "65vh", overflow: "hidden" }}>
        <NavBar>
          <MyLink>
            <span
              onClick={() => {
                setAdicionarUsuarioClick(true);
                setSolicitacoesEnviadasClick(false);
                setSolicitacoesRecebidasClick(false);
                setEnviosConfiancaClick(false);
                setRecibosConfiancaClick(false);
              }}
              className={`${
                adicionarUsuarioClick ? "ActiveLinkMobileFriend" : ""
              }`}
            >
              Encontrar amigos
            </span>
          </MyLink>

          <MyLink>
            <span
              onClick={() => {
                setAdicionarUsuarioClick(false);
                setSolicitacoesEnviadasClick(true);
                setSolicitacoesRecebidasClick(false);
                setEnviosConfiancaClick(false);
                setRecibosConfiancaClick(false);
              }}
              className={`${
                solicitacoesEnviadasClick ? "ActiveLinkMobileFriend" : ""
              }`}
            >
              Solicitações enviadas
            </span>
          </MyLink>

          <MyLink>
            <span
              onClick={() => {
                setAdicionarUsuarioClick(false);
                setSolicitacoesEnviadasClick(false);
                setSolicitacoesRecebidasClick(true);
                setEnviosConfiancaClick(false);
                setRecibosConfiancaClick(false);
              }}
              className={`${
                solicitacoesRecebidasClick ? "ActiveLinkMobileFriend" : ""
              }`}
            >
              Solicitações recebidas
            </span>
          </MyLink>

          <MyLink>
            <span
              onClick={() => {
                setAdicionarUsuarioClick(false);
                setSolicitacoesEnviadasClick(false);
                setSolicitacoesRecebidasClick(false);
                setEnviosConfiancaClick(true);
                setRecibosConfiancaClick(false);
              }}
              className={`${
                enviosConfiancaClick ? "ActiveLinkMobileFriend" : ""
              }`}
            >
              Envios de confiança
            </span>
          </MyLink>

          <MyLink>
            <span
              onClick={() => {
                setAdicionarUsuarioClick(false);
                setSolicitacoesEnviadasClick(false);
                setSolicitacoesRecebidasClick(false);
                setEnviosConfiancaClick(false);
                setRecibosConfiancaClick(true);
              }}
              className={`${
                recibosConfiancaClick ? "ActiveLinkMobileFriend" : ""
              }`}
            >
              Recibos de confiança
            </span>
          </MyLink>
        </NavBar>
        <ContainerContent>
          {adicionarUsuarioClick ? <FindFriends /> : ""}
          {solicitacoesRecebidasClick ? <SolicitationsReceived /> : ""}
          {solicitacoesEnviadasClick ? <SolicitationsSended /> : ""}
          {enviosConfiancaClick ? <TrustSended /> : ""}
          {recibosConfiancaClick ? <TrustReceived /> : ""}
        </ContainerContent>
      </div>
    </div>
  );
};

export default FriendContent;
