import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Form, Spinner } from "react-bootstrap";
import { TitleForm } from "./styles";
import Buttons from "../../elements/Buttons";

import { usePhotosContext } from "../../../Context/ReloadPhotoMobile";

import api from "../../../services/api";
import { Token } from "../../../services/auth";

type FormPhoto = {
  userPhoto: any;
};
interface Data {
  Photo: any;
}

const AccountContent: React.FC = () => {
  const { reload, setReload } = usePhotosContext();
  const [loading, setLoading] = React.useState(false);
  const { errors, register, handleSubmit } = useForm<FormPhoto>();
  const [data, setData] = useState<Data>();
  const [erros, setErros] = React.useState("");
  const [sucesso, setSucesso] = React.useState("");

  const SubmitForm = async (data: FormPhoto) => {
    setLoading(true);
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
        const image: any = new Image();
        (image.src as any) = reader.result;

        image.onload = async function () {
          var maxWidth = 500,
            maxHeight = 500,
            imageWidth = image.width,
            imageHeight = image.height;

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
            if (response.data["Photo updated"] && response.status === 200) {
              setSucesso("Foto atualizada com suceso!");
              setErros("");
              setTimeout(function () {
                setSucesso("");
              }, 4000);
              setTimeout(() => {
                setLoading(false);
                setReload(reload + 1);
              }, 1000);
            }
            if (!response.data["Photo updated"]) {
              setErros("Houve algum problema na atualização da foto");
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
      setLoading(false);
      setErros("Insiria uma imagem válida");
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
  }, [reload]);

  function ViewImage(input: any) {
    var file = input[0];
    var fileType = file.type;
    if (
      fileType === "image/jpeg" ||
      fileType === "image/png" ||
      fileType === "image/jpg"
    ) {
      var reader = new FileReader();
      reader.onloadend = () => {
        const image: any = new Image();
        (image.src as any) = reader.result;

        image.onload = async function () {
          var maxWidth = 500,
            maxHeight = 500,
            imageWidth = image.width,
            imageHeight = image.height;

          imageWidth = maxWidth;
          imageHeight = maxHeight;

          var canvas = document.createElement("canvas");
          canvas.width = imageWidth;
          canvas.height = imageHeight;

          var ctx = canvas.getContext("2d");

          ctx?.drawImage(image, 0, 0, imageWidth, imageHeight);

          var finalFile = canvas.toDataURL(fileType);
          var imageInput = document.getElementById(
            "userImage"
          ) as HTMLInputElement;
          imageInput.setAttribute("src", finalFile);
        };
      };
      reader.readAsDataURL(file);
    } else {
      setErros("Selecione uma imagem válida");
    }
  }
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
        setErros("");
        setTimeout(function () {
          setSucesso("");
        }, 4000);
        setTimeout(() => {
          setLoading(false);
          setReload(reload + 1);
        }, 2000);
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
  return (
    <div style={{ marginTop: "30px" }}>
      {!data ? (
        <Spinner animation="border" />
      ) : (
        <>
          <Form
            onSubmit={handleSubmit(SubmitForm)}
            style={{ paddingLeft: "10px" }}
          >
            <div style={{ marginBottom: "30px" }}>
              <TitleForm> Sua foto: </TitleForm>
              <div
                className="row"
                style={{ margin: 0, justifyContent: "center" }}
              >
                <img
                  src={data?.Photo}
                  id="userImage"
                  style={{
                    width: "40%",
                    height: "40%",
                    borderRadius: "50%",
                  }}
                  alt={"Imagem do usuário"}
                />
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <TitleForm> Nova foto: </TitleForm>
              <div className="row" style={{ margin: 0, alignItems: "center" }}>
                <div style={{ width: "100%" }}>
                  <Form.File custom>
                    <Form.File.Label>Procurar...</Form.File.Label>
                    <Form.File.Input
                      name="userPhoto"
                      id="userPhoto"
                      onChange={(e: any) => ViewImage(e.target.files)}
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
              </div>
              {loading ? <Spinner animation="border" /> : ""}
              <div className="text-danger" style={{ fontFamily: "Poppins" }}>
                {erros}
              </div>
              <div className="text-success" style={{ fontFamily: "Poppins" }}>
                {sucesso}
              </div>
            </div>
            <div
              style={{ marginTop: "95px", width: "100%", textAlign: "center" }}
            >
              <div style={{ width: "80%", margin: "0px 0px 15px 7%" }}>
                <Buttons text="Salvar" submit />
              </div>
              <div
                style={{ width: "80%", margin: "0px 0px 15px 7%" }}
                onClick={handleDeletePhoto}
              >
                <Buttons text="Deletar foto" fill />
              </div>
            </div>
          </Form>
        </>
      )}
    </div>
  );
};

export default AccountContent;
