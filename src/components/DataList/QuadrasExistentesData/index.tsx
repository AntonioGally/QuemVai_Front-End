import React from "react";
import { Row, Col } from "react-bootstrap";

import { MyRow } from "./styles";

export interface Props {
  NomeQuadra: string;
  EnderecoQuadra: string;
  CepQuadra: number;
  UfQuadra: string;
  LatitudeQuadra: number;
  LongitudeQuadra: number;
  DescricaoQuadra: string;
  StatusQuadra: string;
}

const QuadrasExistentesData: React.FC<Props> = ({
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
    <MyRow>
      <Row style={{ margin: 0 }}>
        <Col
          style={{
            padding: "10px 5px",
            borderRight: "1px solid black",
            borderLeft: "1px solid black",
          }}
          className="text-center"
        >
          {NomeQuadra}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {EnderecoQuadra}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {CepQuadra}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {UfQuadra}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {LatitudeQuadra}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {LongitudeQuadra}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {DescricaoQuadra}
        </Col>
        <Col
          style={{ padding: "10px 5px", borderRight: "1px solid black" }}
          className="text-center"
        >
          {StatusQuadra}
        </Col>
      </Row>
    </MyRow>
  );
};

export default QuadrasExistentesData;
