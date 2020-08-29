import styled from "styled-components";

export const ErrorMessage = styled.div`
  color: red;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 500;
`;
export const MyForm = styled.div`
  margin-bottom: 5%;

  @media (min-width: 1200px) {
    &.firstColumn {
      width: 60%;
    }
  }
`;

export const MyLableText = styled.h3`
  font-family: "Poppins";
  font-size: 28px;
  color: black;
  > span {
    font-size: 18px;
    margin-left: 5px;
    font-weight: 200;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
