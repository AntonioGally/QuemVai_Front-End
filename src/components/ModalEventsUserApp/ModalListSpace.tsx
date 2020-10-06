import React from "react";

import {
  Modal,
  Row,
  Col,
  Form,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import "./ModalEventsUserApp.css";
import {
  MyTitle,
  MyWrapperCards,
  MyCards,
  CompassIcon,
  TextContent,
  ExitIcon,
  SearchIcon,
  SearchSpaceIcon,
  MyButton,
} from "./styles";

import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";
import ModalSpaceInfo from "./ModalSpaceInfo";
import ModalCreateEvents from "./ModalCreateEvents";

export interface Props {
  show: boolean;
  onHide: any;
}
const ModalEventsUserApp: React.FC<Props> = ({ show, onHide }) => {
  const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  const [modalCreateEvents, setModalCreateEvents] = React.useState(false);
  const [auxID, setAuxID] = React.useState(Number);
  var list = [1, 2, 3, 4, 5, 6, 7, 8];
  const renderTooltipSpaceSelection = (props: any) => (
    <Tooltip id="button-tooltip_spaceSelection" {...props}>
      Selecionar espaço
    </Tooltip>
  );
  const renderTooltipSpaceInfo = (props: any) => (
    <Tooltip id="button-tooltip_spaceInfo" {...props}>
      Informações do espaço
    </Tooltip>
  );
  if (modalSpaceInfo) {
    return (
      <ModalSpaceInfo
        show={modalSpaceInfo}
        onHide={() => setModalSpaceInfo(false)}
        id={auxID}
      />
    );
  }
  if (modalCreateEvents) {
    return (
      <ModalCreateEvents
        show={modalCreateEvents}
        onHide={() => setModalCreateEvents(false)}
        id_space={auxID}
      />
    );
  }
  return (
    <div>
      <Modal
        dialogClassName="MyModalCreateEventDialog"
        show={show}
        onHide={onHide}
      >
        <div className="WrapperModalCreateEvent">
          <div className="MySvgGerenciarUserModal">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              width="100%"
              style={{ borderTopLeftRadius: "30px" }}
            />
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
                  <Row
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
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
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltipSpaceInfo}
                      >
                        <SearchSpaceIcon
                          onClick={() => {
                            setModalSpaceInfo(true);
                            setAuxID(i);
                          }}
                        />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltipSpaceSelection}
                      >
                        <ExitIcon onClick={() => setModalCreateEvents(true)} />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                </MyCards>
              ))}
            </MyWrapperCards>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <MyButton onClick={onHide}>Voltar</MyButton>
            </Row>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEventsUserApp;
