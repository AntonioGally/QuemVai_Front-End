import React from "react";

import { Table } from "react-bootstrap";
import EsportesExistentesData from "../DataList/EsportesExistentesData";
import { MyContainer } from "./styles";

const esportes = {
  NomeEsporte: "Nome do Esporte",
  DescricaoEsporte: "Descrição do Esporte",
  LocalizacaoEsporte: "Localização do Esporte",
};

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const EsportesExistentesAdmin: React.FC = () => {
  return (
    <div className="row justify-content-center" style={{ margin: "10% 0" }}>
      <div style={{ width: "70%" }}>
        <h3 style={{ marginBottom: "3%" }}>Esportes cadastrados</h3>

        <MyContainer>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Localização</th>
              </tr>
            </thead>
            <tbody>
              {list.map((i) => (
                <EsportesExistentesData
                  key={i}
                  IdEsporte={i}
                  NomeEsporte={esportes.NomeEsporte}
                  DescricaoEsporte={esportes.DescricaoEsporte}
                  LocalizacaoEsporte={esportes.LocalizacaoEsporte}
                />
              ))}
            </tbody>
          </Table>
        </MyContainer>
      </div>
    </div>
  );
};

export default EsportesExistentesAdmin;
