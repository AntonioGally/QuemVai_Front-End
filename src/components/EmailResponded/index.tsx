import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import { MyContainer, MyWrapperTable } from "./styles";
import EmailRespondedData from "../DataList/EmailRespondedData";

import api from "../services/api";
import { ListEmailRespondedAdmin } from "../@types";
import { getTokenAdmin } from "../services/auth";

interface Data {
  EmailsResponded: ListEmailRespondedAdmin[];
}
const EmailResponded: React.FC = () => {
  const [data, setData] = useState<Data>();
  useEffect(() => {
    Promise.all([
      api.get("/api/admin/get/responded/email", {
        headers: { "x-auth-token": getTokenAdmin() },
      }),
    ]).then(async (responses) => {
      const [AllEmailsResponded] = responses;
      const emails = await AllEmailsResponded.data;
      setData({ EmailsResponded: emails });
    });
  }, []);

  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <MyWrapperTable>
          <h3 style={{ marginBottom: "3%" }}>Emails Respondidos</h3>
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
                {data?.EmailsResponded.map((information) => (
                  <EmailRespondedData
                    key={information.id}
                    EmailId={information.id}
                    EmailUsuario={information.email_user}
                    EmailAssunto={information.ownerMessage.map((i) => {
                      return i.subject;
                    })}
                    EmailMensagem={information.ownerMessage.map((i) => {
                      return i.message;
                    })}
                    EmailStatus={information.status}
                    EmailData={information.updatedAt}
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

export default EmailResponded;
