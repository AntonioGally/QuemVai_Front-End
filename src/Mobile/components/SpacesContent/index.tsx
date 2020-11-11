import React from "react";

import { Redirect } from "react-router-dom";
import { Row } from "react-bootstrap";
import {
  ArrowBackIcon,
  Title,
  ContainerSvg,
  WrapperCards,
  MyCard,
  CompassIcon,
  SubTitle,
  TextContent,
  SearchIcon,
} from "./styles";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

const SpacesContent: React.FC = () => {
  const [arrowBack, setArrowBack] = React.useState(false);
  var aux_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        <Title>Espaços</Title>
      </div>
      <div>
        <WrapperCards>
          {aux_list.map((informations) => (
            <MyCard key={informations}>
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
                    <TextContent>Praça muito massa</TextContent>
                    {/* <TextContent>{information.Space_name}</TextContent> */}
                  </Row>
                  <Row style={{ alignItems: "center", margin: 0 }}>
                    <SubTitle>Endereço: </SubTitle>
                    <TextContent>Rua Obelisco3</TextContent>
                    {/* <TextContent>{information.Space_address}</TextContent> */}
                  </Row>
                  <Row style={{ alignItems: "center", margin: 0 }}>
                    <SubTitle>CEP: </SubTitle>
                    <TextContent>123456789</TextContent>
                    {/* <TextContent>{information.Space_CEP}</TextContent> */}
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
                  <SearchIcon style={{ width: "48%", height: "48%" }} />
                </div>
              </Row>
            </MyCard>
          ))}
        </WrapperCards>
      </div>
    </div>
  );
};

export default SpacesContent;
