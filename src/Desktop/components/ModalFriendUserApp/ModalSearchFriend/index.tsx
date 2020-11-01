import React from "react";
import { useForm } from "react-hook-form";

import "../ModalFriendStyles.css";
import { ArrowBackIcon, MyTitleForm, SearchIcon } from "../styles";
import { Modal, Form, Row, Col } from "react-bootstrap";

import SvgModalConfigUser from "../../../../img/icones/SvgModalConfigUser.png";
import any_data2 from "../../../../img/icones/any_data2.svg";

import ListPeople from "./ListPeople";

export interface Props {
  show: boolean;
  onHide: any;
}
type wordSubmited = {
  nameUser: string;
};

const ModalSearchFriend: React.FC<Props> = ({ show, onHide }) => {
  const { register, handleSubmit, errors } = useForm<wordSubmited>();
  const [existingPeople, setExistingPeople] = React.useState(false);
  const [word, setWord] = React.useState("");

  function submitFormHandle(data: wordSubmited) {
    setExistingPeople(true);
    setWord(data.nameUser);
  }

  return (
    <div>
      <Modal size="lg" centered animation={true} show={show} onHide={onHide}>
        <div className="WrapperModalFriends" style={{ padding: 0 }}>
          <div className="SvgModalSearchFriends">
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
            onSubmit={handleSubmit(submitFormHandle)}
            style={{ padding: "20px" }}
          >
            <Row style={{ margin: 0, alignItems: "center" }}>
              <Col lg={2}>
                <MyTitleForm style={{ margin: 0 }}>Nome:</MyTitleForm>
              </Col>

              <Col lg={8}>
                <Form.Group style={{ margin: 0 }}>
                  <Form.Control
                    className="MyInputForm"
                    type="text"
                    name="nameUser"
                    id="nameUser"
                    ref={register({
                      required: {
                        value: true,
                        message: "Preencha o campo",
                      },
                    })}
                  />
                  {errors.nameUser &&
                    (errors.nameUser as any).type === "required" && (
                      <div className="error">
                        {(errors.nameUser as any).message}
                      </div>
                    )}
                </Form.Group>
              </Col>

              <Col lg={2}>
                <button type="submit" className="ButtonSubmitModalSearchFriend">
                  <SearchIcon />
                </button>
              </Col>
            </Row>
          </Form>
          <Modal.Body
            style={{ padding: "30px" }}
            className="BodyModalSearchFriend"
          >
            {existingPeople ? (
              <ListPeople word={word} />
            ) : (
              <div className="text-center">
                <img
                  src={any_data2}
                  alt="Nothing"
                  style={{ width: "90%", height: "90%" }}
                />
              </div>
            )}
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSearchFriend;
