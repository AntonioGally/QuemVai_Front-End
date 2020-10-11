import React, { useEffect } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "./SideBarPeopleOnline.css";

import ModalConfirmacao from "./Confirmation/ModalConfirmacao";

import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";
import {
  SpanIdUser,
  ImgUser,
  FriendName,
  TitleText,
  AtributeText,
  MyButton,
  UserIcon,
  VerifiedIcon,
} from "./styles";

export interface Props {
  idFriend: number;
  userName: string;
  name?: string;
  photos: string;
  email?: string;
  ddd?: number;
  cell?: number;
  show: boolean;
  onHide: any;
}

const SideBarPeopleOnline: React.FC<Props> = ({
  idFriend,
  userName,
  name,
  photos,
  email,
  ddd,
  cell,
  show,
  onHide,
}) => {
  const [trustFriend, setTrustFriend] = React.useState(false);
  const [removeTrust, setRemoveTrust] = React.useState(false);
  const [removeFriend, setRemoveFriend] = React.useState(false);
  const [addTrust, setAddTrust] = React.useState(false);

  useEffect(() => {
    if (cell) {
      setTrustFriend(true);
    }
  }, [cell]);
  return (
    <div>
      <Modal
        dialogClassName="MyModalInfoUser"
        centered
        show={show}
        onHide={onHide}
      >
        <div className="WrapperModalInfoUser">
          <div className="MySvgGerenciarUserModal">
            <img
              src={SvgModalConfigUser}
              alt="Art Top"
              style={{ borderTopRightRadius: "30px" }}
            />
          </div>

          <Modal.Body style={{ padding: "21px" }}>
            <Row style={{ margin: "0 0 5% 0", justifyContent: "flex-start" }}>
              <SpanIdUser>ID: {idFriend}</SpanIdUser>
            </Row>
            <Row style={{ justifyContent: "center", margin: "0 0 5% 0" }}>
              <ImgUser src={photos} alt="Friend Photo" />
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <FriendName>{userName}</FriendName>
            </Row>
            {trustFriend ? (
              <div className="WrapperTrustedInformation">
                <Row>
                  <Col lg={3} md={12}>
                    <TitleText>Email:</TitleText>
                  </Col>
                  <Col lg={9} md={12}>
                    <AtributeText style={{ textDecorationLine: "underline" }}>
                      <a href={`mailto:${email}?Subject=Olá%20${name}`}>
                        {email}
                      </a>
                    </AtributeText>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={12}>
                    <TitleText>Nome:</TitleText>
                  </Col>
                  <Col lg={9} md={12}>
                    <AtributeText>{name}</AtributeText>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={12}>
                    <TitleText>Celular:</TitleText>
                  </Col>
                  <Col lg={9} md={12}>
                    <AtributeText>
                      ({ddd}) {cell}
                    </AtributeText>
                  </Col>
                </Row>
                <Row style={{ padding: "15px" }}>
                  <Col lg={6} md={12}>
                    <MyButton
                      type="button"
                      className="btn RemoveTrust"
                      style={{ width: "100%" }}
                      onClick={() => {
                        setRemoveTrust(true);
                        setRemoveFriend(false);
                        setAddTrust(false);
                      }}
                    >
                      Remover confiança
                    </MyButton>
                  </Col>
                  <Col lg={6} md={12}>
                    <MyButton
                      type="submit"
                      className="btn RemoveFriend"
                      style={{ width: "100%" }}
                      onClick={() => {
                        setRemoveTrust(false);
                        setRemoveFriend(true);
                        setAddTrust(false);
                      }}
                    >
                      Remover Amizade
                    </MyButton>
                  </Col>
                </Row>
              </div>
            ) : (
              <div className="WrapperNonTrustedInformation">
                <Row style={{ justifyContent: "center", margin: "5% 0" }}>
                  <UserIcon />{" "}
                  <MyButton
                    className="WithOutTrustButton"
                    onClick={() => {
                      setRemoveTrust(false);
                      setRemoveFriend(true);
                      setAddTrust(false);
                    }}
                  >
                    Remover Amizade
                  </MyButton>
                </Row>
                <Row style={{ justifyContent: "center", margin: "5% 0" }}>
                  <VerifiedIcon />{" "}
                  <MyButton
                    className="WithOutTrustButton"
                    onClick={() => {
                      setRemoveTrust(false);
                      setRemoveFriend(false);
                      setAddTrust(true);
                    }}
                  >
                    Adicionar Confiança
                  </MyButton>
                </Row>
              </div>
            )}
          </Modal.Body>
        </div>
      </Modal>
      {removeTrust ? (
        <ModalConfirmacao
          id={idFriend}
          name={userName}
          typeModal="removeTrust"
          show={removeTrust}
          onHide={() => setRemoveTrust(false)}
        />
      ) : (
        ""
      )}
      {addTrust ? (
        <ModalConfirmacao
          id={idFriend}
          name={userName}
          typeModal="addTrust"
          show={addTrust}
          onHide={() => setAddTrust(false)}
          onAddTrust={() => {
            setAddTrust(false);
            onHide();
          }}
        />
      ) : (
        ""
      )}
      {removeFriend ? (
        <ModalConfirmacao
          id={idFriend}
          name={userName}
          typeModal="removeFriend"
          show={removeFriend}
          onHide={() => setRemoveFriend(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBarPeopleOnline;
