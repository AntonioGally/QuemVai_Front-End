import React from "react";

import { Row, Col } from "react-bootstrap";

import { MyContainer } from "./styles";
import EmailReceivedData from "../DataList/EmailReceivedData";

const emails = {
  EmailId: 1,
  EmailUsuario: "antonio.gally@gmail.com",
  EmailAssunto: "Assunto do email",
  EmailMensagem:
    "Mensagem do Email Mensagem do Email Mensagem do Email Mensagem do Email ",
  EmailStatus: false,
  EmailData: 20112002,
};

const listData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EmailReceived: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>Emails Recebidos</h3>
          <MyContainer>
            <Row style={{ margin: '2% 0', border:'1px solid black'}} className="justify-content-center">
              <Col
                style={{
                  padding: "10px 5px",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                }}
                className="text-center"
              >
                Id do Email
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Email do usuário
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Assunto do Email
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Mensagem do Email
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Status do Email
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Data de envio
              </Col>
            </Row>
            {listData.map((i) => (
              <EmailReceivedData
                key={i}
                EmailId={i}
                EmailUsuario={emails.EmailUsuario}
                EmailAssunto={emails.EmailAssunto}
                EmailMensagem={emails.EmailMensagem}
                EmailStatus={emails.EmailStatus}
                EmailData={emails.EmailData}
              />
            ))}
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default EmailReceived;
