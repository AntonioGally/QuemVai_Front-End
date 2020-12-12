import React, { useEffect, useState } from "react";

import {
  MyWrapper,
  TextBreadCumb,
  TextLink,
  RefreshIcon,
  CompassIcon,
  TrashIcon,
  VolleyIcon,
  MyTable,
  Header,
  Body,
  Informations,
} from "./styles";
import { Row, Col, Spinner, Button } from "react-bootstrap";
import ModalAlterSpace from "./ModalAlterSpace";
import ModalAddSpace from "./ModalAddSpace";
import ModalDeleteSpace from "./ModalDeleteSpace";
import ModalSportsSpace from "./ModalSportsSpace";
import ModalSpaceInfo from "../ModalEventsUserApp/ModalSpaceInfo";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { ListSpaceAdmin } from "../../../@types";

interface Data {
  Quadras: ListSpaceAdmin[];
}

const QuadrasExistentesAdmin: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [auxId, setAuxId] = useState(Number);
  const [modalAddSpace, setModalAddSpace] = useState(false);
  const [modalAlterSpace, setModalAlterSpace] = useState(false);
  const [modalDeleteSpace, setModalDeleteSpace] = useState(false);
  const [modalInfoSpace, setModalInfoSpace] = useState(false);
  const [modalSportsSpace, setModalSportsSpace] = useState(false);
  const [reload, setReload] = useState(0);
  const [erros, setErros] = useState("");

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/find/all", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllSpaces] = responses;
      const quadras = await AllSpaces.data;
      setData({ Quadras: quadras });
    });
  }, [reload]);

  function AlterHandler() {
    if (!auxId) {
      setErros("Selecione um espaço");
    } else {
      setErros("");
      setModalAlterSpace(true);
    }
  }
  function DeleteHandler() {
    if (!auxId) {
      setErros("Selecione um espaço");
    } else {
      setErros("");
      setModalDeleteSpace(true);
    }
  }
  function InfoHandler() {
    if (!auxId) {
      setErros("Selecione um espaço");
    } else {
      setErros("");
      setModalInfoSpace(true);
    }
  }
  function SportsHandler() {
    if (!auxId) {
      setErros("Selecione um espaço");
    } else {
      setErros("");
      setModalSportsSpace(true);
    }
  }

  return (
    <div>
      <div style={{ padding: "5% 20px 0 20px" }}>
        <Row style={{ margin: 0, justifyContent: "space-between" }}>
          <div>
            <TextBreadCumb>
              Admin {">"} <span>Quadras</span>
            </TextBreadCumb>
          </div>
          <div className="row" style={{ margin: 0, width: "50%" }}>
            <Col>
              <Row
                style={{ margin: 0, alignItems: "center" }}
                onClick={AlterHandler}
              >
                <RefreshIcon /> <TextLink>Atualizar Quadra</TextLink>
              </Row>
              <Row
                style={{ margin: 0, alignItems: "center" }}
                onClick={() => setModalAddSpace(true)}
              >
                <CompassIcon /> <TextLink>Adicionar Quadra</TextLink>
              </Row>
            </Col>
            <Col>
              <Row
                style={{ margin: 0, alignItems: "center" }}
                onClick={DeleteHandler}
              >
                <TrashIcon /> <TextLink>Remover Quadra</TextLink>
              </Row>
              <Row
                style={{ margin: 0, alignItems: "center" }}
                onClick={SportsHandler}
              >
                <VolleyIcon /> <TextLink>Adicionar Esporte à Quadra</TextLink>
              </Row>
            </Col>
          </div>
        </Row>
      </div>
      <div className="row justify-content-center w-100">
        <MyWrapper>
          <MyTable>
            <Header>
              <div style={{ width: "20%" }}>
                <span>Nome</span>
              </div>
              <div style={{ width: "30%" }}>
                <span>Endereço</span>
              </div>
              <div style={{ width: "10%" }}>
                <span>CEP</span>
              </div>
              <div style={{ width: "10%" }}>
                <span>UF</span>
              </div>
              <div style={{ width: "10%" }}>
                <span>Status</span>
              </div>
              <div style={{ width: "20%" }}>
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
                  {data?.Quadras.map((information) => (
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
                      <div style={{ width: "20%" }}>
                        <span>{information.name}</span>
                      </div>
                      <div style={{ width: "30%" }}>
                        <span>{information.address}</span>
                      </div>
                      <div style={{ width: "10%" }}>
                        <span>{information.CEP}</span>
                      </div>
                      <div style={{ width: "10%" }}>
                        <span>{information.UF}</span>
                      </div>
                      <div style={{ width: "10%" }}>
                        {!information.status ? (
                          <span>Inativo</span>
                        ) : (
                          <span>Ativo</span>
                        )}
                      </div>
                      <div style={{ width: "20%" }}>
                        <span>{information.description}</span>
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
            <Button variant="primary" onClick={InfoHandler}>
              Visualizar
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
      {modalAddSpace ? (
        <ModalAddSpace
          show={modalAddSpace}
          onHide={() => {
            setModalAddSpace(false);
            setReload(reload + 1);
          }}
        />
      ) : (
        ""
      )}
      {modalAlterSpace ? (
        <ModalAlterSpace
          show={modalAlterSpace}
          onHide={() => {
            setModalAlterSpace(false);
            setReload(reload + 1);
          }}
          id={auxId}
        />
      ) : (
        ""
      )}
      {modalDeleteSpace ? (
        <ModalDeleteSpace
          show={modalDeleteSpace}
          onHide={() => {
            setModalDeleteSpace(false);
            setReload(reload + 1);
          }}
          id={auxId}
        />
      ) : (
        ""
      )}
      {modalInfoSpace ? (
        <ModalSpaceInfo
          show={modalInfoSpace}
          onHide={() => {
            setModalInfoSpace(false);
            setReload(reload + 1);
          }}
          id={auxId}
        />
      ) : (
        ""
      )}
      {modalSportsSpace ? (
        <ModalSportsSpace
          show={modalSportsSpace}
          onHide={() => {
            setModalSportsSpace(false);
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

export default QuadrasExistentesAdmin;
