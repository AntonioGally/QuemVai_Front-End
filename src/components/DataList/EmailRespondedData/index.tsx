import React from "react";

import { StatusMessage } from "./styles";
import "./RespondedData.css";

export interface Props {
  EmailId: number;

  EmailUsuario: string;
  EmailAssunto: any;
  EmailMensagem: any;
  EmailStatus: string;
  EmailData: Date;
}

const EmailRespondedData: React.FC<Props> = ({
  EmailId,

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
