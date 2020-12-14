import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";
import { HeaderModal, ArrowBackIcon, TitleContent, MyInput } from "./styles";
import { Modal, Form, Row, Col, Spinner } from "react-bootstrap";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

import { EventInfo } from "../../../@types";

interface Data {
  Events: EventInfo;
}

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
}

const AdminEvents: React.FC<Props> = ({ show, onHide, id }) => {
  const [finalDate, setFinalDate] = useState("");
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get(`/api/event/get/find/${id}`, {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [EventsInfo] = responses;
      const events = await EventsInfo.data;
      const AuxDate = parseISO(String(events[0]["created_at"]));

      const formattedDate = format(
        AuxDate,
        "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
        {
          locale: pt,
        }
      );
      setFinalDate(formattedDate);
      setData({ Events: events[0] });
    });
  }, [id]);

  return (
    <Modal size="xl" animation={true} centered show={show} onHide={onHide}>
      <Modal.Body
        style={{ padding: 0, backgroundColor: "#DDDDDD", overflowY: "auto" }}
      >
        <HeaderModal>
          <ArrowBackIcon onClick={onHide} />
        </HeaderModal>
        {!data ? (
          <>
            <Spinner animation="border" />
          </>
        ) : (
          <>
            <div>
              <Form
                style={{
                  marginTop: "5%",
                  height: "500px",
                  padding: "20px",
                }}
              >
                <Row>
                  <Col md={6} lg={6}>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Nome do espaço</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="spaceName"
                              id="spaceName"
                              defaultValue={data?.Events.SpaceName}
                              readOnly
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Endereço do espaço</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="spaceAdress"
                              id="spaceAdress"
                              defaultValue={data?.Events.address}
                              readOnly
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row
                        style={{ margin: 0, justifyContent: "space-between" }}
                      >
                        <TitleContent>CEP do espaço</TitleContent>
                        <TitleContent>Estado</TitleContent>
                      </Row>
                      <Row
                        style={{ margin: 0, justifyContent: "space-between" }}
                      >
                        <Form.Group style={{ margin: 0, width: "80%" }}>
                          <MyInput>
                            <Form.Control
                              style={{ width: "89%" }}
                              readOnly
                              defaultValue={data?.Events.CEP}
                              name="SpaceCEP"
                              id="SpaceCEP"
                            />
                          </MyInput>
                        </Form.Group>
                        <Form.Group style={{ margin: 0, width: "20%" }}>
                          <MyInput>
                            <Form.Control
                              readOnly
                              defaultValue={data?.Events.UF}
                              name="SpaceUF"
                              id="SpaceUF"
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Descrição do espaço</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              as="textarea"
                              rows={8}
                              name="SpaceDescription"
                              id="SpaceDescription"
                              readOnly
                              defaultValue={data?.Events.SpaceDescription}
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                  </Col>
                  <Col md={6} lg={6}>
                    <div style={{ marginBottom: "5%" }}>
                      <Row
                        style={{ margin: 0, justifyContent: "space-between" }}
                      >
                        <TitleContent>Nome do usuário</TitleContent>
                        <TitleContent>ID do usuário</TitleContent>
                      </Row>
                      <Row
                        style={{ margin: 0, justifyContent: "space-between" }}
                      >
                        <Form.Group style={{ margin: 0, width: "80%" }}>
                          <MyInput>
                            <Form.Control
                              style={{ width: "89%" }}
                              readOnly
                              defaultValue={data?.Events.author}
                              name="UserName"
                              id="UserName"
                            />
                          </MyInput>
                        </Form.Group>
                        <Form.Group style={{ margin: 0, width: "20%" }}>
                          <MyInput>
                            <Form.Control
                              readOnly
                              defaultValue={data?.Events.AuthorID}
                              name="UserID"
                              id="UserID"
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Foto do usuário</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <img
                            src={data?.Events.photos}
                            alt="User"
                            style={{
                              borderRadius: "50%",
                              width: "100px",
                              height: "100px",
                            }}
                          />
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Nome do evento</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="EventName"
                              id="EventName"
                              defaultValue={data?.Events.name_event}
                              readOnly
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Esporte do evento</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="EventSport"
                              id="EventSport"
                              defaultValue={data?.Events.SportsName}
                              readOnly
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                      <Row style={{ margin: 0 }}>
                        <TitleContent>Data de criação</TitleContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <Form.Group style={{ margin: 0, width: "100%" }}>
                          <MyInput>
                            <Form.Control
                              name="EventDate"
                              id="EventDate"
                              defaultValue={finalDate}
                              readOnly
                            />
                          </MyInput>
                        </Form.Group>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AdminEvents;
