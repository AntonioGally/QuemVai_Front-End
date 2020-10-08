import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Container, Form, Row, Col, Spinner } from "react-bootstrap";
import { MyTitleForm, MyLableText, MyForm, MyButton } from "./styles";
import "./ModalConfigStyles.css";
import SvgModalConfigUser from "../../img/icones/SvgModalConfigUser.png";

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
  const [sucesso, setSucesso] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const SubmitForm = async (data: FormPhoto) => {
    setLoading(true);
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
            setSucesso("Foto atualizada com suceso!");
            setTimeout(function () {
              setSucesso("");
            }, 5000);
            setLoading(false);
          }
          if (!response.data["Photo updated"]) {
            setErros("Houve algum problema na atualização de dados");
            setLoading(false);
          }
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      };
    };
    reader.readAsDataURL(file);
  };

  const handleDeletePhoto = async () => {
    try {
      setLoading(true);
      var config = {
        headers: { "x-auth-token": Token() },
        validateStatus: function (status: any) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      };
      const response = await api.put("/api/user/delete/me/photo", {}, config);
      if (response.status === 200 && response.data["Photo deleted"]) {
        setSucesso("Foto deletada com suceso!");
        setTimeout(function () {
          setSucesso("");
        }, 5000);
        setLoading(false);
      }
      if (!response.data["Photo deleted"]) {
        setErros("Houve algum problema no processo :(");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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
  }, [loading]);

  return (
    <div className="WrapperModalConfig">
      <div className="MySvgGerenciarUserModal">
        <img src={SvgModalConfigUser} alt="Art Top" />
      </div>
      <Container fluid style={{ marginTop: "10%" }}>
        <MyTitleForm style={{ marginBottom: "4%" }}>
          Altere sua foto
        </MyTitleForm>

        <Form onSubmit={handleSubmit(SubmitForm)}>
          <Row style={{ alignItems: "center" }}>
            <Row style={{ margin: 0, width: "100%" }}>
              <Col md={12} lg={6} style={{ textAlign: "center" }}>
                <MyLableText> Sua foto de perfil </MyLableText>
                <MyForm className="firstColumn">
                  <img
                    src={data?.Photo}
                    style={{
                      marginTop: "2%",
                      width: "220px",
                      height: "220px",
                      borderRadius: "50%",
                    }}
                    alt={"Imagem do usuário"}
                  />
                </MyForm>
              </Col>
              <Col md={12} lg={6}>
                <MyLableText>Alterar</MyLableText>
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
                      <Row>
                        {loading ? <Spinner animation="border" /> : ""}

                        <div
                          className="text-danger"
                          style={{ fontFamily: "Poppins", fontSize: "20px" }}
                        >
                          {erros}
                        </div>
                        <div
                          className="text-success"
                          style={{ fontFamily: "Poppins", fontSize: "20px" }}
                        >
                          {sucesso}
                        </div>
                      </Row>
                    </div>
                  </div>
                </MyForm>
              </Col>
            </Row>
          </Row>
          <Row style={{ justifyContent: "flex-end", marginTop: "10%" }}>
            <Col md={6} lg={3}>
              <MyButton
                type="button"
                className="btn"
                style={{ width: "100%" }}
                onClick={handleDeletePhoto}
              >
                Excluir Foto
              </MyButton>
            </Col>
            <Col md={6} lg={3}>
              <MyButton type="submit" className="btn" style={{ width: "100%" }}>
                Salvar
              </MyButton>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default PhotoAtualization;
