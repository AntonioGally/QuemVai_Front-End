import React, { useEffect, useState } from "react";

import {
  TextBreadCumb,
  SendIcon,
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
import { ListEmailReceivedAdmin } from "../../../@types";

import FormatDate from "./FormatDate";
import ModalRespondEmail from "./ModalRespondEmail";
import ModalInfoEmail from "./ModalInfoEmail";

interface Data {
  Emails: ListEmailReceivedAdmin[];
}

const AdminEmails: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [auxId, setAuxId] = useState(Number);
  const [reload, setReload] = useState(0);
  const [erros, setErros] = useState("");
  const [modalRespondEmail, setModalRespondEmail] = useState(false);
  const [modalInfoEmail, setModalInfoEmail] = useState(false);
  useEffect(() => {
    Promise.all([
      api.get("/api/admin/get/emails", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllEmailsReceived] = responses;
      const emails = await AllEmailsReceived.data;
      setData({ Emails: emails });
    });
  }, [reload]);

  function RespondHandler() {
    if (!auxId) {
      setErros("Selecione um email");
    } else {
      setErros("");
      setModalRespondEmail(true);
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
              Admin {">"} Email {">"} <span>Email's recebidos</span>
            </TextBreadCumb>
          </div>
          <div>
            <Row
              style={{ margin: 0, alignItems: "center" }}
              onClick={RespondHandler}
            >
              <SendIcon /> <TextLink>Responder Email</TextLink>
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
                <span>Data</span>
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
                        <span>{information.subject}</span>
                      </div>
                      <div style={{ width: "40%" }}>
                        <FormatDate auxDate={information.createdAt} />{" "}
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
      {modalRespondEmail ? (
        <ModalRespondEmail
          show={modalRespondEmail}
          onHide={() => {
            setModalRespondEmail(false);
            setReload(reload + 1);
          }}
          id={auxId}
        />
      ) : (
        ""
      )}
      {modalInfoEmail ? (
        <ModalInfoEmail
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
