import React from "react";

import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

import "./ReceivedData.css";

export interface Props {
  EmailId: number;
  EmailUsuario: string;
  EmailAssunto: string;
  EmailMensagem: string;
  EmailStatus: string;
  EmailData: Date;
}

const EmailReceivedData: React.FC<Props> = ({
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
        <td>{EmailStatus}</td>
        <td>{formattedDate}</td>
      </tr>
    </>
  );
};

export default EmailReceivedData;
