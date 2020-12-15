import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Row, Spinner } from "react-bootstrap";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { SearchMain } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

import {
  ArrowBackIcon,
  ContainerSvg,
  Title,
  WrapperCards,
  MyCard,
  SubTitle,
  TextContent,
  AddIcon,
  WhistleIcon,
  VolleyIcon,
  ExitIcon,
  CompassIcon,
  SearchIcon,
} from "./styles";

export interface Props {
  word?: string;
}

interface Data {
  SearchList: SearchMain[];
}

const SearchMainContent: React.FC<Props> = ({ word }) => {
  const [arrowBack, setArrowBack] = React.useState(false);
  const [data, setData] = React.useState<Data>();

  const [existPeople, setExistPeople] = React.useState(false);
  const [existEvents, setExistEvents] = React.useState(false);
  const [existSports, setExistSports] = React.useState(false);
  const [existSpaces, setExistSpaces] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [erros, setErros] = React.useState("");
  const [reload, setReload] = React.useState(Number);

  // const [auxId, setAuxId] = useState(Number);
  const [userId, setUserId] = useState(Number);

  useEffect(() => {
    Promise.all([
      api.get("/api/user/bring/me", {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [Info] = responses;
      const results = await Info;
      setUserId(results.data["info"]["id"]);
    });
  }, [reload]);

  useEffect(() => {
    Promise.all([
      api.post(
        "/api/search/main",
        { word: word },
        {
          headers: { "x-auth-token": Token() },
        }
      ),
    ]).then(async (responses) => {
      const [PushSearchList] = responses;
      const response = await PushSearchList.data;

      if (Array(response[0]["Sports"])[0].length > 0) {
        setExistSports(true);
      }
      if (Array(response[1]["Users"])[0].length > 0) {
        setExistPeople(true);
      }
      if (Array(response[2]["Events"])[0].length > 0) {
        setExistEvents(true);
      }
      if (Array(response[3]["Spaces"])[0].length > 0) {
        setExistSpaces(true);
      }

      setData({ SearchList: response });
    });
  }, [word, reload, userId]);

  const addClickHandle = async (idUser: number) => {
    var config = {
      headers: { "x-auth-token": Token() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };
    try {
      const response = await api.post(`/api/user/invite/${idUser}`, {}, config);
      if (response.status === 200 && response.data["Request sent"]) {
        setSuccess("Solicitação enviada com sucesso!");
        setReload(reload + 1);
        setErros("");
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
      if (response.status === 406 && response.data["Request already sended"]) {
        setErros("Parece que a solicitação já foi enviada");
      }
      if (response.status === 422 && response.data["Equals id's"]) {
        setErros("Este é o seu ID");
      }
      if (response.status === 204) {
        setErros("Esse usuário não existe");
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

      {!data ? (
        <div className="text-center" style={{ marginTop: "5%" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div
            className="text-success"
            style={{
              fontFamily: "Poppins",
            }}
          >
            {success}
          </div>
          <div
            className="text-danger"
            style={{
              fontFamily: "Poppins",
            }}
          >
            {erros}
          </div>
          <div>
            {existPeople ? (
              <>
                <div>
                  <div
                    className="row"
                    style={{
                      margin: "20px 0",
                      alignItems: "center",
                      padding: "10px",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Title>Pessoas</Title>
                  </div>
                  <WrapperCards>
                    {data?.SearchList[1].Users.map((information) => (
                      <MyCard key={information.id}>
                        <Row>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "25%",
                            }}
                          >
                            <img
                              src={information.photos}
                              alt="User"
                              style={{
                                width: "65px",
                                height: "65px",
                                borderRadius: "50%",
                              }}
                            />
                          </div>

                          <div style={{ width: "50%" }}>
                            <Row style={{ alignItems: "center", margin: 0 }}>
                              <SubTitle>{information.username}</SubTitle>
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
                            <AddIcon
                              onClick={() => addClickHandle(information.id)}
                            />
                          </div>
                        </Row>
                      </MyCard>
                    ))}
                  </WrapperCards>
                </div>
              </>
            ) : (
              ""
            )}
            {existEvents ? (
              <>
                <div
                  className="row"
                  style={{
                    margin: "20px 0",
                    alignItems: "center",
                    padding: "10px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Title>Eventos</Title>
                </div>
                <WrapperCards className="scrollSearchMobile">
                  {data?.SearchList[2].Events.map((information) => (
                    <MyCard key={information.id}>
                      <Row>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "25%",
                          }}
                        >
                          <WhistleIcon />
                        </div>

                        <div style={{ width: "50%" }}>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>Nome: </SubTitle>
                            <TextContent>{information.name_event}</TextContent>
                          </Row>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>Endereço: </SubTitle>
                            <TextContent>
                              {information.EventsOwnerSpaces.address}
                            </TextContent>
                          </Row>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>CEP: </SubTitle>
                            <TextContent>
                              {information.EventsOwnerSpaces.CEP}
                            </TextContent>
                          </Row>
                        </div>
                      </Row>
                    </MyCard>
                  ))}
                </WrapperCards>
              </>
            ) : (
              ""
            )}
            {existSports ? (
              <>
                <div
                  className="row"
                  style={{
                    margin: "20px 0",
                    alignItems: "center",
                    padding: "10px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Title>Esportes</Title>
                </div>
                <WrapperCards className="scrollSearchMobile">
                  {data?.SearchList[0].Sports.map((information) => (
                    <MyCard key={information.id}>
                      <Row>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "25%",
                          }}
                        >
                          <VolleyIcon />
                        </div>

                        <div style={{ width: "50%" }}>
                          <Row style={{ alignItems: "center", margin: 0 }}>
                            <SubTitle>{information.name}</SubTitle>
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
                          <ExitIcon />
                        </div>
                      </Row>
                    </MyCard>
                  ))}
                </WrapperCards>
              </>
            ) : (
              ""
            )}
            {existSpaces ? (
              <>
                <div
                  className="row"
                  style={{
                    margin: "20px 0",
                    alignItems: "center",
                    padding: "10px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Title>Esportes</Title>
                </div>
                <WrapperCards className="scrollSearchMobile">
                  {data?.SearchList[3].Spaces.map((information) => (
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
                          <CompassIcon />
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
                          <SearchIcon />
                          <ExitIcon />
                        </div>
                      </Row>
                    </MyCard>
                  ))}
                </WrapperCards>
              </>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchMainContent;
