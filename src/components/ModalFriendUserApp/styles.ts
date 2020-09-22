import styled from "styled-components";

export const MyTitleForm = styled.h3`
  margin-top: 2%;
  font-family: "Poppins";
  color: var(--fontWhite);
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const MyLableText = styled.h5`
  font-family: "Poppins";
  color: var(--fontWhite);
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  &.userInfo {
    color: var(--buttonFill);
    margin-bottom:10px;
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

export const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 500px;
`;

export const MyRowPeople = styled.div`
  margin: 7% 0px 0px 0px;
  justify-content: center;
  display: flex;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
