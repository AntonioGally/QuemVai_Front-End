import React, { useEffect } from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import "./ModalFriendStyles.css";

import DeletarAmigo from "./Confirmação/DeletarAmigo";

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
  const [modalDeleteFriend, setModalDeleteFriend] = React.useState(false);
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
        <Modal.Header closeButton></Modal.Header>

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
                    style={{
                      height: "130px",
                      width: "130px",
                      borderRadius: "50%",
                    }}
                  />
                </Col>
              </Row>
              {!trustFriend ? (
                <div>
                  <Row style={{ marginTop: "4%" }}>
                    <Col md={6}>
                      <MyLableText className="userInfo">Nome:</MyLableText>
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
                    <Col md={6}>
                      <MyLableText className="userInfo">Email:</MyLableText>
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
                  </Row>
                  <Row style={{ marginTop: "4%" }}>
                    <Col md={8}>
                      <div className="row" style={{ margin: 0 }}>
                        <MyLableText className="userInfo">
                          Telefone:{" "}
                        </MyLableText>
                      </div>
                      <Form.Group>
                        <InputGroup>
                          <Col md={2} style={{ padding: 0, marginRight: "1%" }}>
                            <Form.Control
                              className="MyInputForm"
                              type="text"
                              defaultValue={ddd}
                            />
                          </Col>
                          <Col style={{ padding: 0 }}>
                            <Form.Control
                              className="MyInputForm"
                              type="text"
                              defaultValue={cell}
                            />
                          </Col>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              ) : (
                <div></div>
              )}
            </fieldset>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            type="button"
            variant="danger"
            onClick={() => setModalDeleteFriend(true)}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
      {modalDeleteFriend ? (
        <DeletarAmigo
          id={idFriend}
          show={modalDeleteFriend}
          onHide={() => setModalDeleteFriend(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalFriendUserApp;
