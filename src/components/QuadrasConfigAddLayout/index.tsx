import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import ConfigQuadraIdForm from "../IdSearchForm/ConfigQuadraIdForm";
import AddQuadrasAdmin from "../AddQuadrasAdmin";
import AddEsportesQuadrasAdmin from "../AddEsportesQuadrasAdmin";

import { MyContainer } from "./styles";

const QuadrasConfigAddLayout: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>Configurar e Adicionar Quadras</h3>
          <MyContainer>
            <Tabs defaultActiveKey="ConfigQuadras">
              <Tab eventKey="ConfigQuadras" title="Configurações das Quadras">
                <ConfigQuadraIdForm />
              </Tab>
              <Tab eventKey="AddQuadras" title="Adicionar Quadras">
                <AddQuadrasAdmin />
              </Tab>
              <Tab eventKey="AddEsportes" title="Adicionar Esportes">
                <AddEsportesQuadrasAdmin />
              </Tab>
            </Tabs>
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default QuadrasConfigAddLayout;
