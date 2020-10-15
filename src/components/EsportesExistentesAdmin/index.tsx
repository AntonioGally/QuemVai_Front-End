import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import EsportesExistentesData from "../DataList/EsportesExistentesData";
import { MyContainer, MyWrapperTable } from "./styles";

import api from "../../services/api";
import { getTokenAdmin } from "../../services/auth";
import { ListSportsAdmin } from "../../@types";

interface Data {
  Esportes: ListSportsAdmin[];
}

const EsportesExistentesAdmin: React.FC = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/get/sport/cadastrar", {
        headers: { "x-auth-token": getTokenAdmin() },
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      }),
    ]).then(async (responses) => {
      const [AllSports] = responses;
      const esportes = await AllSports.data;
      setData({ Esportes: esportes });

      if (AllSports.status === 404) {
        alert("Houve algum problema com a listagem das quadras");
      }
    });
  }, []);

  return (
    <div className="row justify-content-center" style={{ margin: "10% 0" }}>
      <MyWrapperTable>
        <h3 style={{ marginBottom: "3%" }}>Esportes cadastrados</h3>

        <MyContainer>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {data?.Esportes.map((information) => (
                <EsportesExistentesData
                  key={information.id}
                  IdEsporte={information.id}
                  NomeEsporte={information.name}
                  DescricaoEsporte={information.description}
                />
              ))}
            </tbody>
          </Table>
        </MyContainer>
      </MyWrapperTable>
    </div>
  );
};

export default EsportesExistentesAdmin;
