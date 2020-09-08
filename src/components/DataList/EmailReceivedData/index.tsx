import React from "react";


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
  return (
    <>
      <tr>
        <td>{EmailId}</td>
        <td>{EmailUsuario}</td>
        <td>{EmailAssunto}</td>
        <td className="MyColReceivedData">{EmailMensagem}</td>
        <td>
          {EmailStatus}
        </td>
        <td>{EmailData}</td>
      </tr>
    </>
  );
};

export default EmailReceivedData;
