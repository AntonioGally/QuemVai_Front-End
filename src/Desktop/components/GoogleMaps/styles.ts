import styled from "styled-components";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";


export const MyRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px 0px 80px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const MySearchInput = styled.input`
  border-radius: 10px;
  width: 35%;
  height: 60px;
  outline: 0;
  padding: 10px 10px 10px 60px;
  border: 0;
  box-shadow: 0px 0px 28.2764px rgba(0, 0, 0, 0.35);

  ::-webkit-input-placeholder {
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 500;
    color: var(--fontBlack);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;

export const SearchIcon = styled(SearchAlt2)`
  position: absolute;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  fill: var(--buttonFill);

  left: 20px;
  top: 25%;

  cursor: pointer;
`;
