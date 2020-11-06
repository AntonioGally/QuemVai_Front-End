import styled from "styled-components";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

export const MyRow = styled.div`
  display: flex;

  margin-top: 15%;
  width: 100%;
  position: absolute;
`;

export const MySearchInput = styled.input`
  border-radius: 10px;
  width: 35%;
  height: 60px;
  outline: 0;
  padding: 10px 10px 10px 45px;
  border: 0;
  box-shadow: 0px 0px 28.2764px rgba(0, 0, 0, 0.35);

  ::-webkit-input-placeholder {
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 500;
    color: var(--fontBlack);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;
export const SearchIcon = styled(SearchAlt2)`
  position: absolute;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  fill: var(--buttonFill);

  left: 20px;
  top: 15%;

  cursor: pointer;
`;
