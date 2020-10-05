import React from "react";

import { Modal, Row, Col, Button, Form, FormControl } from "react-bootstrap";
import "./ModalEventsUserApp.css";
import {
  MyTitle,
  MyWrapperCards,
  MyCards,
  CompassIcon,
  TextContent,
  ExitIcon,
  SearchIcon,
} from "./styles";

import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

export interface Props {
  show: boolean;
  onHide: any;
}
const ModalEventsUserApp: React.FC<Props> = ({ show, onHide }) => {
  var list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Modal
      dialogClassName="MyModalCreateEventDialog"
      show={show}
      onHide={onHide}
    >
      <div className="WrapperModalCreateEvent">
        <div className="MySvgGerenciarUserModal">
          <img src={SvgModalConfigUser} alt="Art Top" width="100%" />
        </div>
        <Modal.Body style={{ padding: 50 }}>
          <Row>
            <MyTitle>Quadras</MyTitle>
            <Form inline className="InputModalCreateEvent">
              <FormControl
                type="text"
                placeholder="Search for something"
                style={{ width: "100%" }}
              />
              <SearchIcon />
            </Form>
          </Row>
          <MyWrapperCards>
            {list.map((i) => (
              <MyCards key={i}>
                <Row style={{ alignItems: "center", justifyContent: "center" }}>
                  <Col lg={2} md={4}>
                    <CompassIcon />
                  </Col>
                  <Col lg={8} md={12}>
                    <Row style={{ margin: 0 }}>
                      <TextContent>
                        <span>Nome:</span> Roberto Dinamite
                      </TextContent>
                    </Row>
                    <Row style={{ margin: 0 }}>
                      <TextContent>
                        <span>Endereço:</span> Rua Sergio Leite de Camargo
                      </TextContent>
                    </Row>
                    <Row style={{ margin: 0 }}>
                      <TextContent>
                        <span>CEP:</span> 02141-001
                      </TextContent>
                    </Row>
                  </Col>
                  <Col lg={2} md={4}>
                    <ExitIcon />
                  </Col>
                </Row>
              </MyCards>
            ))}
          </MyWrapperCards>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Button onClick={onHide}>Voltar</Button>
          </Row>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ModalEventsUserApp;
