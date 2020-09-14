import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Container, Col, Row, Form, InputGroup } from "react-bootstrap";
import facebook from "../../img/icones/facebook.svg";
import instagram from "../../img/icones/instagram.svg";
import api from "../services/api";
import {
  MyContainer,
  MyRow,
  MyLableText,
  MyForm,
  Social,
  MyButton,
} from "./styles";

type IFormInput = {
  userName: string;
  userNickName: string;
  userEmail: string;
  userDDD: number;
  UserNumber: number;
  userPhoto: any;
};

const FormCadastro: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const [succes, setSucces] = React.useState(false);
  const [erros, setErros] = React.useState("");
	
	var photos = "";

  const SubmitForm = async (data: IFormInput) => {
    const name = data.userName;
    const username = data.userNickName;
    const email = data.userEmail;
    const cellPhoneNumber = data.UserNumber;
    const DDD = data.userDDD;

    var file = data.userPhoto[0];
    var fileType = file.type;
    var reader = new FileReader();
    reader.onloadend = () => {
      var image = new Image();
      (image.src as any) = reader.result;

      image.onload = function () {
        var maxWidth = 500,
          maxHeight = 500,
          imageWidth = image.width,
          imageHeight = image.height;

        if (imageWidth > imageHeight) {
          if (imageWidth > maxWidth) {
            imageHeight *= maxWidth / imageWidth;
            imageWidth = maxWidth;
          }
        } else {
          if (imageHeight > maxHeight) {
            imageWidth *= maxHeight / imageHeight;
            imageHeight = maxHeight;
          }
        }

        var canvas = document.createElement("canvas");
        canvas.width = imageWidth;
        canvas.height = imageHeight;

        var ctx = canvas.getContext("2d");

        ctx?.drawImage(image, 0, 0, imageWidth, imageHeight);

        var finalFile = canvas.toDataURL(fileType);
        photos = finalFile;
        console.log(photos);
      };
    };
    

    var config = {
      validateStatus: function (status: any) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    };
    try {
      console.log(photos);
      const response = await api.post(
        "/api/login/signup/user",
        { cellPhoneNumber, email, DDD, name, username, photos },
        config
      );

      if (response.status === 200 && response.data["User registered"]) {
        alert("Você foi cadastrado com sucesso!");
        setSucces(true);
      }
      if (response.status === 406) {
        setErros("Esse Email já foi registrado");
      }

      if (response.status === 404) {
        alert("Houve algum problema!");
      }
    } catch (err) {
      console.log(err);
		}
		reader.readAsDataURL(file);
  };

  if (succes) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <MyContainer>
        <Container fluid style={{ width: "80%" }}>
          <MyRow>
            <Form onSubmit={handleSubmit(SubmitForm)}>
              <Row className="d-flex justify-content-center fluid">
                <Col sm={12} md={6}>
                  <MyLableText> Qual o seu nome? </MyLableText>
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="ex.: Robson da Silva"
                        style={{ borderRadius: "10px" }}
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.userName &&
                        (errors.userName as any).type === "required" && (
                          <div className="error">O Nome é obrigatório</div>
                        )}
                    </Form.Group>
                  </MyForm>

                  <MyLableText> E o seu apelido? </MyLableText>
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="userNickName"
                        id="userNickName"
                        placeholder="ex.: RobSilva"
                        style={{ borderRadius: "10px" }}
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.userNickName &&
                        (errors.userNickName as any).type === "required" && (
                          <div className="error">O NickName é obrigatório</div>
                        )}
                    </Form.Group>
                  </MyForm>

                  <MyLableText> Seu Email: </MyLableText>
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        placeholder="ex.: robson@gmail.com"
                        style={{ borderRadius: "10px" }}
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Insira um email válido",
                          },
                        })}
                      />
                      {errors.userEmail &&
                        (errors.userEmail as any).type === "required" && (
                          <div className="error">O Email é obrigatório</div>
                        )}
                      {errors.userEmail &&
                        (errors.userEmail as any).type === "pattern" && (
                          <div className="error">
                            {(errors.userEmail as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </MyForm>

                  <div className="row" style={{ margin: 0 }}>
                    <MyLableText>Número de telefone</MyLableText>
                  </div>
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <InputGroup>
                        <Col md={2} style={{ padding: 0 }}>
                          <Form.Control
                            type="text"
                            name="userDDD"
                            id="userDDD"
                            placeholder="01"
                            style={{ borderRadius: "10px" }}
                            ref={register({
                              pattern: {
                                value: /^[0-9]+$/i,
                                message: "Insira um número válido",
                              },
                              required: true,
                            })}
                          />
                          {errors.userDDD &&
                            (errors.userDDD as any).type === "pattern" && (
                              <div className="error">
                                {(errors.userDDD as any).message}
                              </div>
                            )}
                          {errors.userDDD &&
                            (errors.userDDD as any).type === "required" && (
                              <div className="error">O DDD é obrigatório</div>
                            )}
                        </Col>
                        <Col style={{ padding: 0 }}>
                          <Form.Control
                            type="text"
                            name="UserNumber"
                            id="UserNumber"
                            placeholder="12345678"
                            style={{ borderRadius: "10px" }}
                            ref={register({
                              pattern: {
                                value: /^[0-9]+$/i,
                                message: "Insira um número válido",
                              },
                              required: true,
                            })}
                          />
                        </Col>
                        {errors.UserNumber &&
                          (errors.UserNumber as any).type === "pattern" && (
                            <div className="error">
                              {(errors.UserNumber as any).message}
                            </div>
                          )}
                        {errors.UserNumber &&
                          (errors.UserNumber as any).type === "required" && (
                            <div className="error">O número é obrigatório</div>
                          )}
                      </InputGroup>
                    </Form.Group>
                  </MyForm>
                </Col>

                <Col sm={12} md={6}>
                  <MyLableText style={{ marginBottom: "2% 0" }}>
                    Escolha sua foto:
                  </MyLableText>
                  <MyForm>
                    <div style={{ margin: "5%" }}>
                      <div className="mb-3">
                        <Form.File custom>
                          <Form.File.Label>Procurar...</Form.File.Label>
                          <Form.File.Input
                            name="userPhoto"
                            id="userPhoto"
                            ref={register({
                              required: true,
                            })}
                          />
                          {errors.userPhoto &&
                            (errors.userPhoto as any).type === "required" && (
                              <div className="error">A foto é obrigatório</div>
                            )}
                        </Form.File>
                      </div>

                      <MyButton
                        type="submit"
                        className="btn MyButtonSubmitModalLogin float-right"
                      >
                        Enviar
                      </MyButton>
                      <div style={{ color: "red", fontSize: "20px" }}>
                        {erros}
                      </div>
                    </div>
                  </MyForm>
                </Col>
              </Row>
            </Form>
          </MyRow>

          <Social>
            <Row style={{ marginBottom: "3%" }}>
              <img
                src={facebook}
                alt="facebook logo"
                style={{
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                }}
              />
              <div style={{ marginLeft: "2%", cursor: "pointer" }}>
                ChumeCompany
              </div>
            </Row>
            <Row>
              <img
                src={instagram}
                alt="facebook logo"
                style={{ width: "32px", height: "32px", cursor: "pointer" }}
              />
              <div style={{ marginLeft: "2%", cursor: "pointer" }}>
                ChumeCompany
              </div>
            </Row>
          </Social>
        </Container>
      </MyContainer>
    </div>
  );
};

export default FormCadastro;
