import React, { useEffect, useState } from "react";

import { Modal, Row, Col, Form, Table } from "react-bootstrap";
import {
  ArrowBackIcon,
  MyTileSpaceInfo,
  MyTextContentSpaceInfo,
  MyTextAreaSpaceInfo,
  WrapperSports,
  MyButton,
} from "./styles";
import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import api from "../../../services/api";
import { Token } from "../../../services/auth";
import { SpaceInformationByID } from "../../../@types";

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
  fromFavorites?: boolean;
}

interface Data {
  SpaceInfo: SpaceInformationByID;
}

const ModalEventsUserApp: React.FC<Props> = ({
  show,
  onHide,
  id,
  fromFavorites,
}) => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get(
        `${
          fromFavorites
            ? `/api/favorites/get/place/${id}`
            : `/api/search/space/${id}`
        }`,
        {
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
          headers: { "x-auth-token": Token() },
        }
      ),
    ]).then(async (responses) => {
      const [SpaceInfo] = responses;
      const informations = await SpaceInfo.data;
      setData({ SpaceInfo: informations });
    });
  }, [id, fromFavorites]);
  return (
    <div>
      <Modal size="lg" show={show} centered onHide={onHide}>
        <div className="WrapperModalSpaceInfo">
          <div className="MySvgGerenciarUserModal">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              width="100%"
              style={{ borderTopLeftRadius: "30px" }}
            />
          </div>
          <div style={{ margin: "3% 0 0 3%" }}>
            <ArrowBackIcon onClick={onHide} />
          </div>
          <Modal.Body style={{ padding: "30px" }}>
            <div style={{ marginBottom: "4%" }}>
              <Row style={{ margin: 0 }}>
                <MyTileSpaceInfo>Nome</MyTileSpaceInfo>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyTextContentSpaceInfo>
                  {data?.SpaceInfo.name}
                </MyTextContentSpaceInfo>
              </Row>
            </div>
            <div style={{ marginBottom: "4%" }}>
              <Row style={{ margin: 0 }}>
                <MyTileSpaceInfo>Endereço</MyTileSpaceInfo>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyTextContentSpaceInfo>
                  {data?.SpaceInfo.address}
                </MyTextContentSpaceInfo>
              </Row>
            </div>
            <div style={{ marginBottom: "4%" }}>
              <Row style={{ margin: 0 }}>
                <MyTileSpaceInfo>CEP</MyTileSpaceInfo>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyTextContentSpaceInfo>
                  {data?.SpaceInfo.CEP}
                </MyTextContentSpaceInfo>
              </Row>
            </div>
            <div style={{ marginBottom: "8%" }}>
              <Row style={{ margin: 0 }}>
                <MyTileSpaceInfo>Descrição</MyTileSpaceInfo>
              </Row>
              <Row style={{ margin: 0 }}>
                <Col lg={9} md={12}>
                  <MyTextAreaSpaceInfo>
                    <Form.Group>
                      <Form.Control
                        readOnly
                        as="textarea"
                        name="userMessage"
                        id="userMessage"
                        value={data?.SpaceInfo.description}
                        rows={4}
                      />
                    </Form.Group>
                  </MyTextAreaSpaceInfo>
                </Col>
              </Row>
            </div>
            <div>
              <Row style={{ margin: 0 }}>
                <MyTileSpaceInfo>Esportes</MyTileSpaceInfo>
              </Row>
              <Row style={{ margin: 0 }}>
                <WrapperSports>
                  <Table striped bordered hover variant="secondary">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.SpaceInfo.space.map((information) => (
                        <tr key={information.id}>
                          <td>{information.name}</td>
                          <td className="SportDescriptionModalSpaceInfo">
                            {information.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </WrapperSports>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <MyButton onClick={onHide}>Voltar</MyButton>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEventsUserApp;
