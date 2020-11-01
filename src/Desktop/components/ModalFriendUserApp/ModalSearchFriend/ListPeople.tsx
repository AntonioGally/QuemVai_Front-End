import React, { useEffect } from "react";

// import { Container } from './styles';

import { SearchPeople } from "../../../../@types";
import api from "../../../../services/api";
import { Token } from "../../../../services/auth";

interface Data {
  UserList: SearchPeople[];
}
export interface Props {
  word: String;
}

const ModalSearchFriend: React.FC<Props> = ({ word }) => {
  const [success, setSuccess] = React.useState("");
  const [erros, setErros] = React.useState("");
  const [reload, setReload] = React.useState(Number);
  const [data, setData] = React.useState<Data>();

  useEffect(() => {
    Promise.all([
      api.post(
        "/api/search/main",
        { word: word },
        {
          headers: { "x-auth-token": Token() },
        }
      ),
    ]).then(async (responses) => {
      const [PushSearchList] = responses;
      const response = await PushSearchList.data;

      setData({ UserList: response[1]["Users"] });
      console.log(data)
    });
  }, [word, reload]);

  return <div></div>;
};
{
  /* <div
className="text-success"
style={{
  fontFamily: "Poppins",
  fontSize: "25px",
  marginLeft: "9%",
}}
>
{success}
</div>
<div
className="text-danger"
style={{
  fontFamily: "Poppins",
  fontSize: "25px",
  marginLeft: "9%",
}}
>
{erros}
</div> 
{loading ? <Spinner animation="border" /> : ""}
*/
}

export default ModalSearchFriend;
