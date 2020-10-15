import styled from "styled-components";

export const MyContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: var(--primary);
  overflow-y: scroll;
  padding:20px;
  border-radius:15px;

  > Table > thead > tr {
    background-color:#DCDCDC;
  }
`;
export const MyWrapper = styled.div`
  @media (min-width:1400px)
  {
    width:70%;
  }
  @media (max-width:1399px){
    width: 90%;
  }
`;