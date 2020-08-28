import React from "react";

import { MyContainer } from "./styles";
import { Row, Col } from "react-bootstrap";
import QuadrasExistentesData from "../DataList/QuadrasExistentesData";

const quadras = {
  NomeQuadra: "Nome da quadra",
  EnderecoQuadra: "Endereço da quadra",
  CepQuadra: 111222333,
  UfQuadra: "Uf da quadra",
  LatitudeQuadra: 123456,
  LongitudeQuadra: 654321,
  DescricaoQuadra: "Descrição da quadra",
  StatusQuadra: "Status da quadra",
};

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const QuadrasExistentesAdmin: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>Quadras existentes</h3>
          <MyContainer>
            <Row style={{ margin: "2% 0", border:'1px solid black'}} className="justify-content-center">
              <Col
                style={{
                  padding: "10px 5px",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                }}
                className="text-center"
              >
                Nome
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Endereço
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                CEP
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Uf
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Latitude
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Longitude
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Descrição
              </Col>
              <Col
                style={{ padding: "10px 5px", borderRight: "1px solid black" }}
                className="text-center"
              >
                Status
              </Col>
            </Row>
            {list.map((i) => (
              <QuadrasExistentesData
                key={i}
                NomeQuadra={quadras.NomeQuadra + " " + list[i]}
                EnderecoQuadra={quadras.EnderecoQuadra}
                CepQuadra={quadras.CepQuadra}
                UfQuadra={quadras.UfQuadra}
                LatitudeQuadra={quadras.LatitudeQuadra}
                LongitudeQuadra={quadras.LongitudeQuadra}
                DescricaoQuadra={quadras.DescricaoQuadra}
                StatusQuadra={quadras.StatusQuadra}
              />
            ))}
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default QuadrasExistentesAdmin;
