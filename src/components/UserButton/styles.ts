import styled from "styled-components";
import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 50px !important;
    height: 50px !important;
    margin-right:10px;
  }
  width: 75px;
  height: 75px;
  position: relative;
  cursor: pointer;
  border-radius: 50%;  
  
  > img {
    @media (max-width: 768px) {
      width: 50px !important;
      height: 50px !important;
    }
    width: 75px;
    height: 75px;
  }

  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    top: -8px;
    right: 0;
    background-color: green;
    border-radius: 50%;
    content: "";
    display: ${(Props) => (Props.isOnline ? "inline" : "none")};
  }
`;
