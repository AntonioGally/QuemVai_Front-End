import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Container, Form, Row, Col } from "react-bootstrap";
import { MyTitleForm, MyLableText, MyForm, MyButton } from "./styles";
import "./ModalConfigStyles.css";

import api from "../services/api";
import { Token } from "../services/auth";

type FormPhoto = {
  userPhoto: any;
};

interface Data {
  Photo: any;
}

const PhotoAtualization: React.FC = () => {
  const { errors, register, handleSubmit } = useForm<FormPhoto>();
  const [data, setData] = useState<Data>();
  const [erros, setErros] = React.useState("");

  const SubmitForm = async (data: FormPhoto) => {
    var photos = "";

    var file = data.userPhoto[0];
    var fileType = file.type;
    var reader = new FileReader();
    reader.onloadend = () => {
      const image: any = new Image();
      (image.src as any) = reader.result;

      image.onload = async function () {
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
        try {
          var config = {
            headers: { "x-auth-token": Token() },
            validateStatus: function (status: any) {
              return status < 500; // Resolve only if the status code is less than 500
            },
          };
          const response = await api.put(
            "/api/user/update/me/photo",
            { photos },
            config
          );
          if (response.data["Photo updated"]) {
            alert("Foto atualizada com sucesso!");
            window.location.reload();
          }
          if (!response.data["Photo updated"]) {
            setErros("Houve algum problema na atualização de dados");
          }
        } catch (err) {
          console.log(err);
        }
      };
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    Promise.all([
      api.get("/api/user/bring/me", {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
        headers: { "x-auth-token": Token() },
      }),
    ]).then(async (responses) => {
      const [PushUserInformation] = responses;

      const informations = await PushUserInformation.data;
      setData({ Photo: informations["info"]["photos"] });
    });
  }, []);

  return (
    <div className="WrapperModalConfig">
      <Container fluid>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Altere sua foto
        </MyTitleForm>

        <Form onSubmit={handleSubmit(SubmitForm)}>
          <Row style={{ alignItems: "center" }}>
            <Row style={{margin:"0px 0px 4% 0px", width:"100%"}}>
              <Col md={6} style={{ textAlign: "center" }}>
                <MyLableText> Foto de perfil: </MyLableText>
              </Col>
              <Col md={6} style={{ textAlign: "center" }}>
                <MyLableText>Alterar</MyLableText>
              </Col>
            </Row>


            <Row style={{margin:0, width:"100%"}}>
              <Col md={6} style={{ textAlign: "center" }}>
                <MyForm className="firstColumn">
                  <img
                    src={data?.Photo}
                    style={{
                      marginTop: "2%",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                    alt={"Imagem do usuário"}
                  />
                </MyForm>
              </Col>
              <Col md={6}>
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
                      <div style={{ fontFamily: "Poppins", color: "red" }}>
                        {erros}
                      </div>
                    </div>

                    <div className="row" style={{ justifyContent: "flex-end" }}>
                      <MyButton
                        type="submit"
                        className="btn"
                        style={{ width: "40%" }}
                      >
                        Salvar
                      </MyButton>
                    </div>
                  </div>
                </MyForm>
              </Col>
            </Row>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default PhotoAtualization;
