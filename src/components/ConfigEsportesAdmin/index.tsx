import React from "react";

import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { MyContainer, ErrorMessage } from "./styles";
type FormId = {
  id: string;
};

const ConfigEsportesAdmin: React.FC = () => {
  const { register, handleSubmit } = useForm<FormId>();
  const [existingId, setExistingId] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(
    !existingId ? true : false
  );
  const [erros, setErros] = React.useState(false);

  function onSubmit(data: FormId) {
    if (data.id === "123") {
      setExistingId(true);
      setIsDisabled(false);
      setErros(false);
    } else {
      setExistingId(false);
      setIsDisabled(true);
      setErros(true);
    }
  }

  if (existingId) {
    console.log("o id existe zé mané");
  }
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "5% 0" }}>
        <MyContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Col md={3}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="id"
                    placeholder="Insira o ID do Esporte"
                    ref={register}
                  />
                </Form.Group>
                {erros && <ErrorMessage>Esse ID não existe :(</ErrorMessage>}
              </Col>

              <Col>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Pesquisar
                </Button>
              </Col>
            </Form.Row>
          </Form>

          <Form>
            <fieldset disabled={isDisabled}>
              <Form.Row style={{ marginTop: "5%" }}>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="NomeEsporte">Nome</Form.Label>
                    <Form.Control id="NomeEsporte" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="DescricaoEsporte">
                      Descrição
                    </Form.Label>
                    <Form.Control id="DescricaoEsporte" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label htmlFor="LocalizacaoEsporte">
                      Localização
                    </Form.Label>
                    <Form.Control id="LocalizacaoEsporte" />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row style={{ justifyContent: "flex-end", marginTop: "2%" }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Excluir
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Alterar
                </Button>
              </Form.Row>
            </fieldset>
          </Form>
        </MyContainer>
      </div>
    </div>
  );
};

export default ConfigEsportesAdmin;
