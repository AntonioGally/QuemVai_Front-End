import styled from "styled-components";

export const ErrorMessage = styled.div`
  color: red;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 500;
`;
export const MyForm = styled.div`
  margin-bottom: 5%;

  &.firstColumn {
    width: 65%;
  }
`;

export const MyLableText = styled.h3`
  font-family: "Poppins";
  font-size: 28px;
  color: black;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  &.title {
    margin:3% 0 5% 8%;
    color:white;
  }
`;
