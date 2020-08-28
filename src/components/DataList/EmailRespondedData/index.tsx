import React from "react";

import { Row, Col } from "react-bootstrap";

import { MyRow, StatusMessage } from "./styles";
import "./RespondedData.css";

export interface Props {
  EmailId: number;
  EmailRespondedId: number;
  EmailUsuario: string;
  EmailAssunto: string;
  EmailMensagem: string;
  EmailStatus: boolean;
  EmailData: number;
}

const EmailRespondedData: React.FC<Props> = ({
  EmailId,
  EmailRespondedId,
  EmailUsuario,
  EmailAssunto,
  EmailMensagem,
  EmailStatus,
  EmailData,
}) => {
  return (
    <MyRow>
      <Row style={{ margin: 0 }}>
        <Col
          style={{
            padding: "10px 5px",
            borderRight: "1px solid black",
            borderLeft: "1px solid black",
          }}
          className="text-center"
        >
          {EmailId}
        </Col>
        <Col
          style={{
            padding: "10px 5px",
            borderRight: "1px solid black",
            borderLeft: "1px solid black",
          }}
          className="text-center"
        >
          {EmailRespondedId}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {EmailUsuario}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {EmailAssunto}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="MyColRespondedData text-center"
        >
          {EmailMensagem}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {EmailStatus && <StatusMessage>Respondido</StatusMessage>}
          {!EmailStatus && <StatusMessage>Não Respondido</StatusMessage>}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {EmailData}
        </Col>
      </Row>
    </MyRow>
  );
};

export default EmailRespondedData;
