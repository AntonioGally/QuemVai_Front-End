import React from "react";

export interface Props {
  IdQuadra: number;
  NomeQuadra: string;
  EnderecoQuadra: string;
  CepQuadra: number;
  UfQuadra: string;
  LatitudeQuadra: number;
  LongitudeQuadra: number;
  DescricaoQuadra: string;
  StatusQuadra: boolean;
}

const QuadrasExistentesData: React.FC<Props> = ({
  IdQuadra,
  NomeQuadra,
  EnderecoQuadra,
  CepQuadra,
  UfQuadra,
  LatitudeQuadra,
  LongitudeQuadra,
  DescricaoQuadra,
  StatusQuadra,
}) => {
  return (
    <>
      <tr>
        <td>{IdQuadra}</td>
        <td>{NomeQuadra}</td>
        <td>{EnderecoQuadra}</td>
        <td>{CepQuadra}</td>
        <td>{UfQuadra}</td>
        <td>{LatitudeQuadra}</td>
        <td>{LongitudeQuadra}</td>
        <td>{DescricaoQuadra}</td>
        {StatusQuadra && <td>Ativa</td>}
        {!StatusQuadra && <td>Inativa</td>}
      </tr>
    </>
  );
};

export default QuadrasExistentesData;
