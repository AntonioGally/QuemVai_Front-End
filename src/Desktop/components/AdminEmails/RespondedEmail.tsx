import React, {useState, useEffect} from 'react';

// import { Container } from './styles';

const AdminEmails: React.FC = () => {
  const [modalDeleteEmail, setModalDeleteEmail] = useState(false);
  // const [data, setData] = useState<Data>();
  const [auxId, setAuxId] = useState(Number);
  const [reload, setReload] = useState(0);
  const [erros, setErros] = useState("");
  function DeleteHandler() {
    if (!auxId) {
      setErros("Selecione um espaço");
    } else {
      setErros("");
      setModalDeleteEmail(true);
    }
  }
  return (
    <div>
      <h3>Mané</h3>
      {/* {modalDeleteEmail ? (
        <ModalDelete
          show={modalDeleteEmail}
          onHide={() => {
            setModalDeleteEmail(false);
            setReload(reload + 1);
          }}
          id={auxId}
        />
      ) : (
        ""
      )} */}
    </div>
  );
}

export default AdminEmails;