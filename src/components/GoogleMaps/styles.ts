import styled from "styled-components";

export const MySearchInput = styled.input`
  border-radius: 10px;
  width: 35%;
  height: 60px;
  margin: 20px 80px;
  outline: 0;
  padding: 10px 10px 10px 20px;
  border: 0;
  background-color: var(--input);
  &::-webkit-input-placeholder {
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 500;
    color: var(--fontBlack);
  }
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
  @media (max-width:768px){
    width:100%;
    height:50px;
    margin:0;
  }
`;
