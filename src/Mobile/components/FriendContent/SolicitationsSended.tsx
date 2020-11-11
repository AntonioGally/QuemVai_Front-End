import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import any_data2 from "../../../img/icones/any_data2.svg";

import { CardContainer, MyCard, NameUser, TrashIcon } from "./styles";

import { InvitesSendedList } from "../../../@types";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

interface Data {
  InvitesSended: InvitesSendedList[];
}

const FriendContent: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [isSomething, setIsSomething] = useState(false);
  const [reload, setReload] = useState(0);
  const [erros, setErros] = React.useState("");

  useEffect(() => {
    Promise.all([
      api.get("/api/user/invite/sent", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllInvitesSended] = responses;
      const invites = await AllInvitesSended.data;
      if (invites.length > 0) {
        setIsSomething(true);
      } else {
        setIsSomething(false);
      }

      setData({ InvitesSended: invites });
    });
  }, [reload]);

  const handleClick = async (id: number) => {
    try {
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };

      const response = await api.put(
        `/api/user/invite/cancel/${id}`,
        {},
        config
      );
      if (response.status === 200 && response.data["Request canceled"]) {
        setReload(reload + 1);
      }
      if (response.status === 204) {
        setErros("Essa solicitação não existe");
      }
      if (response.status === 400) {
        setErros("Houve algum problema ao aceitar a solicitação");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <CardContainer>
        {!isSomething ? (
          <div style={{ textAlign: "center" }}>
            <img
              src={any_data2}
              alt="Any Data"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <>
            <div className="text-danger" style={{ fontSize: "20px" }}>
              {erros}
            </div>
            {data?.InvitesSended.map((information) => (
              <MyCard key={information.id_Friend}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <img
                    src={information.photos}
                    alt="User"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />

                  <NameUser>{information.username}</NameUser>

                  <TrashIcon
                    onClick={() => handleClick(information.id_Friend)}
                  />
                </Row>
              </MyCard>
            ))}
          </>
        )}
      </CardContainer>
    </div>
  );
};

export default FriendContent;
