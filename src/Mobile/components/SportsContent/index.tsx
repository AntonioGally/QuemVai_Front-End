import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Form, Row, Spinner } from "react-bootstrap";

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
  ExitIcon,
} from "./styles";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { SportsFilter } from "../../../@types";
import { ListSpaceByUF } from "../../../@types";
import { ExistingSportList } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

interface DataSportsInfo {
  SportsList: SportsFilter[];
}
interface DataSpace {
  SpaceList: ListSpaceByUF[];
}
interface DataExistingSports {
  SportsList: ExistingSportList[];
}

const SportsContent: React.FC = () => {
  var fromSports = "sports";
  const [arrowBack, setArrowBack] = React.useState(false);
  const [dataSports, setDataSports] = useState<DataExistingSports>();
  const [dataSportsInfo, setDataSportsInfo] = useState<DataSportsInfo>();
  const [dataSpaces, setDataSpaces] = useState<DataSpace>();
  const [filtering, setFiltering] = useState(false);
  // const [modalCreateEvents, setModalCreateEvents] = React.useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/search/uf/space/SP", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushSpacesList] = responses;
      const response = await PushSpacesList.data;
      setDataSpaces({ SpaceList: response });
    });
  }, []);

  useEffect(() => {
    Promise.all([
      api.get("api/search/all/sports", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushSportsList] = responses;
      const response = await PushSportsList.data;
      setDataSports({ SportsList: response });
    });
  }, []);

  const onChangeSport = async (name_sport: String) => {
    setFiltering(true);

    var config = {
      headers: { "x-auth-token": Token() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };
    var sportsFilter = [] as any;
    setDataSportsInfo({ SportsList: sportsFilter }); //limpando o array
    try {
      const response = await api.get("/api/search/uf/sport/SP", config);
      var auxResponse = await response.data;
      if (response.status === 200) {
        var count = 0;
        while (count < auxResponse.length) {
          if (auxResponse[count]["Name_Sport"] === name_sport) {
            sportsFilter.push(auxResponse[count]);
            count += 1;
          } else {
            count += 1;
          }
        }
        setDataSportsInfo({ SportsList: sportsFilter });
      }
    } catch (err) {
      console.log(err);
    }
  };

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

      <>
        <div
          className="row"
          style={{
            margin: "20px 0",
            alignItems: "center",
            padding: "10px",
            justifyContent: "space-around",
          }}
        >
          <Title>Esportes</Title>
          <Form.Group style={{ marginBottom: 0, width: "60%" }}>
            <Form.Control
              as="select"
              id="id_sport"
              name="id_sport"
              onChange={(e) => onChangeSport(String(e.target.value))}
              // ref={register}
            >
              <option>Selecione...</option>

              {dataSports?.SportsList.map((information) => (
                <option key={information.id} value={information.name}>
                  {information.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </div>
        <div>
          <>
            <WrapperCards>
              {filtering ? (
                <>
                  {dataSportsInfo?.SportsList.map((information) => (
                    <MyCard key={information.Space_id}>
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
                            <TextContent>{information.Space_name}</TextContent>
                          </Row>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>Endereço: </SubTitle>
                            <TextContent>
                              {information.Space_address}
                            </TextContent>
                          </Row>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>CEP: </SubTitle>
                            <TextContent>{information.Space_CEP}</TextContent>
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
                            to={`/MobileSpaceInfo/${information.Space_id}/${fromSports}`}
                            style={{ width: "40%" }}
                          >
                            <SearchIcon
                              style={{ width: "100%", height: "100%" }}
                            />
                          </Link>

                          <Link
                            style={{ width: "40%" }}
                            to={`/MobileSpaceInfo/${information.Space_id}/${fromSports}`}
                          >
                            <ExitIcon
                              style={{ width: "100%", height: "100%" }}
                            />
                          </Link>
                        </div>
                      </Row>
                    </MyCard>
                  ))}
                </>
              ) : (
                <>
                  {dataSpaces?.SpaceList.map((information) => (
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
                            to={`/MobileSpaceInfo/${information.id}/${fromSports}`}
                            style={{ width: "40%" }}
                          >
                            <SearchIcon
                              style={{ width: "100%", height: "100%" }}
                            />
                          </Link>

                          <Link
                            style={{ width: "40%" }}
                            to={`/MobileSpaceInfo/${information.id}/${fromSports}`}
                          >
                            <ExitIcon
                              style={{ width: "100%", height: "100%" }}
                            />
                          </Link>
                        </div>
                      </Row>
                    </MyCard>
                  ))}
                </>
              )}
            </WrapperCards>
          </>
        </div>
      </>
    </div>
  );
};

export default SportsContent;
