import styled from "styled-components";

export const MyImage = styled.div`
    width:300px;
    height:300px;
    background-color:#4CAF50;
    margin-top:5%;
    border-radius:15px;
`;

export const MyRow = styled.div`
    margin-top: 8%;
`;

export const MyCol = styled.div`
  &.text {
    padding: 0 5%;
  }

  @media (min-width: 1000px) {
   
    word-break: normal;
    max-width: 45% !important;
    
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
