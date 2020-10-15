import styled from "styled-components";
import {SearchAlt} from "@styled-icons/boxicons-regular/SearchAlt"

export const MyNav = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;
export const SearchIcon = styled(SearchAlt)`
  width:35px;
  height:35px;
  fill: var(--fontBlack);
  flex-shrink:0;
  position:absolute;
  left:calc(100% - 40px);
  cursor: pointer;
`;