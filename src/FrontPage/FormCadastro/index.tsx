import React from "react";
import { useForm } from "react-hook-form";
import ModalLogin from "../ModalLogin";
import "./FormCadastro.css";
import {
  Container,
  Col,
  Row,
  Form,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import facebook from "../../img/icones/facebook.svg";
import instagram from "../../img/icones/instagram.svg";
import { FormCadastroUser } from "../../@types";
import api from "../../services/api";
import {
  MyContainer,
  MyRow,
  MyLableText,
  MyForm,
  Social,
  MyButton,
} from "./styles";

const FormCadastro: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormCadastroUser>();
  const [loading, setLoading] = React.useState(false);
  const [succes, setSucces] = React.useState(false);
  const [erros, setErros] = React.useState("");
  const [modalShow, setModalShow] = React.useState(true);
  const [auxEmail, setAuxEmail] = React.useState("");

  const SubmitForm = async (data: FormCadastroUser) => {
    const name = data.userName;
    const username = data.userNickName;
    const email = data.userEmail;
    const cellPhoneNumber = data.UserNumber;
    const DDD = data.userDDD;
    const userSenha = data.userPassword;
    const userConfirmaSenha = data.userConfirmPassword;

    var photos = "";
    var file = data.userPhoto[0];
    var fileType = file.type;
    if (
      fileType === "image/jpeg" ||
      fileType === "image/png" ||
      fileType === "image/jpg"
    ) {
      var reader = new FileReader();
      reader.onloadend = () => {
        var image: any = new Image();
        (image.src as any) = reader.result;

        image.onload = async function () {
          var maxWidth = 500,
            maxHeight = 500,
            imageWidth = image.width,
            imageHeight = image.height;

          // if (imageWidth > imageHeight) {
          //   if (imageWidth > maxWidth) {
          //     imageHeight *= maxWidth / imageWidth;
          //     imageWidth = maxWidth;
          //   }
          // } else {
          //   if (imageHeight > maxHeight) {
          //     imageWidth *= maxHeight / imageHeight;
          //     imageHeight = maxHeight;
          //   }
          // }

          imageWidth = maxWidth;
          imageHeight = maxHeight;
          var canvas = document.createElement("canvas");
          canvas.width = imageWidth;
          canvas.height = imageHeight;

          var ctx = canvas.getContext("2d");

          ctx?.drawImage(image, 0, 0, imageWidth, imageHeight);

          var finalFile = canvas.toDataURL(fileType);
          photos = finalFile;

          try {
            setLoading(true);
            if (userSenha === userConfirmaSenha) {
              var config = {
                headers: { "x-password": userSenha },
                validateStatus: function (status: any) {
                  return status < 500; // Resolve only if the status code is less than 500
                },
              };

              const response = await api.post(
                "/api/login/signup/user",
                { cellPhoneNumber, email, DDD, name, username, photos },
                config
              );

              if (response.status === 200 && response.data["User registered"]) {
                setAuxEmail(email);
                setLoading(false);
                setSucces(true);
              }
              if (response.status === 406) {
                setErros("Esse Email já foi registrado");
                setLoading(false);
              }

              if (response.status === 404) {
                alert("Houve algum problema!");
                setLoading(false);
              }
            } else {
              setErros("As senhas não estão iguais");
              setLoading(false);
            }
          } catch (err) {
            console.log(err);
            setLoading(false);
          }
        };
      };
      reader.readAsDataURL(file);
    } else {
      setErros("Insiria uma imagem válida");
      setLoading(false);
    }
  };

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
                        className="MyInputFormCadastro"
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
                        className="MyInputFormCadastro"
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
                        className="MyInputFormCadastro"
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
                        <Col md={2} sm={2}style={{ padding: 0, marginRight:"1%"}}>
                          <Form.Control
                            type="text"
                            name="userDDD"
                            id="userDDD"
                            placeholder="01"
                            className="MyInputFormCadastro"
                            ref={register({
                              pattern: {
                                value: /^[0-9]+$/i,
                                message: "Insira um número válido",
                              },
                              max: {
                                value: 3,
                                message: "Insira no máximo 3 números",
                              },
                              min: {
                                value: 2,
                                message: "Insira no mínimo 2 números",
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
                            (errors.userDDD as any).type === "max" && (
                              <div className="error">
                                {(errors.userDDD as any).message}
                              </div>
                            )}
                          {errors.userDDD &&
                            (errors.userDDD as any).type === "min" && (
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
                            className="MyInputFormCadastro"
                            ref={register({
                              pattern: {
                                value: /^[0-9]+$/i,
                                message: "Insira um número válido",
                              },
                              max: {
                                value: 10,
                                message: "Insira no máximo 10 números",
                              },
                              min: {
                                value: 8,
                                message: "Insira no mínimo 8 números",
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
                          (errors.UserNumber as any).type === "max" && (
                            <div className="error">
                              {(errors.UserNumber as any).message}
                            </div>
                          )}
                        {errors.UserNumber &&
                          (errors.UserNumber as any).type === "min" && (
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
                  <MyLableText> Sua Senha: </MyLableText>
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="password"
                        name="userPassword"
                        id="userPassword"
                        placeholder="ex.: *******"
                        className="MyInputFormCadastro"
                        ref={register({
                          minLength: {
                            value: 8,
                            message: "Insira no mínimo 8 caractéres",
                          },
                          required: true,
                        })}
                      />
                      {errors.userPassword &&
                        (errors.userPassword as any).type === "required" && (
                          <div className="error">A senha é obrigatória</div>
                        )}
                      {errors.userPassword &&
                        (errors.userPassword as any).type === "minLenght" && (
                          <div className="error">
                            {(errors.userPassword as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </MyForm>
                  <MyLableText> Confirme sua Senha: </MyLableText>
                  <MyForm className="firstColumn">
                    <Form.Group>
                      <Form.Control
                        type="password"
                        name="userConfirmPassword"
                        id="userConfirmPassword"
                        placeholder="ex.: *******"
                        className="MyInputFormCadastro"
                        ref={register({
                          minLength: {
                            value: 8,
                            message: "Insira no mínimo 8 caractéres",
                          },
                          required: true,
                        })}
                      />
                      {errors.userConfirmPassword &&
                        (errors.userConfirmPassword as any).type ===
                          "required" && (
                          <div className="error">
                            A Confirmação da senha é obrigatória
                          </div>
                        )}
                      {errors.userConfirmPassword &&
                        (errors.userConfirmPassword as any).type ===
                          "minLenght" && (
                          <div className="error">
                            {(errors.userConfirmPassword as any).message}
                          </div>
                        )}
                    </Form.Group>
                  </MyForm>
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
                              <div className="error">A foto é obrigatória</div>
                            )}
                        </Form.File>
                      </div>

                      <MyButton
                        type="submit"
                        className="btn ButtonSubmitFormCadastro float-right"
                      >
                        Cadastrar
                      </MyButton>
                      {loading ? <Spinner animation="border" /> : ""}
                      <div
                        className="text-danger"
                        style={{ fontFamily: "Poppins", fontSize: "20px" }}
                      >
                        {erros}
                      </div>
                      {succes ? (
                        <div
                          className="text-success"
                          style={{ fontFamily: "Poppins", fontSize: "20px" }}
                        >
                          Conta cadastrada com sucesso
                        </div>
                      ) : (
                        ""
                      )}
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
      {succes ? (
        <ModalLogin
          show={modalShow}
          onHide={() => setModalShow(false)}
          emailCadastro={auxEmail}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default FormCadastro;
