import React from "react";

export interface Props {
  IdEsporte: number;
  NomeEsporte: string;
  DescricaoEsporte: string;
}
const EsportesExistentesData: React.FC<Props> = ({
  IdEsporte,
  NomeEsporte,
  DescricaoEsporte,
}) => {
  return (
    <>
      <tr>
        <td>{IdEsporte}</td>
        <td>{NomeEsporte}</td>
        <td>{DescricaoEsporte}</td>    
      </tr>
    </>
  );
};

export default EsportesExistentesData;
