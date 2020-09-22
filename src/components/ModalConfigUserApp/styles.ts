import styled from 'styled-components';
import {Edit} from "@styled-icons/boxicons-regular/Edit"

export const MyTitleForm = styled.h3`
  font-family: "Poppins";
  color: var(--fontWhite);  
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MyForm = styled.div`  
  margin-bottom: 5%;

  @media (min-width: 1200px) {
    &.firstColumn {
      width: 100%;
    }
  }
`;
export const MyLableText = styled.h5`
  font-family: "Poppins";
  color: var(--fontWhite);
  font-size:28px;
  
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

export const EditIcon = styled(Edit)`
  width:28px;
  height:28px;
  fill:white;
  flex-shrink:0;
  margin-left:20px;
`;