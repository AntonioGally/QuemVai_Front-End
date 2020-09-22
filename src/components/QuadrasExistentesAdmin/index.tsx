import React, { useEffect, useState } from "react";

import { MyContainer } from "./styles";
import { Table } from "react-bootstrap";
import QuadrasExistentesData from "../DataList/QuadrasExistentesData";


import api from "../services/api";
import { Token } from "../services/auth";
import { ListSpaceAdmin } from "../@types";

interface Data {
  Quadras: ListSpaceAdmin [];
}




const QuadrasExistentesAdmin: React.FC = () => {
  
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/find/all", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllSpaces] = responses;
      const quadras = await AllSpaces.data;
      setData({Quadras : quadras});
    });
  }, []);  


  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>Quadras existentes</h3>
          <MyContainer>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Endereço</th>
                  <th>CEP</th>
                  <th>UF</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Descrição</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.Quadras.map((information) => (
                  <QuadrasExistentesData
                    key={information.id}
                    IdQuadra={information.id}
                    NomeQuadra={information.name}
                    EnderecoQuadra={information.address}
                    CepQuadra={information.CEP}
                    UfQuadra={information.UF}
                    LatitudeQuadra={information.latitude}
                    LongitudeQuadra={information.longitude}
                    DescricaoQuadra={information.description}
                    StatusQuadra={information.status}
                  />
                ))}
              </tbody>
            </Table>
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default QuadrasExistentesAdmin;
