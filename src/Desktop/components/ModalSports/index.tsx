import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import ModalSpaceInfo from "../ModalEventsUserApp/ModalSpaceInfo";
import ModalCreateEvents from "../ModalEventsUserApp/ModalCreateEvents";

import {
  ArrowBackIcon,
  MyTitle,
  TitleCardWrapper,
  MyCard,
  CompassIcon,
  SubTitle,
  TextContent,
  ExitIcon,
  FilterIcon,
  ButtonFilter,
  SearchIcon,
} from "./styles";
import "./ModalSports.css";
import {
  Modal,
  Row,
  Col,
  Form,
  Spinner,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import SvgModalConfigUser from "../../../img/icones/SvgModalConfigUser.png";

import { SportsFilter } from "../../../@types";
import { ListSpaceByUF } from "../../../@types";
import { ExistingSportList } from "../../../@types";
import api from "../../../services/api";
import { Token } from "../../../services/auth";

export interface Props {
  show: boolean;
  onHide: any;
}

interface DataSportsInfo {
  SportsList: SportsFilter[];
}
interface DataSpace {
  SpaceList: ListSpaceByUF[];
}
interface DataExistingSports {
  SportsList: ExistingSportList[];
}

type IFormInput = {
  id_sport: string;
};

const ModalSports: React.FC<Props> = ({ show, onHide }) => {
  const [dataSports, setDataSports] = useState<DataExistingSports>();
  const [loading, setLoading] = useState(false);
  const [dataSportsInfo, setDataSportsInfo] = useState<DataSportsInfo>();
  const [dataSpaces, setDataSpaces] = useState<DataSpace>();
  const [filtering, setFiltering] = useState(false);

  const [auxId, setAuxId] = useState(Number);
  const [modalSpaceInfo, setModalSpaceInfo] = React.useState(false);
  const [modalCreateEvents, setModalCreateEvents] = React.useState(false);

  const { register, handleSubmit } = useForm<IFormInput>();

  useEffect(() => {
    Promise.all([
      api.get("/api/search/uf/space/SP", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushSpacesList] = responses;
      const response = await PushSpacesList.data;
      setDataSpaces({ SpaceList: response });
    });
  }, []);

  useEffect(() => {
    Promise.all([
      api.get("api/search/all/sports", {
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushSportsList] = responses;
      const response = await PushSportsList.data;
      setDataSports({ SportsList: response });
    });
  }, []);

  if (modalSpaceInfo) {
    return (
      <ModalSpaceInfo
        show={modalSpaceInfo}
        onHide={() => setModalSpaceInfo(false)}
        id={auxId}
      />
    );
  }
  if (modalCreateEvents) {
    return (
      <ModalCreateEvents
        show={modalCreateEvents}
        onHide={() => setModalCreateEvents(false)}
        onCreateEvent={() => {
          setModalCreateEvents(false);
          onHide();
        }}
        id={auxId}
      />
    );
  }

  const onSubmitSport = async (data: IFormInput) => {
    setFiltering(true);
    setLoading(true);
    var id_sport = data.id_sport;

    var config = {
      headers: { "x-auth-token": Token() },
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };
    var sportsFilter = [] as any;
    setDataSportsInfo({ SportsList: sportsFilter }); //limpando o array
    try {
      setLoading(true);
      const response = await api.get("/api/search/uf/sport/SP", config);
      var auxResponse = await response.data;
      if (response.status === 200) {
        var count = 0;
        while (count < auxResponse.length) {
          if (auxResponse[count]["Name_Sport"] === id_sport) {
            sportsFilter.push(auxResponse[count]);
            count += 1;
          } else {
            count += 1;
          }
        }
        setDataSportsInfo({ SportsList: sportsFilter });
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const renderTooltipFilter = (props: any) => (
    <Tooltip id="filter-icon" {...props}>
      Filtrar por esportes
    </Tooltip>
  );
  const renderTooltipSearch = (props: any) => (
    <Tooltip id="search-icon" {...props}>
      Informações do espaço
    </Tooltip>
  );
  const renderTooltipExit = (props: any) => (
    <Tooltip id="Exit-icon" {...props}>
      Criar evento nesse espaço
    </Tooltip>
  );

  return (
    <div>
      <Modal size="lg" centered animation={true} show={show} onHide={onHide}>
        <div className="WrapperModalSports">
          <div className="SvgModalSports">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              style={{ borderTopRightRadius: "30px" }}
            />
          </div>
          <div>
            <ArrowBackIcon onClick={onHide} />
          </div>
          <Form
            onSubmit={handleSubmit(onSubmitSport)}
            className="MyComboBoxModalSports"
          >
            <Row style={{ margin: "7% 0 0 9%", alignItems: "center" }}>
              <Col lg={4} md={4}>
                <MyTitle style={{ margin: 0 }}>Esportes:</MyTitle>
              </Col>
              <Col lg={5} md={6}>
                <Form.Group style={{ marginBottom: 0 }}>
                  <Form.Control
                    as="select"
                    id="id_sport"
                    name="id_sport"
                    ref={register}
                  >
                    {dataSports?.SportsList.map((information) => (
                      <option key={information.id} value={information.name}>
                        {information.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg={1} md={1}>
                <ButtonFilter type="submit">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 250 }}
                    overlay={renderTooltipFilter}
                  >
                    <FilterIcon />
                  </OverlayTrigger>
                </ButtonFilter>
              </Col>
            </Row>
            {loading ? (
              <Spinner animation="border" style={{ marginLeft: "5%" }} />
            ) : (
              ""
            )}
          </Form>
          <Modal.Body style={{ padding: "30px" }} className="BodyModalSports">
            {filtering ? (
              <div>
                <TitleCardWrapper>Espaços</TitleCardWrapper>
                {dataSportsInfo?.SportsList.map((information) => (
                  <MyCard key={information.Space_id}>
                    <Row>
                      <Col lg={3} className="MyColCardModalSearch">
                        <CompassIcon style={{ fill: "var(--fontBlack)" }} />
                      </Col>

                      <Col lg={6}>
                        <Row style={{ alignItems: "center", margin: 0 }}>
                          <SubTitle>Nome: </SubTitle>
                          <TextContent>{information.Space_name}</TextContent>
                        </Row>
                        <Row style={{ alignItems: "center", margin: 0 }}>
                          <SubTitle>Endereço: </SubTitle>
                          <TextContent>{information.Space_address}</TextContent>
                        </Row>
                        <Row style={{ alignItems: "center", margin: 0 }}>
                          <SubTitle>CEP: </SubTitle>
                          <TextContent>{information.Space_CEP}</TextContent>
                        </Row>
                      </Col>

                      <Col lg={3} className="MyColCardModalSearch">
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltipSearch}
                        >
                          <SearchIcon
                            style={{ width: "48%", height: "48%" }}
                            onClick={() => {
                              setModalSpaceInfo(true);
                              setAuxId(information.Space_id);
                            }}
                          />
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltipExit}
                        >
                          <ExitIcon
                            style={{ width: "48%", height: "48%" }}
                            onClick={() => {
                              setModalCreateEvents(true);
                              setAuxId(information.Space_id);
                            }}
                          />
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </MyCard>
                ))}
              </div>
            ) : (
              <div>
                <TitleCardWrapper>Espaços</TitleCardWrapper>
                {dataSpaces?.SpaceList.map((information) => (
                  <MyCard key={information.id}>
                    <Row>
                      <Col lg={3} className="MyColCardModalSearch">
                        <CompassIcon style={{ fill: "var(--fontBlack)" }} />
                      </Col>

                      <Col lg={6}>
                        <Row style={{ alignItems: "center" }}>
                          <SubTitle>Nome: </SubTitle>
                          <TextContent>{information.name}</TextContent>
                        </Row>
                        <Row style={{ alignItems: "center" }}>
                          <SubTitle>Endereço: </SubTitle>
                          <TextContent>{information.address}</TextContent>
                        </Row>
                        <Row style={{ alignItems: "center" }}>
                          <SubTitle>CEP: </SubTitle>
                          <TextContent>{information.CEP}</TextContent>
                        </Row>
                      </Col>

                      <Col lg={3} className="MyColCardModalSearch">
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltipSearch}
                        >
                          <SearchIcon
                            style={{ width: "48%", height: "48%" }}
                            onClick={() => {
                              setModalSpaceInfo(true);
                              setAuxId(information.id);
                            }}
                          />
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 250 }}
                          overlay={renderTooltipExit}
                        >
                          <ExitIcon
                            style={{ width: "48%", height: "48%" }}
                            onClick={() => {
                              setModalCreateEvents(true);
                              setAuxId(information.id);
                            }}
                          />
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </MyCard>
                ))}
              </div>
            )}
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSports;
