import React from "react";

import {
  Modal,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Form,
} from "react-bootstrap";
import {
  MyTitleModalCreateEvents,
  StarIcon,
  MySubTitleModalCreateEvents,
  MyTextContentModalCreateEvents,
  MyTextAreaModalCreateEvents,
  MyButton,
} from "./styles";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

export interface Props {
  show: boolean;
  onHide: any;
  id_space: number;
}

const ModalEventsUserApp: React.FC<Props> = ({ show, onHide, id_space }) => {
  const [colorStar, setColorStar] = React.useState(Boolean);
  const renderTooltipStar = (props: any) => (
    <Tooltip id="star-icon" {...props}>
      Favoritar o local
    </Tooltip>
  );
  const StarClick = async () => {
    setColorStar(!colorStar);
  };
  return (
    <div>
      <Modal size="lg" centered show={show} onHide={onHide}>
        <Form>
          <div className="WrapperModalCreateEvent">
            <div className="MySvgGerenciarUserModal">
              <img
                src={SvgModalConfigUser}
                alt="Art Top"
                width="100%"
                style={{ borderTopLeftRadius: "30px" }}
              />
            </div>
            <Modal.Body style={{ padding: "30px" }}>
              <Row style={{ margin: 0, alignItems: "center" }}>
                <MyTitleModalCreateEvents>
                  Quadra do Ibirapuera
                </MyTitleModalCreateEvents>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 250 }}
                  overlay={renderTooltipStar}
                >
                  <StarIcon
                    onClick={StarClick}
                    style={{ fill: `${colorStar ? "yellow" : "transparent"}` }}
                  />
                </OverlayTrigger>
              </Row>
              <div style={{ marginBottom: "4%", marginTop: "4%" }}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <Col lg={2} md={12}>
                    <MySubTitleModalCreateEvents>
                      Endereço:
                    </MySubTitleModalCreateEvents>
                  </Col>
                  <Col lg={10} md={12}>
                    <MyTextContentModalCreateEvents>
                      Parque do Ibirapuera perto de n sei oq
                    </MyTextContentModalCreateEvents>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: "4%", marginTop: "4%" }}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <Col lg={1} md={12}>
                    <MySubTitleModalCreateEvents>
                      CEP:
                    </MySubTitleModalCreateEvents>
                  </Col>
                  <Col lg={10} md={12}>
                    <MyTextContentModalCreateEvents>
                      123456789
                    </MyTextContentModalCreateEvents>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: "4%", marginTop: "4%" }}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <Col lg={2} md={12}>
                    <MySubTitleModalCreateEvents>
                      Esporte:
                    </MySubTitleModalCreateEvents>
                  </Col>
                  <Col lg={8} md={12}>
                    <Form.Group controlId="SelectSports" style={{ margin: 0 }}>
                      <Form.Control as="select">
                        <option>Futebol</option>
                        <option>Voley</option>
                        <option>Skate</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: "4%", marginTop: "4%" }}>
                <Row style={{ margin: 0, alignItems: "center" }}>
                  <Col lg={2} md={12}>
                    <MySubTitleModalCreateEvents style={{ marginBottom: "4%" }}>
                      Descrição:
                    </MySubTitleModalCreateEvents>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9} md={12}>
                    <MyTextAreaModalCreateEvents>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          name="userMessage"
                          id="userMessage"
                          rows={4}
                        />
                      </Form.Group>
                    </MyTextAreaModalCreateEvents>
                  </Col>
                </Row>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <MyButton type="submit" style={{ marginRight: "10px" }}>
                Criar evento
              </MyButton>
              <MyButton type="button" onClick={onHide}>
                Voltar
              </MyButton>
            </Modal.Footer>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalEventsUserApp;
