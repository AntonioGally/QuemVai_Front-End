import React, { useEffect } from "react";

import { MyCardLisPeople, NameUser, AddUserIcon } from "../styles";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import { SearchMain } from "../../../../@types";
import api from "../../../../services/api";
import { Token } from "../../../../services/auth";

interface Data {
  UserList: SearchMain[];
}
export interface Props {
  word: String;
}

const ModalSearchFriend: React.FC<Props> = ({ word }) => {
  const [success, setSuccess] = React.useState("");
  const [erros, setErros] = React.useState("");
  const [reload, setReload] = React.useState(Number);
  const [data, setData] = React.useState<Data>();
  useEffect(() => {
    Promise.all([
      api.post(
        "/api/search/main",
        { word: word },
        {
          headers: { "x-auth-token": Token() },
        }
      ),
    ]).then(async (responses) => {
      const [PushSearchList] = responses;
      const response = await PushSearchList.data;

      if (Array(response[1]["Users"])[0].length > 0) {
        setErros("");
      } else {
        setErros("Não existem pessoas com esse apelido");
      }

      setData({ UserList: response });
    });
  }, [word, reload]);

  const addUserHandler = async (id_user: number) => {
    var config = {
      headers: { "x-auth-token": Token() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };
    try {
      const response = await api.post(
        `/api/user/invite/${id_user}`,
        {},
        config
      );
      if (response.status === 200 && response.data["Request sent"]) {
        setSuccess("Solicitação enviada com sucesso!");
        setReload(reload + 1);
        setErros("");       
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }
      if (response.status === 406 && response.data["Request already sended"]) {
        setErros("Parece que a solicitação já foi enviada");
      }
      if (response.status === 422 && response.data["Equals id's"]) {
        setErros("Este é o seu ID");
      }
      if (response.status === 204) {
        setErros("Esse usuário não existe");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderTooltipAdd = (props: any) => (
    <Tooltip id="filter-icon" {...props}>
      Adicionar usuário
    </Tooltip>
  );

  return (
    <div>
      <div
        className="text-success"
        style={{
          fontFamily: "Poppins",
          fontSize: "25px",
          marginLeft: "9%",
        }}
      >
        {success}
      </div>
      <div
        className="text-danger"
        style={{
          fontFamily: "Poppins",
          fontSize: "25px",
          marginLeft: "9%",
        }}
      >
        {erros}
      </div>
      {data?.UserList[1].Users.map((information) => (
        <MyCardLisPeople
          key={information.id}
          style={{
            display: `${
              Number(
                information.idFriendUser.map((i) => {
                  return i.id_Friend;
                })
              ) === information.id &&
              String(
                information.idFriendUser.map((i) => {
                  return i.status_friendships;
                })
              ) !== ""
                ? "none"
                : "block"
            }`,
          }}
        >
          <Row>
            <Col lg={3} className="MyColCardModalSearch">
              <img
                src={information.photos}
                alt="User"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
            </Col>
            <Col
              lg={6}
              className="MyColCardModalSearch"
              style={{ justifyContent: "flex-start" }}
            >
              <NameUser>{information.username}</NameUser>
            </Col>
            <Col lg={3} className="MyColCardModalSearch">
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 250 }}
                overlay={renderTooltipAdd}
              >
                <AddUserIcon onClick={() => addUserHandler(information.id)} />
              </OverlayTrigger>
            </Col>
          </Row>
        </MyCardLisPeople>
      ))}
    </div>
  );
};

export default ModalSearchFriend;
