import React from "react";

import ConfigEsportesIdForm from "../IdSearchForm/ConfigEsportesIdForm";
import AddEsportesAdmin from "../AddEsportesAdmin";
import { MyContainer, MyWrapper } from "./styles";
import { Tabs, Tab } from "react-bootstrap";

const QuadrasConfigAddLayout: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <MyWrapper>
          <h3 style={{ marginBottom: "3%" }}>
            Configurar e Adicionar Esportes
          </h3>
          <MyContainer>
            <Tabs defaultActiveKey="ConfigEsports">
              <Tab eventKey="ConfigEsports" title="Configurações dos Esportes">
                <ConfigEsportesIdForm />
              </Tab>
              <Tab eventKey="AddEsports" title="Adicionar os Esportes">
                <AddEsportesAdmin />
              </Tab>
            </Tabs>
          </MyContainer>
        </MyWrapper>
      </div>
    </div>
  );
};

export default QuadrasConfigAddLayout;
