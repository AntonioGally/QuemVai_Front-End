import React, { useEffect, useState } from "react";

import { Redirect } from "react-router-dom";
import { Row, Form, Table, Spinner } from "react-bootstrap";
import Buttons from "../../elements/Buttons";

import {
  ArrowBackIcon,
  ContainerSvg,
  Title,
  PlaceIcon,
  SubTitle,
  TextContent,
  CompassIcon,
  DescriptionIcon,
  WrapperTable,
  SportsIcon,
} from "./styles";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { SpaceInformationByID } from "../../../@types";

export interface Props {
  idSpace: Number;
  fromWhere: any;
}

interface Data {
  SpaceInfo: SpaceInformationByID;
}

const SpaceInfoContent: React.FC<Props> = ({ idSpace, fromWhere }) => {
  const [arrowBack, setArrowBack] = React.useState(false);
  const [data, setData] = useState<Data>();
  useEffect(() => {
    Promise.all([
      api.get(
        `${
          fromWhere === "favorites"
            ? `/api/favorites/get/place/${idSpace}`
            : `/api/search/space/${idSpace}`
        }`,
        {
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
          headers: { "x-auth-token": Token() },
        }
      ),
    ]).then(async (responses) => {
      const [SpaceInfo] = responses;
      const informations = await SpaceInfo.data;
      setData({ SpaceInfo: informations });
    });
  }, [idSpace, fromWhere]);
  if (arrowBack && fromWhere === "favorites") {
    return <Redirect to="/MobileManegementUser" />;
  }
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
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
      <Row
        style={{
          margin: "20px 0",
          alignItems: "center",
          padding: "10px",
          justifyContent: "flex-start",
        }}
      >
        <Title>Espaço</Title>
      </Row>
      {!data ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div>
            <div style={{ margin: "15% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <PlaceIcon />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>Nome do espaço :</SubTitle>
                  </Row>
                  <Row>
                    <TextContent>{data?.SpaceInfo.name}</TextContent>
                  </Row>
                </div>
              </Row>
            </div>
            <div style={{ margin: "10% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <CompassIcon />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>Endereço :</SubTitle>
                  </Row>
                  <Row>
                    <TextContent>{data?.SpaceInfo.address}</TextContent>
                  </Row>
                </div>
              </Row>
            </div>
            <div style={{ margin: "10% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <CompassIcon />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>CEP :</SubTitle>
                  </Row>
                  <Row>
                    <TextContent>{data?.SpaceInfo.CEP}</TextContent>
                  </Row>
                </div>
              </Row>
            </div>
            <div style={{ margin: "10% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <DescriptionIcon />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>Descrição :</SubTitle>
                  </Row>
                </div>
              </Row>
              <Row
                style={{
                  margin: "0px 0px 0px 15%",
                  width: "76%",
                }}
              >
                <Form.Group style={{ width: "100%" }}>
                  <Form.Control
                    as="textarea"
                    value={data?.SpaceInfo.description}
                    rows={4}
                    readOnly
                  />
                </Form.Group>
              </Row>
            </div>
            <div style={{ margin: "10% 0 5% 5%" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "20%" }}>
                  <SportsIcon />
                </div>
                <div style={{ width: "80%" }}>
                  <Row>
                    <SubTitle>Esportes :</SubTitle>
                  </Row>
                </div>
              </Row>
              <Row
                style={{
                  margin: "5% 0px 0px 0px",
                }}
              >
                <WrapperTable>
                  <Table striped bordered hover variant="secondary">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.SpaceInfo.space.map((information) => (
                        <tr key={information.id}>
                          <td>{information.name}</td>
                          <td className="SportDescriptionModalSpaceInfo">
                            {information.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </WrapperTable>
              </Row>
            </div>
            <Row
              style={{
                margin: "10% 20px",
                justifyContent: "flex-end",
              }}
              onClick={() => setArrowBack(true)}
            >
              <Buttons text="Voltar" />
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

export default SpaceInfoContent;
