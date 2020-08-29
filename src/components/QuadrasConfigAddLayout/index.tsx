import React from "react";
import { Tab, Tabs } from "react-bootstrap";

// import ConfigQuadrasAdmin from "../ConfigQuadrasAdmin";
import ConfigQuadraIdForm from "../IdSearchForm/ConfigQuadraIdForm";
// import AddQuadrasAdmin from "../AddQuadrasAdmin";

import { MyContainer } from "./styles";

const QuadrasConfigAddLayout: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>
            Configurar e Adicionar Esportes
          </h3>
          <MyContainer>
            <Tabs defaultActiveKey="ConfigQuadras">
              <Tab eventKey="ConfigQuadras" title="Configurações das Quadras">
                <ConfigQuadraIdForm />
              </Tab>
              <Tab eventKey="AddQuuadras" title="Adicionar Quadras">
                <h1>aaa</h1>
              </Tab>
            </Tabs>
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default QuadrasConfigAddLayout;
