import styled from "styled-components";

export const MyContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: var(--primary);
  border-radius:15px;
  overflow-y: scroll;
  padding:20px;
  > Table > thead > tr {
    background-color:#DCDCDC;
  }
`;
export const MyWrapperTable = styled.div`
  @media (min-width:1400px)
  {
    width:70%;
  }
  @media (max-width:1399px){
    width: 90%;
  }
`;