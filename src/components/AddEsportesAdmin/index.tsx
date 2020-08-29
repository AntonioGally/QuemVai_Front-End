import React from "react";

import { Form, Col, Button } from "react-bootstrap";
import { MyContainer } from "./styles";

type FormCadastroEsporte = {
  NomeEsporte: string;
  DescricaoEsporte: string;
  LocalizacaoEsporte: string;
};

const AddEsportesAdmin: React.FC = () => {
  return (
    <div>
      <div className="row justify-content-center" style={{ margin: "1% 0" }}>
        <MyContainer>
          <Form>
            <Form.Row style={{ marginTop: "5%" }}>
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="NomeEsporte">Nome</Form.Label>
                  <Form.Control id="NomeEsporte" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="DescricaoEsporte">Descrição</Form.Label>
                  <Form.Control id="DescricaoEsporte" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label htmlFor="LocalizacaoEsporte">
                   ID da Localização
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
                Adicionar
              </Button>
            </Form.Row>
          </Form>
        </MyContainer>
      </div>
    </div>
  );
};

export default AddEsportesAdmin;
