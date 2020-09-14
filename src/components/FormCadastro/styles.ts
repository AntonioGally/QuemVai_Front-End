import styled from "styled-components";

export const MyContainer = styled.div`
  border-radius: 15px;
  margin-top: 8%;
  background-color: var(--background);
  padding: 0 8% 4% 8%;
  margin-bottom: 5%;
`;

export const MyForm = styled.div`  
  margin-bottom: 5%;

  @media (min-width: 1200px) {
    &.firstColumn {
      width: 60%;
    }
  }
`;
export const MyCol = styled.div`
  @media (min-width: 1200px) {
    width: 50%;
  }
`;
export const Social = styled.div`
  margin-top: 3%;
  margin-left: 5%;
`;
export const MyRow = styled.div`
  @media (max-width: 768px) {
    margin: 20% 0;
  }
  margin: 5% 0;
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
export const MyButton = styled.button`
  background-color: var(--buttonFill);
  border-radius: 6.5px !important;
  color: var(--fontWhite);
  width: 30%;
  padding: 10px;

  &:hover {
    background-color: var(--buttonFill);
    opacity: 0.8;
    color: var(--fontWhite);
    transition: all 0.5s ease-in-out;
  }
`;
