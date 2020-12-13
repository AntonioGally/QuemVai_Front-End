import React, { useState } from "react";

import { MyNavBar, MyLink, Content } from "./styles";

import ReceivedEmail from "./ReceivedEmail";
import RespondedEmail from "./RespondedEmail";

const AdminEmails: React.FC = () => {
  const [emailsRecebidosClick, setEmailsRecebidosClick] = useState(true);
  const [emailsRespondidosClick, setEmailsRespondidosClick] = useState(false);
  return (
    <div>
      <MyNavBar>
        <MyLink
          className={emailsRecebidosClick ? "ActiveLinkAdminEmails" : ""}
          onClick={() => {
            setEmailsRecebidosClick(true);
            setEmailsRespondidosClick(false);
          }}
        >
          Email's Recebidos
        </MyLink>
        <MyLink
          style={{ marginLeft: "5%" }}
          className={emailsRespondidosClick ? "ActiveLinkAdminEmails" : ""}
          onClick={() => {
            setEmailsRecebidosClick(false);
            setEmailsRespondidosClick(true);
          }}
        >
          Email's Respondidos
        </MyLink>
      </MyNavBar>
      <Content>
        {emailsRecebidosClick ? <ReceivedEmail /> : ""}
        {emailsRespondidosClick ? <RespondedEmail /> : ""}
      </Content>
    </div>
  );
};

export default AdminEmails;
