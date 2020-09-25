import React, {useState, useEffect} from "react";

import { Table } from "react-bootstrap";

import { MyContainer, MyWrapperTable } from "./styles";
import EmailReceivedData from "../DataList/EmailReceivedData";

import api from "../services/api";
import {ListEmailReceivedAdmin} from "../@types";
import { getTokenAdmin } from "../services/auth";

interface Data {
  EmailsReceived: ListEmailReceivedAdmin [];
}

const EmailReceived: React.FC = () => {

  const [data, setData] = useState<Data>();
  useEffect(() => {
    Promise.all([
      api.get("/api/admin/get/emails", {
        headers: { "x-auth-token": getTokenAdmin() },
      }),
    ]).then(async (responses) => {
      const [AllEmailsReceived] = responses;
      const emails = await AllEmailsReceived.data;
      setData({EmailsReceived : emails});
    });
  }, []);  
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <MyWrapperTable>
          <h3 style={{ marginBottom: "3%" }}>Emails Recebidos</h3>
          <MyContainer>
            <Table striped bordered hover variant="light">
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
                {data?.EmailsReceived.map((information) => (
                  <EmailReceivedData
                    key={information.id}
                    EmailId={information.id}
                    EmailUsuario={information.email_user}
                    EmailAssunto={information.subject}
                    EmailMensagem={information.message}
                    EmailStatus={information.status}
                    EmailData={information.createdAt}
                  />
                ))}
              </tbody>
            </Table>
          </MyContainer>
        </MyWrapperTable>
      </div>
    </div>
  );
};

export default EmailReceived;
