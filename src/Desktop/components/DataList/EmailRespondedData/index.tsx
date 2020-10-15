import React from "react";

import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

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
  const AuxDate = parseISO(String(EmailData));

  const formattedDate = format(AuxDate, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
    locale: pt,
  });
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
        <td>{formattedDate}</td>
      </tr>
    </>
  );
};

export default EmailRespondedData;
