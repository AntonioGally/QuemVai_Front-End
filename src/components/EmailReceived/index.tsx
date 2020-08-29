import React from "react";

import { Table } from "react-bootstrap";

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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email do Usuário</th>
                  <th>Assunto</th>
                  <th>Mensagem</th>
                  <th>Status do Email</th>
                  <th>Data de envio</th>
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </Table>
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default EmailReceived;
