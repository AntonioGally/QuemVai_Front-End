import React from "react";

import { Tab, Tabs } from "react-bootstrap";

import EmailViewReceivedIdForm from "../IdSearchForm/EmailViewReceivedIdForm";
import EmailViewRespondedIdForm from "../IdSearchForm/EmailViewRespondedIdForm" ;
import EmailRespondIdForm from "../IdSearchForm/EmailRespondIdForm";

import { MyContainer } from "./styles";

const EmailViewRespondLayout: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>Visualizar e Responder Emails</h3>
          <MyContainer>
            <Tabs defaultActiveKey="ViewEmailReceived">
              <Tab eventKey="ViewEmailReceived" title="Visualizar Email recebido">
                <EmailViewReceivedIdForm />
              </Tab>
              <Tab eventKey="ViewEmailResponded" title="Visualizar Email respondido">
                <EmailViewRespondedIdForm />
              </Tab>
              <Tab eventKey="RespondEmail" title="Responder Email">
                <EmailRespondIdForm />
              </Tab>
            </Tabs>
          </MyContainer>
        </div>
      </div>
    </div>
  );
};

export default EmailViewRespondLayout;
