import React from "react";

import { Modal, Row, Col, Form, Button, Table } from "react-bootstrap";
import {
  MyTileSpaceInfo,
  MyTextContentSpaceInfo,
  MyTextAreaSpaceInfo,
  WrapperSports,
} from "./styles";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

export interface Props {
  show: boolean;
  onHide: any;
  id: number;
}

const ModalEventsUserApp: React.FC<Props> = ({ show, onHide, id }) => {
  var auxList = [1, 2, 3, 4, 5, 6];
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
          <Modal.Body style={{ padding: "30px" }}>
            <div style={{ marginBottom: "4%" }}>
              <Row style={{ margin: 0 }}>
                <MyTileSpaceInfo>Nome</MyTileSpaceInfo>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyTextContentSpaceInfo>
                  Antônio Lima Gally Neto
                </MyTextContentSpaceInfo>
              </Row>
            </div>
            <div style={{ marginBottom: "4%" }}>
              <Row style={{ margin: 0 }}>
                <MyTileSpaceInfo>Endereço</MyTileSpaceInfo>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyTextContentSpaceInfo>
                  Antônio Lima Gally Neto
                </MyTextContentSpaceInfo>
              </Row>
            </div>
            <div style={{ marginBottom: "4%" }}>
              <Row style={{ margin: 0 }}>
                <MyTileSpaceInfo>CEP</MyTileSpaceInfo>
              </Row>
              <Row style={{ margin: 0 }}>
                <MyTextContentSpaceInfo>23456789</MyTextContentSpaceInfo>
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
                        rows={10}
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
                      {auxList.map((i) => (
                        <tr key={i}>
                          <td>Futebol {i}</td>
                          <td className="SportDescriptionModalSpaceInfo">
                            Muito massa {i}
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
            <Button onClick={onHide}>Voltar</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEventsUserApp;
