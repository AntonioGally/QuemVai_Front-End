import React, { useEffect, useState } from "react";

import { Row, Spinner, Button } from "react-bootstrap";
import {
  MyWrapper,
  TextBreadCumb,
  MyTable,
  Header,
  Body,
  Informations,
} from "./styles";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { EventInfo } from "../../../@types";

import ModalEventsInfo from "./ModalEventsInfo";
import ModalDelete from "./ModalDelete";

interface Data {
  Events: EventInfo[];
}

const AdminEvents: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [auxId, setAuxId] = useState(Number);
  const [auxIdSpace, setAuxIdSpace] = useState(Number);
  const [reload, setReload] = useState(0);
  const [erros, setErros] = useState("");
  const [modalEventsInfo, setModalEventsInfo] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get("/api/event/get/all", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllEvents] = responses;
      const events = await AllEvents.data;
      setData({ Events: events });
    });
  }, [reload]);

  function InfoHandler() {
    if (!auxId) {
      setErros("Selecione um evento");
    } else {
      setErros("");
      setModalEventsInfo(true);
    }
  }
  function DeleteHandler() {
    if (!auxIdSpace) {
      setErros("Selecione um evento");
    } else {
      setErros("");
      setModalDelete(true);
    }
  }

  return (
    <div>
      <div style={{ padding: "5% 20px 0 20px" }}>
        <Row style={{ margin: 0, justifyContent: "space-between" }}>
          <div>
            <TextBreadCumb>
              Admin {">"} <span>Eventos</span>
            </TextBreadCumb>
          </div>
        </Row>
      </div>
      <div className="row justify-content-center w-100">
        <MyWrapper>
          <MyTable>
            <Header>
              <div style={{ width: "25%" }}>
                <span>Nome</span>
              </div>
              <div style={{ width: "20%" }}>
                <span>Endereço</span>
              </div>
              <div style={{ width: "15%" }}>
                <span>CEP</span>
              </div>
              <div style={{ width: "10%" }}>
                <span>UF</span>
              </div>
              <div style={{ width: "20%" }}>
                <span>Criador</span>
              </div>
              <div style={{ width: "10%" }}>
                <span>Foto</span>
              </div>
            </Header>
            <Body>
              {!data ? (
                <>
                  <Spinner animation="border" />
                </>
              ) : (
                <>
                  {data?.Events.map((information) => (
                    <Informations
                      key={information.Id_Event}
                      onClick={() => {
                        setAuxId(Number(information.Id_Event));
                        setAuxIdSpace(Number(information.id_space));
                      }}
                      style={
                        auxId === Number(information.Id_Event)
                          ? { backgroundColor: "#659ddb" }
                          : { backgroundColor: "#fff" }
                      }
                    >
                      <div style={{ width: "25%" }}>
                        <span>{information.SpaceName}</span>
                      </div>
                      <div style={{ width: "20%" }}>
                        <span>{information.address}</span>
                      </div>
                      <div style={{ width: "15%" }}>
                        <span>{information.CEP}</span>
                      </div>
                      <div style={{ width: "10%" }}>
                        <span>{information.UF}</span>
                      </div>
                      <div style={{ width: "20%" }}>
                        <span>{information.author}</span>
                      </div>
                      <div style={{ width: "10%" }}>
                        <img
                          src={information.photos}
                          alt="user"
                          style={{
                            borderRadius: "50%",
                            width: "60px",
                            height: "60px",
                          }}
                        />
                      </div>
                    </Informations>
                  ))}
                </>
              )}
            </Body>
          </MyTable>
          <Row
            style={{
              margin: 0,
              justifyContent: "flex-end",
              width: "100%",
              marginTop: "2%",
            }}
          >
            <Button
              variant="primary"
              style={{ marginBottom: "10px", marginRight: "30px" }}
              onClick={InfoHandler}
            >
              Visualizar
            </Button>
            <Button
              variant="danger"
              style={{ marginBottom: "10px" }}
              onClick={DeleteHandler}
            >
              Finalizar
            </Button>
          </Row>
          <Row
            className="text-danger"
            style={{
              margin: 0,
              justifyContent: "flex-end",
              width: "100%",
              fontSize: "20px",
            }}
          >
            {erros}
          </Row>
        </MyWrapper>
      </div>
      {modalEventsInfo ? (
        <ModalEventsInfo
          show={modalEventsInfo}
          onHide={() => {
            setModalEventsInfo(false);
          }}
          id={auxId}
        />
      ) : (
        ""
      )}
      {modalDelete ? (
        <ModalDelete
          show={modalDelete}
          onHide={() => {
            setModalDelete(false);
            setReload(reload + 1);
          }}
          id={auxIdSpace}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminEvents;
