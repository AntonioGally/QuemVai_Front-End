import React, { useEffect } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "./SideBarPeopleOnline.css";

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
                  <TitleText>Email:</TitleText>
                  <AtributeText style={{ textDecorationLine: "underline" }}>
                    {email}
                  </AtributeText>
                </Row>
                <Row>
                  <TitleText>Nome:</TitleText>
                  <AtributeText>{name}</AtributeText>
                </Row>
                <Row>
                  <TitleText>Celular:</TitleText>
                  <AtributeText>
                    ({ddd}) {cell}
                  </AtributeText>
                </Row>
                <Row style={{ marginTop: "10%" }}>
                  <Col>
                    <MyButton
                      type="button"
                      className="btn RemoveTrust"
                      style={{ width: "100%" }}
                    >
                      Remover confiança
                    </MyButton>
                  </Col>
                  <Col>
                    <MyButton
                      type="submit"
                      className="btn RemoveFriend"
                      style={{ width: "100%" }}
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
                  <MyButton className="WithOutTrustButton">
                    Remover Amizade
                  </MyButton>
                </Row>
                <Row style={{ justifyContent: "center", margin: "5% 0" }}>
                  <VerifiedIcon />{" "}
                  <MyButton className="WithOutTrustButton">
                    Adicionar Confiança
                  </MyButton>
                </Row>
              </div>
            )}
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default SideBarPeopleOnline;