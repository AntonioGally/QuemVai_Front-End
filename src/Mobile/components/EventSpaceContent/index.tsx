import React, { useEffect } from "react";

import { Redirect, Link } from "react-router-dom";
import { Row, Spinner } from "react-bootstrap";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import {
  ArrowBackIcon,
  ContainerSvg,
  Title,
  WrapperCards,
  MyCard,
  CompassIcon,
  SubTitle,
  TextContent,
  SearchIcon,
  ExitIcon
} from "./styles";

import { ListSpaceByUF } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

interface Data {
  SpaceList: ListSpaceByUF[];
}

const EventSpaceContent: React.FC = () => {
  var fromSpaces = "eventSpaces";
  const [arrowBack, setArrowBack] = React.useState(false);
  const [data, setData] = React.useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get("/api/search/uf/space/SP", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllSpaces] = responses;
      const spaces = await AllSpaces.data;
      setData({ SpaceList: spaces });
    });
  }, []);

  if (arrowBack) {
    return <Redirect to="/MainAplication" />;
  }
  return (
    <div style={{ position: "relative" }}>
      <div>
        <ArrowBackIcon onClick={() => setArrowBack(true)} />
      </div>

      <ContainerSvg>
        <img
          src={SvgModalConfigUser}
          alt="svg"
          style={{ width: "222px", height: "166px" }}
        />
      </ContainerSvg>

      <div
        className="row"
        style={{
          margin: "20px 0",
          alignItems: "center",
          padding: "10px",
          justifyContent: "flex-start",
        }}
      >
        <Title>Espaços disponíveis</Title>
      </div>
      {!data ? (
        <div className="text-center" style={{ marginTop: "5%" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div>
            <WrapperCards>
              {data?.SpaceList.map((information) => (
                <MyCard
                  key={information.id}
                  style={{
                    display: `${!information.status ? "block" : "none"}`,
                  }}
                >
                  <Row>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "25%",
                      }}
                    >
                      <CompassIcon style={{ fill: "var(--fontBlack)" }} />
                    </div>

                    <div style={{ width: "50%" }}>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>Nome: </SubTitle>
                        <TextContent>{information.name}</TextContent>
                      </Row>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>Endereço: </SubTitle>
                        <TextContent>{information.address}</TextContent>
                      </Row>
                      <Row style={{ alignItems: "center", margin: 0 }}>
                        <SubTitle>CEP: </SubTitle>
                        <TextContent>{information.CEP}</TextContent>
                      </Row>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "25%",
                      }}
                    >
                      <Link
                        to={`/MobileSpaceInfo/${information.id}/${fromSpaces}`}
                        style={{ width: "40%" }}
                      >
                        <SearchIcon style={{ width: "100%", height: "100%" }} />
                      </Link>
                      <Link
                        to={`/MobileEventCreate/${information.id}/${fromSpaces}`}
                        style={{ width: "40%" }}
                      >
                        <ExitIcon style={{ width: "100%", height: "100%" }} />
                      </Link>
                    </div>
                  </Row>
                </MyCard>
              ))}
            </WrapperCards>
          </div>
        </>
      )}
    </div>
  );
};

export default EventSpaceContent;
