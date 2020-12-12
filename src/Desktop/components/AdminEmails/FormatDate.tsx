import React from "react";
import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";
// import { Container } from './styles';

export interface Props {
  auxDate: Date;
}

const AdminEmails: React.FC<Props> = ({ auxDate }) => {
  const AuxDate = parseISO(String(auxDate));

  const formattedDate = format(AuxDate, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
    locale: pt,
  });
  return <span>{formattedDate}</span>;
};

export default AdminEmails;
