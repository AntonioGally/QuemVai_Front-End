import React from "react";

import { MyContainer } from './styles';

const EmailReceived: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "10% 0" }}>
        <div style={{ width: "70%" }}>
          <h3 style={{ marginBottom: "3%" }}>Emails Recebidos</h3>
          <MyContainer>a</MyContainer>
        </div>
      </div>
    </div>
  );
};

export default EmailReceived;
