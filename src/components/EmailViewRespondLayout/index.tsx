import React from "react";

import { Tab, Tabs } from "react-bootstrap";

import ViewEmail from '../ViewEmail';
import RespondEmail from '../RespondEmail';

import { MyContainer } from "./styles";

const EmailViewRespondLayout: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>Visualizar e Responder Emails</h3>
          <MyContainer>
            <Tabs defaultActiveKey="ViewEmail">
              <Tab eventKey="ViewEmail" title="Visualizar Email">
                <ViewEmail />
              </Tab>
              <Tab eventKey="RespondEmail" title="Responder Email">
                <RespondEmail />
              </Tab>
            </Tabs>
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default EmailViewRespondLayout;
