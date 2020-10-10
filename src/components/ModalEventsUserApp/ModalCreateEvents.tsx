import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Form,
  Spinner,
} from "react-bootstrap";
import {
  MyTitleModalCreateEvents,
  StarIcon,
  MySubTitleModalCreateEvents,
  MyTextContentModalCreateEvents,
  MyTextAreaModalCreateEvents,
  MyButton,
  ArrowBackIcon,
} from "./styles";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

import api from "../services/api";
import { Token } from "../services/auth";
import { SpaceInformationEventeCreate } from "../@types";

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
}
type IFormInput = {
  description: string;
  id_sport: number;
};
interface Data {
  SpaceInfo: SpaceInformationEventeCreate;
}
const ModalEventsUserApp: React.FC<Props> = ({ show, onHide, id }) => {
  const [colorStar, setColorStar] = React.useState(Boolean);
  const [data, setData] = useState<Data>();

  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const [loading, setLoading] = React.useState(false);
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
    var id_space = id;
    var id_sport = data.id_sport;

    try {
      setLoading(true);
      const response = await api.post(
        "/api/event/create",
        { name_Event, id_space, id_sport },
        config
      );
      if (response.data["Event created"] && response.status === 200) {
        setSuccess("Evento criado com sucesso!");
        setLoading(false);
      }

      if (!response.data["Event created"] || response.status === 204) {
        setErros("Algo de errado ocorreu ;(");
        setLoading(false);
      }
      if (response.data["Court in use"] || response.status === 406) {
        setErros("Você já criou um evento relacionado à essa quadra ");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    Promise.all([
      api.get(`/api/search/space/${id}`, {
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
  }, [id]);

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

  const renderTooltipStar = (props: any) => (
    <Tooltip id="star-icon" {...props}>
      Favoritar o local
    </Tooltip>
  );
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
        if (informations[i].Space_id === id) {
          setColorStar(true);
        }
      }
    });
  }, [id]);
  const StarClick = async () => {
    setColorStar(!colorStar);
    try {
      setLoading(true);
      if (!colorStar) {
        const response = await api.post(
          `/api/favorites/add/place/${id}`,
          {},
          config
        );
        if (response.data["Favorite Place added"] && response.status === 200) {
          setSuccess("Espaço favoritado com sucesso!");
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
          `/api/favorites/remove/place/${id}`,
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

  return (
    <div>
      <Modal size="lg" centered show={show} onHide={onHide}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="WrapperModalCreateEvent">
            <div className="MySvgGerenciarUserModal">
              <img
                src={SvgModalConfigUser}
                alt="Art Top"
                width="100%"
                style={{ borderTopLeftRadius: "30px" }}
              />
            </div>
            <div style={{ margin: "3% 0 0 3%" }}>
              <ArrowBackIcon onClick={onHide} />
            </div>
            <Modal.Body style={{ padding: "30px" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <MyTitleModalCreateEvents>
                  {data?.SpaceInfo.name}
                </MyTitleModalCreateEvents>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 250 }}
                  overlay={renderTooltipStar}
                >
                  <StarIcon
                    onClick={StarClick}
                    style={{ fill: `${colorStar ? "yellow" : "transparent"}` }}
                  />
                </OverlayTrigger>
              </Row>
              <div style={{ marginBottom: "4%", marginTop: "4%" }}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <Col lg={2} md={12}>
                    <MySubTitleModalCreateEvents>
                      Endereço:
                    </MySubTitleModalCreateEvents>
                  </Col>
                  <Col lg={10} md={12}>
                    <MyTextContentModalCreateEvents>
                      {data?.SpaceInfo.address}
                    </MyTextContentModalCreateEvents>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: "4%", marginTop: "4%" }}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <Col lg={1} md={12}>
                    <MySubTitleModalCreateEvents>
                      CEP:
                    </MySubTitleModalCreateEvents>
                  </Col>
                  <Col lg={10} md={12}>
                    <MyTextContentModalCreateEvents>
                      {data?.SpaceInfo.CEP}
                    </MyTextContentModalCreateEvents>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: "4%", marginTop: "4%" }}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <Col lg={2} md={12}>
                    <MySubTitleModalCreateEvents>
                      Esporte:
                    </MySubTitleModalCreateEvents>
                  </Col>
                  <Col lg={8} md={12}>
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
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: "4%", marginTop: "4%" }}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <Col lg={2} md={12}>
                    <MySubTitleModalCreateEvents style={{ marginBottom: "4%" }}>
                      Descrição:
                    </MySubTitleModalCreateEvents>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9} md={12}>
                    <MyTextAreaModalCreateEvents>
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
                    </MyTextAreaModalCreateEvents>
                    <span
                      className={`${isMax ? "text-danger" : "text-success"}`}
                    >
                      {lenghtDescription} / 50
                    </span>
                  </Col>
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
            </Modal.Body>
            <Modal.Footer>
              <MyButton type="submit" style={{ marginRight: "10px" }}>
                Criar evento
              </MyButton>
              <MyButton type="button" onClick={onHide}>
                Voltar
              </MyButton>
            </Modal.Footer>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalEventsUserApp;
