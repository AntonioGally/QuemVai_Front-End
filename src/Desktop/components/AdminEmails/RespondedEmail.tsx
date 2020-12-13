import React, { useState, useEffect } from "react";

import {
  TextBreadCumb,
  TrashIcon,
  TextLink,
  MyWrapper,
  MyTable,
  Header,
  Body,
  Informations,
} from "./styles";

import { Row, Spinner, Button } from "react-bootstrap";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { ListEmailRespondedAdmin } from "../../../@types";

import FormatDate from "./FormatDate";
import ModalDelete from "./ModalDelete";
import ModalInfoEmailResponded from "./ModalInfoEmailResponded";

interface Data {
  Emails: ListEmailRespondedAdmin[];
}

const AdminEmails: React.FC = () => {
  const [modalDeleteEmail, setModalDeleteEmail] = useState(false);
  const [modalInfoEmail, setModalInfoEmail] = useState(false);
  const [data, setData] = useState<Data>();
  const [auxId, setAuxId] = useState(Number);
  const [reload, setReload] = useState(0);
  const [erros, setErros] = useState("");

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/get/responded/email", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllEmailsResponded] = responses;
      const emails = await AllEmailsResponded.data;
      setData({ Emails: emails });
    });
  }, [reload]);

  function DeleteHandler() {
    if (!auxId) {
      setErros("Selecione um email");
    } else {
      setErros("");
      setModalDeleteEmail(true);
    }
  }

  function InfoHandler() {
    if (!auxId) {
      setErros("Selecione um email");
    } else {
      setErros("");
      setModalInfoEmail(true);
    }
  }

  return (
    <div>
      <div style={{ padding: "5% 20px 0 20px" }}>
        <Row style={{ margin: 0, justifyContent: "space-between" }}>
          <div>
            <TextBreadCumb>
              Admin {">"} Email {">"} <span>Email's respondidos</span>
            </TextBreadCumb>
          </div>
          <div>
            <Row
              style={{ margin: 0, alignItems: "center" }}
              onClick={DeleteHandler}
            >
              <TrashIcon /> <TextLink>Deletar Email</TextLink>
            </Row>
          </div>
        </Row>
      </div>
      <div className="row justify-content-center w-100">
        <MyWrapper style={{ marginTop: "1%" }}>
          <MyTable>
            <Header>
              <div style={{ width: "40%" }}>
                <span>Email</span>
              </div>
              <div style={{ width: "20%" }}>
                <span>Assunto</span>
              </div>
              <div style={{ width: "40%" }}>
                <span>Data da resposta</span>
              </div>
            </Header>
            <Body>
              {!data ? (
                <>
                  <Spinner animation="border" />
                </>
              ) : (
                <>
                  {data?.Emails.map((information) => (
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
                      <div style={{ width: "40%" }}>
                        <span>{information.email_user}</span>
                      </div>
                      <div style={{ width: "20%" }}>
                        <span>
                          {information.ownerMessage.map((i) => {
                            return i.subject;
                          })}
                        </span>
                      </div>
                      <div style={{ width: "40%" }}>
                        <FormatDate auxDate={information.updatedAt} />
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
              onClick={InfoHandler}
              style={{ marginBottom: "10px" }}
            >
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
      {modalDeleteEmail ? (
        <ModalDelete
          show={modalDeleteEmail}
          onHide={() => {
            setModalDeleteEmail(false);
            setReload(reload + 1);
          }}
          id={auxId}
        />
      ) : (
        ""
      )}
      {modalInfoEmail ? (
        <ModalInfoEmailResponded
          show={modalInfoEmail}
          onHide={() => {
            setModalInfoEmail(false);
          }}
          id={auxId}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminEmails;
