import React from "react";



import {  StatusMessage } from "./styles";
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
    <>
      <tr>
        <td>{EmailId}</td>
        <td>{EmailUsuario}</td>
        <td>{EmailAssunto}</td>
        <td className="MyColReceivedData">{EmailMensagem}</td>
        <td>
          {EmailStatus && <StatusMessage>Respondido</StatusMessage>}
          {!EmailStatus && <StatusMessage>Não Respondido</StatusMessage>}
        </td>
        <td>{EmailData}</td>
      </tr>
    </>
  );
};

export default EmailRespondedData;
