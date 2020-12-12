import React, { useState, useEffect } from "react";

import { Modal, Button, Row, Spinner } from "react-bootstrap";
import {
  MyWrapper,
  HeaderModal,
  ArrowBackIcon,
  MyTable,
  Header,
  Body,
  Informations,
} from "./styles";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { ListSportsAdmin } from "../../../@types";

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
}
interface Data {
  SportList: ListSportsAdmin[];
}

const AdminListSpace: React.FC<Props> = ({ show, onHide, id }) => {
  const [data, setData] = useState<Data>();
  const [auxId, setAuxId] = useState(Number);
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    Promise.all([
      api.get("api/admin/get/sport/cadastrar", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [AllSports] = responses;
      const esportes = await AllSports.data;
      setData({ SportList: esportes });
    });
  }, []);
  const OnSubmitId = async () => {
    var config = {
      headers: { "x-auth-token": Token() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };

    try {
      const id_quadra = id;
      const id_esporte = auxId;

      const response = await api.post(
        `/api/admin/add/sport/${id_esporte}/to/space/${id_quadra}`,
        "",
        config
      );

      if (response.data === "Space not found") {
        setSuccess("");
        setErros("O ID da quadra não existe!");
      }
      if (response.data === "Sport not found") {
        setSuccess("");
        setErros("O ID do esporte não existe!");
      }

      if (response.status === 200) {
        setErros("");
        setSuccess("O esporte foi adicionado à quadra :)");
      }
      if (response.status === 400) {
        setSuccess("");
        setErros("Esse esporte já está cadastrado na quadra");
      }
      if (response.status === 404) {
        setSuccess("");
        setErros("Houve algum erro :c");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal size="xl" animation={true} centered show={show} onHide={onHide}>
      <Modal.Body style={{ padding: 0, backgroundColor: "#DDDDDD" }}>
        <HeaderModal>
          <ArrowBackIcon onClick={onHide} />
        </HeaderModal>
        <div style={{ padding: "20px" }}>
          <div>
            <div className="row justify-content-center w-100">
              <MyWrapper>
                <MyTable>
                  <Header>
                    <div style={{ width: "30%" }}>
                      <span>Nome</span>
                    </div>
                    <div style={{ width: "70%" }}>
                      <span>Descrição</span>
                    </div>
                  </Header>
                  <Body>
                    {!data ? (
                      <>
                        <Spinner animation="border" />
                      </>
                    ) : (
                      <>
                        {data?.SportList.map((information) => (
                          <Informations
                            key={information.id}
                            onClick={() => {
                              setAuxId(Number(information.id));
                            }}
                            style={
                              auxId === Number(information.id)
                                ? { backgroundColor: "#659ddb" }
                                : { backgroundColor: "#fff" }
                            }
                          >
                            <div style={{ width: "30%" }}>
                              <span>{information.name}</span>
                            </div>
                            <div style={{ width: "70%" }}>
                              <span>{information.description}</span>
                            </div>
                          </Informations>
                        ))}
                      </>
                    )}
                  </Body>
                </MyTable>
                <Row
                  style={{
                    margin: 0,
                    justifyContent: "flex-end",
                    width: "100%",
                    marginTop: "2%",
                  }}
                >
                  <Button
                    variant="primary"
                    type=" button "
                    onClick={() => OnSubmitId()}
                  >
                    Adicionar
                  </Button>
                </Row>
                <Row
                  className="text-danger"
                  style={{
                    margin: 0,
                    justifyContent: "flex-end",
                    width: "100%",
                    fontSize: "20px",
                  }}
                >
                  {erros}
                </Row>
                <Row
                  className="text-success"
                  style={{
                    margin: 0,
                    justifyContent: "flex-end",
                    width: "100%",
                    fontSize: "20px",
                  }}
                >
                  {success}
                </Row>
              </MyWrapper>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdminListSpace;
