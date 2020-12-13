import React, { useEffect, useState } from "react";

import { Row, Col, Spinner } from "react-bootstrap";
import {
  MyWrapper,
  TextBreadCumb,
  TextLink,
  RefreshIcon,
  AddIcon,
  TrashIcon,
  MyTable,
  Header,
  Body,
  Informations,
} from "./styles";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { ListSportsAdmin } from "../../../@types";

import ModalUpdateSport from "./ModalUpdateSport";
import ModalAddSport from "./ModalAddSport";
import ModalDelete from "./ModalDelete";

interface Data {
  Sports: ListSportsAdmin[];
}

const AdminSports: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [auxId, setAuxId] = useState(Number);
  const [modalUpdateSport, setModalUpdateSport] = useState(false);
  const [modalAddSport, setModalAddSport] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [reload, setReload] = useState(0);
  const [erros, setErros] = useState("");

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/get/sport/cadastrar", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllSports] = responses;
      const esportes = await AllSports.data;
      setData({ Sports: esportes });
    });
  }, [reload]);

  function UpdateHandler() {
    if (!auxId) {
      setErros("Selecione um espaço");
    } else {
      setErros("");
      setModalUpdateSport(true);
    }
  }

  function AddHandler() {
    if (!auxId) {
      setErros("Selecione um espaço");
    } else {
      setErros("");
      setModalAddSport(true);
    }
  }

  function DeleteHandler() {
    if (!auxId) {
      setErros("Selecione um espaço");
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
              Admin {">"} <span>Esportes</span>
            </TextBreadCumb>
          </div>
          <div className="row" style={{ margin: 0, width: "50%" }}>
            <Col>
              <Row
                style={{ margin: 0, alignItems: "center" }}
                onClick={UpdateHandler}
              >
                <RefreshIcon /> <TextLink>Atualizar Esporte</TextLink>
              </Row>
              <Row
                style={{ margin: 0, alignItems: "center" }}
                onClick={AddHandler}
              >
                <AddIcon /> <TextLink>Adicionar Esporte</TextLink>
              </Row>
            </Col>
            <Col>
              <Row
                style={{ margin: 0, alignItems: "center" }}
                onClick={DeleteHandler}
              >
                <TrashIcon /> <TextLink>Remover Esporte</TextLink>
              </Row>
            </Col>
          </div>
        </Row>
      </div>
      <div className="row justify-content-center w-100">
        <MyWrapper>
          <MyTable>
            <Header>
              <div style={{ width: "50%" }}>
                <span>Nome</span>
              </div>

              <div style={{ width: "50%" }}>
                <span>Descrição</span>
              </div>
            </Header>
            <Body>
              {!data ? (
                <>
                  <Spinner animation="border" />
                </>
              ) : (
                <>
                  {data?.Sports.map((information) => (
                    <Informations
                      key={information.id}
                      onClick={() => {
                        setAuxId(Number(information.id));
                      }}
                      style={
                        auxId === Number(information.id)
                          ? { backgroundColor: "#659ddb" }
                          : { backgroundColor: "#fff" }
                      }
                    >
                      <div style={{ width: "50%" }}>
                        <span>{information.name}</span>
                      </div>

                      <div style={{ width: "50%" }}>
                        <span>{information.description}</span>
                      </div>
                    </Informations>
                  ))}
                </>
              )}
            </Body>
          </MyTable>
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
      {modalUpdateSport ? (
        <ModalUpdateSport
          show={modalUpdateSport}
          onHide={() => {
            setModalUpdateSport(false);
            setReload(reload + 1);
          }}
          id={auxId}
        />
      ) : (
        ""
      )}
      {modalAddSport ? (
        <ModalAddSport
          show={modalAddSport}
          onHide={() => {
            setModalAddSport(false);
            setReload(reload + 1);
          }}
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
          id={auxId}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminSports;
