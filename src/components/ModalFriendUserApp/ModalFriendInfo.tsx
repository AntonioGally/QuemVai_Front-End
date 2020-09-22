import React, { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "./ModalFriendStyles.css";

import { MyLableText } from "./styles";

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

const ModalFriendUserApp: React.FC<Props> = ({
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
    } else {
      setTrustFriend(false);
    }
  }, [cell]);

  return (
    <div>
      <Modal size="lg" centered show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Conta da(o) {userName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <fieldset disabled>
              <Row>
                <Col md={6}>
                  <MyLableText className="userInfo">
                    {" "}
                    Id do(a) {userName}:{" "}
                  </MyLableText>
                  <Form.Group>
                    <Row className="MyRowForm">
                      <Form.Control
                        className="MyInputForm"
                        type="text"
                        defaultValue={idFriend}
                      />
                    </Row>
                  </Form.Group>
                </Col>
                <Col md={6} style={{ textAlign: "center" }}>
                  <img
                    src={photos}
                    alt={"User"}
                    style={{ height: "130px", width: "130px", borderRadius:"50%" }}
                  />
                </Col>
              </Row>
              {!trustFriend ? (
                <Row style={{ marginTop: "4%" }}>
                  <Col md={3}>
                    <MyLableText className="userInfo">
                      Nome do(a) {userName}:
                    </MyLableText>
                    <Form.Group>
                      <Row className="MyRowForm">
                        <Form.Control
                          className="MyInputForm"
                          type="text"
                          defaultValue={name}
                        />
                      </Row>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <MyLableText className="userInfo">
                      Email do(a) {userName}:
                    </MyLableText>
                    <Form.Group>
                      <Row className="MyRowForm">
                        <Form.Control
                          className="MyInputForm"
                          type="text"
                          defaultValue={email}
                        />
                      </Row>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <MyLableText className="userInfo">
                      Nome do(a) {userName}:
                    </MyLableText>
                    <Form.Group>
                      <Row className="MyRowForm">
                        <Form.Control
                          className="MyInputForm"
                          type="text"
                          defaultValue={name}
                        />
                      </Row>
                    </Form.Group>
                  </Col>
                </Row>
              ) : (
                <div>Não é confiável</div>
              )}
            </fieldset>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button type="button" variant="danger" onClick={onHide}>
            Voltar
          </Button>
          <Button type="button" variant="success">
            Aceitar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalFriendUserApp;
