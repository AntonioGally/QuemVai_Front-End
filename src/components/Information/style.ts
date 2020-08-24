import styled from "styled-components";

export const MyRow = styled.div`
  border-radius: 15px;
  background-color: var(--primary);  
  &.WithoutBG {
    background-color: var(--background);
  }
  &.RowPlataform {
    border-radius: 0;
    background-color: white;
    text-align: justify;
    margin-bottom:30px;
  }
`;

export const MyCol = styled.div`
  &.text {
    padding: 0 5%;
  }

  @media (min-width: 1200px) {
    &.text {
      word-break: normal;
      max-width: 45% !important;
    }
  }
  @media (min-width: 1200px) {
    &.ColPlataform {
      max-width: 25%;
      margin-left: 30px;
    }
  }
`;

export const TitleContent = styled.h1`
  font-family: "Roboto Regular";

  @media (max-width: 500px) {
    &.plataforms{
      margin-top:25% !important;
    }
  }
  
  &.plataforms {
    margin-top:5%;
    text-align: center;
  }
`;
export const TextContent = styled.div`
  @media (max-width: 500px) {
    font-size: 16px;
  }
  margin-top: 3%;
  margin-bottom:3%;
  font-family: "Roboto Regular";
  font-size: 20px;
  text-align: justify;
`;
