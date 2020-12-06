import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Redirect, Link } from "react-router-dom";
import { Row, Spinner, Form } from "react-bootstrap";

import Buttons from "../../elements/Buttons";

import {
  ArrowBackIcon,
  Title,
  ContainerSvg,
  StarIcon,
  SubTitle,
  TextContent,
  ComboBox,
  TextArea,
} from "./styles";

import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { SpaceInformationEventeCreate } from "../../../@types";

export interface Props {
  idSpace: number;
  fromWhere: string;
}

type IFormInput = {
  description: string;
  id_sport: number;
};
interface Data {
  SpaceInfo: SpaceInformationEventeCreate;
}

const EventeCreateContent: React.FC<Props> = ({ idSpace, fromWhere }) => {
  const [arrowBack, setArrowBack] = React.useState(false);

  const [colorStar, setColorStar] = React.useState(Boolean);
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const [success, setSuccess] = React.useState("");
  const [erros, setErros] = React.useState("");
  const [lenghtDescription, setLenghtDescription] = React.useState(Number);
  const [inputValue, setInputValue] = React.useState("");
  const [isMax, setIsMax] = React.useState(Boolean);

  var config = {
    headers: { "x-auth-token": Token() },
    validateStatus: function (status: any) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  };

  const onSubmit = async (data: IFormInput) => {
    var name_Event = data.description;
    var id_space = idSpace;
    var id_sport = data.id_sport;

    try {
      const response = await api.post(
        "/api/event/create",
        { name_Event, id_space, id_sport },
        config
      );
      if (response.data["Event created"] && response.status === 200) {
        setSuccess("Evento criado com sucesso!");
      }

      if (!response.data["Event created"] || response.status === 204) {
        setErros("Algo de errado ocorreu ;(");
      }
      if (response.data["Court in use"] || response.status === 406) {
        setErros("Você já criou um evento relacionado à essa quadra ");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Promise.all([
      api.get(`/api/search/space/${idSpace}`, {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [SpaceInfo] = responses;
      // eslint-disable-next-line
      const informations = await SpaceInfo.data;
      setData({ SpaceInfo: informations });
    });
  }, [idSpace]);

  useEffect(() => {
    setLenghtDescription(inputValue.length);
    if (inputValue.length >= 50) {
      setLenghtDescription(50);
      setIsMax(true);
    } else {
      setLenghtDescription(inputValue.length);
      setIsMax(false);
    }
  }, [inputValue]);

  useEffect(() => {
    Promise.all([
      api.get(`/api/favorites/get/place`, {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [FavoriteSpace] = responses;
      // eslint-disable-next-line
      const informations = await FavoriteSpace.data;

      for (var i = 0; i < informations.length; i++) {
        if (informations[i].Space_id === Number(idSpace)) {
          setColorStar(true);
        }
      }
    });
  }, [idSpace]);

  const StarClick = async () => {
    setColorStar(!colorStar);
    try {
      setLoading(true);
      if (!colorStar) {
        const response = await api.post(
          `/api/favorites/add/place/${idSpace}`,
          {},
          config
        );
        if (response.data["Favorite Place added"] && response.status === 200) {
          setSuccess("Espaço favoritado com sucesso!");
          setErros("");
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setLoading(false);
        }
        if (response.status === 206) {
          setErros("Esse espaço não existe");
          setLoading(false);
        }
      } else {
        const response = await api.delete(
          `/api/favorites/remove/place/${idSpace}`,
          config
        );
        if (response.data["Removed favorites"] && response.status === 200) {
          setSuccess("Espaço deletado com sucesso!");
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setLoading(false);
        }
        if (response.status === 206) {
          setErros("Esse espaço não existe");
          setLoading(false);
        }
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (arrowBack) {
    return <Redirect to="/MobileEventSpace" />;
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
      <Row
        style={{
          margin: "20px 0",
          alignItems: "center",
          padding: "10px",
          justifyContent: "flex-start",
        }}
      >
        <Title>{data?.SpaceInfo.name}</Title>
        <StarIcon
          onClick={StarClick}
          style={{ fill: `${colorStar ? "yellow" : "transparent"}` }}
        />
      </Row>
      {!data ? (
        <div className="text-center" style={{ marginTop: "5%" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ width: "90%", margin: "40px auto 0 auto" }}>
              <Row
                style={{
                  margin: 0,
                  alignItems: "center",
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <SubTitle>Endereço:</SubTitle>
                <TextContent>{data?.SpaceInfo.address}</TextContent>
              </Row>
              <Row
                style={{
                  margin: 0,
                  alignItems: "center",
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <SubTitle>CEP:</SubTitle>
                <TextContent>{data?.SpaceInfo.CEP}</TextContent>
              </Row>

              <Row
                style={{
                  margin: 0,
                  alignItems: "center",
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <SubTitle>Esporte:</SubTitle>
                <ComboBox>
                  <Form.Group style={{ margin: 0 }}>
                    <Form.Control
                      as="select"
                      id="id_sport"
                      name="id_sport"
                      ref={register}
                    >
                      {data?.SpaceInfo.space.map((information) => (
                        <option key={information.id} value={information.id}>
                          {information.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </ComboBox>
              </Row>

              <Row
                style={{
                  margin: 0,
                  alignItems: "center",
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <SubTitle>Descrição:</SubTitle>
                <TextArea>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      name="description"
                      id="description"
                      onChange={(e) => setInputValue(e.target.value)}
                      rows={4}
                      ref={register({
                        maxLength: {
                          value: 50,
                          message: "Insira no máximo 50 caractéres",
                        },
                        required: {
                          value: true,
                          message: "Insira uma descrição",
                        },
                      })}
                    />
                    {errors.description &&
                      (errors.description as any).type === "maxLength" && (
                        <div className="error">
                          {(errors.description as any).message}
                        </div>
                      )}
                    {errors.description &&
                      (errors.description as any).type === "required" && (
                        <div className="error">
                          {(errors.description as any).message}
                        </div>
                      )}
                  </Form.Group>
                  <span className={`${isMax ? "text-danger" : "text-success"}`}>
                    {lenghtDescription} / 50
                  </span>
                </TextArea>
              </Row>
              {loading ? <Spinner animation="border" /> : ""}
              <div
                className="text-success"
                style={{ fontFamily: "Poppins", fontSize: "20px" }}
              >
                {success}
              </div>
              <div
                className="text-danger"
                style={{ fontFamily: "Poppins", fontSize: "20px" }}
              >
                {erros}
              </div>
            </div>

            <Row style={{ width: "100%", margin: 0, justifyContent: "center" }}>
              <div style={{ width: "80%" }}>
                <Buttons text="Criar" submit />
              </div>
            </Row>
            <Row
              style={{
                width: "100%",
                margin: "15px 0",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "80%" }}>
                <Link to="/MobileEventSpace">
                  <Buttons text="Voltar" fill />
                </Link>
              </div>
            </Row>
          </Form>
        </>
      )}
    </div>
  );
};

export default EventeCreateContent;
