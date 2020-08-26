import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { MyContainer } from "./styles";
type FormId = {
  id: string;
};

const ConfigQuadrasAdmin: React.FC = () => {
  const { register, handleSubmit } = useForm<FormId>();
  const [existingId, setExistingId] = React.useState(false);
  function onSubmit(data: FormId) {
    if (data.id === '123') {
      setExistingId(true);      
    } else {
      setExistingId(false);
    }
  }
  if (existingId) {
    return <div>hmmm deucerto</div>;
  }
  return (
    <div>
      <h3 style={{ margin: "10% 0 2% 5%" }}>Configuração das quadras</h3>
      <div className="row justify-content-center" style={{ margin: 0 }}>
        <MyContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Col md={3}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="id"
                    placeholder="Insira o ID da quadra"
                    ref={register}
                  />
                </Form.Group>
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
        </MyContainer>
      </div>
    </div>
  );
};

export default ConfigQuadrasAdmin;
