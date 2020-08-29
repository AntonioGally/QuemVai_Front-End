import React from "react";

export interface Props {
  IdEsporte: number;
  NomeEsporte: string;
  DescricaoEsporte: string;
  LocalizacaoEsporte: string;
}
const EsportesExistentesData: React.FC<Props> = ({
  IdEsporte,
  NomeEsporte,
  DescricaoEsporte,
  LocalizacaoEsporte,
}) => {
  return (
    <>
      <tr>
        <td>{IdEsporte}</td>
        <td>{NomeEsporte}</td>
        <td>{DescricaoEsporte}</td>
        <td>{LocalizacaoEsporte}</td>
      </tr>
    </>
  );
};

export default EsportesExistentesData;
