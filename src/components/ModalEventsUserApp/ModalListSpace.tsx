import React, { useEffect, useState } from "react";

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
  ArrowBackIcon,
} from "./styles";

import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";
import ModalSpaceInfo from "./ModalSpaceInfo";
import ModalCreateEvents from "./ModalCreateEvents";

import api from "../services/api";
import { Token } from "../services/auth";
import { ListSpaceByUF } from "../@types";

export interface Props {
  show: boolean;
  onHide: any;
}

interface Data {
  SpaceList: ListSpaceByUF[];
}
const ModalEventsUserApp: React.FC<Props> = ({ show, onHide }) => {
  const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  const [modalCreateEvents, setModalCreateEvents] = React.useState(false);
  const [data, setData] = useState<Data>();
  const [auxID, setAuxID] = React.useState(Number);

  useEffect(() => {
    Promise.all([
      api.get("/api/search/uf/space/SP", {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushSpacesList] = responses;
      // eslint-disable-next-line
      const informations = await PushSpacesList.data;
      setData({ SpaceList: informations });
    });
  }, []);

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
        id={auxID}
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
          <div style={{ margin: "3% 0 0 3%" }}>
            <ArrowBackIcon onClick={onHide} />
          </div>
          <Modal.Body style={{ padding: 30 }}>
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
              {data?.SpaceList.map((information) => (
                <MyCards key={information.id}>
                  <Row
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Col lg={2} md={4}>
                      <CompassIcon />
                    </Col>
                    <Col lg={8} md={12}>
                      <Row style={{ margin: 0 }}>
                        <TextContent>
                          <span>Nome:</span> {information.name}
                        </TextContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <TextContent>
                          <span>Endereço:</span> {information.address}
                        </TextContent>
                      </Row>
                      <Row style={{ margin: 0 }}>
                        <TextContent>
                          <span>CEP:</span> {information.CEP}
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
                            setAuxID(information.id);
                          }}
                        />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltipSpaceSelection}
                      >
                        <ExitIcon
                          onClick={() => {
                            setModalCreateEvents(true);
                            setAuxID(information.id);
                          }}
                        />
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
